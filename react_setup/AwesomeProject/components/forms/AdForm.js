import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EditProfileButton, AdDescriptionAdding } from "../Buttons";
import { AntDesign } from "@expo/vector-icons";
import RadioButton from "../RadioButton";
import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { adCreationStyles, errorStyle } from "../../shared/Styles";
import { Divider } from "react-native-elements";
import RichTextEditor from "../RichTextEditor";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import {
  getErrorStyle,
  getErrorPlaceholder,
} from "../../shared/ValidationUtil";
import Picker from "../Picker";

const adSchema = yup.object({
  title: yup.string().required("Naslov je obavezan."),
  description: yup.string().required(),
  category: yup.object().required(),
  subCategory: yup.object().required(),
  price: yup.number().required(),
  agreement: yup.boolean().required(),
});

export default function AdForm(props) {
  const [visible, setVisible] = useState(false);

  const handleChangeVisible = (isVisible, formikProps) => {
    setVisible(isVisible);
    formikProps.setFieldTouched("description", !isVisible);
  };

  const handleChangeRichText = (formikProps, html) => {
    formikProps.setFieldValue("description", html);
  };

  const openEditor = () => {
    setVisible(true);
  };

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async () => {
    ImagePicker;
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleChangeAgreement = (formikProps, value) => {
    formikProps.setFieldValue("agreement", value);
    formikProps.setFieldTouched("agreement", value);
    formikProps.setFieldError("agreement", !value);
    formikProps.setFieldValue("price", 0);
    formikProps.setFieldTouched("price", false);
    formikProps.setFieldError("price", false);
  };

  const handleChangePrice = (formikProps, text) => {
    formikProps.setFieldValue("price", text);
    formikProps.setFieldError("price", !text);
    formikProps.setFieldValue("agreement", false);
    formikProps.setFieldTouched("agreement", false);
    formikProps.setFieldError("agreement", false);
  };

  const handleChangeCurrency = (formikProps, value) => {
    value !== ""
      ? formikProps.setFieldValue("currency", value === "RSD" ? "EUR" : "RSD")
      : formikProps.setFieldValue("currency", value);
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        category: props.categories[0],
        subCategory: props.subCategories[0],
        price: "",
        agreement: false,
        currency: "RSD",
      }}
      onSubmit={(values) => {
        console.log(values);
        props.handleSubmit({ ...values, image });
      }}
      validationSchema={adSchema}
    >
      {(formikProps) => (
        <ScrollView>
          <View style={adCreationStyles.mainContainer}>
            <View style={adCreationStyles.backForwardContainer}></View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Naziv oglasa</Text>
              <TextInput
                style={[
                  adCreationStyles.adNameField,
                  getErrorStyle(
                    formikProps.errors.title,
                    formikProps.touched.title
                  ),
                ]}
                placeholder="Max. 50 karaktera."
                placeholderTextColor={getErrorPlaceholder(
                  formikProps.errors.title,
                  formikProps.touched.title
                )}
                value={formikProps.values.title}
                onChangeText={formikProps.handleChange("title")}
                onBlur={formikProps.handleBlur("title")}
              />
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <RichTextEditor
                visible={visible}
                handleChangeVisible={handleChangeVisible}
                handleChangeRichText={handleChangeRichText}
                formikProps={formikProps}
                html={formikProps.values.description}
              />
              <AdDescriptionAdding
                onPress={openEditor}
                title={"Unesite opis oglasa"}
                formikProps={formikProps}
              />
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>
                Izaberi kategoriju i potkategoriju
              </Text>
              <View style={adCreationStyles.dropDownCatSubContainer}>
                <View style={adCreationStyles.dropDownCatContainer}>
                  <Picker
                    selectedValue={formikProps.values.category}
                    handleChangeValue={async (value) => {
                      formikProps.setFieldValue("category", value);
                      props.onChangeCategory(value.id);
                      formikProps.setFieldValue("subCategory", {
                        id: null,
                        name: "",
                      });
                    }}
                    items={props.categories}
                  ></Picker>
                </View>
                <Divider style={{ backgroundColor: "white" }} />
                <View style={adCreationStyles.dropDownSubContainer}>
                  <Picker
                    selectedValue={formikProps.values.subCategory}
                    handleChangeValue={(value) => {
                      formikProps.setFieldValue("subCategory", {
                        id: value.id,
                        value: value.name,
                      });
                    }}
                    items={props.subCategories}
                  ></Picker>
                </View>
              </View>
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Izaberi cenu</Text>
              <View
                style={[
                  adCreationStyles.priceRBContainer,
                  (formikProps.errors.price && formikProps.touched.price) ||
                  (formikProps.errors.agreement &&
                    formikProps.touched.agreement)
                    ? errorStyle.error
                    : null,
                ]}
              >
                <RadioButton
                  handleChangePrice={(text) =>
                    handleChangePrice(formikProps, text)
                  }
                  handleChangeAgreement={(value) =>
                    handleChangeAgreement(formikProps, value)
                  }
                  handleChangeCurrency={(value) =>
                    handleChangeCurrency(formikProps, value)
                  }
                  formikProps={formikProps}
                  price={formikProps.values.price}
                  agreement={formikProps.values.agreement}
                />
              </View>
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Fotografija</Text>
              {!image ? (
                <TouchableOpacity onPress={pickImage}>
                  <View style={adCreationStyles.pickImageContainer}>
                    <View style={adCreationStyles.pickImageAdditional}>
                      <Text style={adCreationStyles.pickingImage}>
                        Izaberi sliku
                      </Text>
                      <AntDesign
                        name="pluscircleo"
                        style={adCreationStyles.plusIcon}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={adCreationStyles.pickImageContainer}>
                  <View style={adCreationStyles.pickImageAdditional}>
                    <Text style={adCreationStyles.pickingImage}>
                      Slika uspešno sačuvana
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <EditProfileButton
              title={"Postavi"}
              onPress={formikProps.handleSubmit}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}
