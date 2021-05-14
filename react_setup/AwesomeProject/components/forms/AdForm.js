import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
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
import PermissionService from "../../services/PermissionService";

const adSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.object().required(),
  subCategory: yup.object().required(),
  price: yup.number().nullable().test({
    name: "Price required",
    exclusive: false,
    params: {},
    message: "Price is required",
    // kada vratim true onda je ispunjen test i nema errore
    test: function (value) {
      if (value) {
        return true;
      }
      if (!value && this.parent.agreement === null) {
        return false;
      }
      if (!value && this.parent.agreement) {
        return true;
      }
      return false;
    },
  }),
  agreement: yup
    .boolean()
    .nullable()
    .test({
      name: "Agreement required",
      exclusive: false,
      params: {},
      message: "Agreement is required",
      test: function (value) {
        if (value || !value) {
          return true;
        }
        return false;
      },
    }),
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

  const pickImage = async (formikProps) => {
    const permissionGranted = await PermissionService.requestMediaLibraryPermission();
    if (!permissionGranted) {
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      await formikProps.setFieldValue("image", result.uri);
      setImage(result.uri);
    }
  };

  const handleChangeAgreement = async (formikProps, value) => {
    await formikProps.setFieldValue("agreement", value);
    await formikProps.setFieldTouched("agreement", value);
    await formikProps.setFieldValue("price", null);
    await formikProps.setFieldTouched("price", false);
  };

  const handleChangePrice = async (formikProps, text) => {
    await formikProps.setFieldValue("price", text);
    await formikProps.setFieldTouched("price", true);
    await formikProps.setFieldValue("agreement", false);
    await formikProps.setFieldTouched("agreement", false);
  };

  const handleChangeCurrency = async (formikProps, value) => {
    value !== ""
      ? formikProps.setFieldValue("currency", value === "RSD" ? "EUR" : "RSD")
      : formikProps.setFieldValue("currency", value);
    await formikProps.setFieldValue("agreement", null);
  };

  return (
    <Formik
      initialValues={{
        id: props.ad ? props.ad.id : null,
        title: props.ad ? props.ad.title : "",
        description: props.ad ? props.ad.description : "",
        category: props.ad ? props.categories[0] : props.categories[0],
        subCategory: props.ad
          ? {
              id: props.ad.subCategory.id,
              name: props.ad.subCategory.value,
            }
          : props.subCategories[0],
        price: props.ad ? props.ad.price.toString() : "",
        agreement: props.ad ? props.ad.agreement : null,
        currency: props.ad && props.ad.currency ? props.ad.currency : "RSD",
        creationDate: new Date().toISOString().slice(0, 10),
        image: props.ad && props.ad.imageBytes ? props.ad.imageBytes : null,
      }}
      onSubmit={(values) => {
        props.handleSubmit(values);
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
                  currency={formikProps.values.currency}
                />
              </View>
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Fotografija</Text>
              {!image ? (
                <TouchableOpacity onPress={() => pickImage(formikProps)}>
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
              onPress={() => {
                formikProps.handleSubmit();
                console.log(formikProps.errors);
              }}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}
