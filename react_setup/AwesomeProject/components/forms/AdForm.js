import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { EditProfileButton, AdDescriptionAdding } from "../Buttons";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import RadioButton from "../RadioButton";
import { TouchableOpacity, Text, TextInput, View, Modal } from "react-native";
import { errorStyle } from "../../shared/Styles";
import { adCreationStyles } from "../../shared/adsStyles";
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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const adSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.object().required(),
  subCategory: yup
    .object({
      id: yup.number().required(),
      value: yup.string(),
    })
    .required(),
  price: yup
    .number()
    .nullable()
    .test({
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
  const [modalVisible, setModalVisible] = useState(false);

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
    const permissionGranted =
      await PermissionService.requestMediaLibraryPermission();
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
                placeholder="Max 50 karaktera."
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
              <View
                style={[
                  adCreationStyles.dropDownCatSubContainer,
                  getErrorStyle(
                    formikProps.errors.subCategory,
                    formikProps.touched.subCategory
                  ),
                ]}
              >
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
                      formikProps.setFieldTouched("subCategory", true);
                    }}
                    items={props.categories}
                  ></Picker>
                </View>
                <Divider style={{ backgroundColor: "white" }} />
                <View style={adCreationStyles.dropDownSubContainer}>
                  <Picker
                    selectedValue={formikProps.values.subCategory}
                    handleChangeValue={async (value) => {
                      await formikProps.setFieldValue("subCategory", {
                        id: value.id,
                        value: value.name,
                      });
                      await formikProps.setFieldTouched("subCategory", true);
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
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={adCreationStyles.inputFieldAdditionalContainer}>
                <Text style={adCreationStyles.fieldName}>
                  Izaberi tip oglasa
                </Text>
                <FontAwesome
                  name="question-circle-o"
                  style={adCreationStyles.questionMarkIcon}
                />
              </View>
            </TouchableOpacity>
            <Modal
              transparent={true}
              visible={modalVisible}
              animationType="slide"
            >
              <View style={adCreationStyles.centeredView}>
                <View style={adCreationStyles.modalView}>
                  <Ionicons
                    name="md-close"
                    size={wp("6.75%")}
                    onPress={() => setModalVisible(false)}
                    style={adCreationStyles.closeIcon}
                    color="black"
                  />
                  <ScrollView>
                    <View>
                      <Text style={adCreationStyles.adTypeTextName}>
                        {" "}
                        - VIP -
                      </Text>
                      <Text style={adCreationStyles.adTypeText}>
                        Osigurajte da Vaš oglas uvek bude istaknut prvi, na
                        samom vrhu pretrage po izuzetno jeftinoj ceni. U svakoj
                        potkategoriji može da postoji samo samo jedan VIP oglas.
                        Jedan dan košta 50 dinara, a najmanmje je moguće
                        rezervisati 7 dana. Dobar marketing se uvek isplati :)
                      </Text>
                    </View>
                    <View>
                      <Text style={adCreationStyles.adTypeTextName}>
                        - Premium -
                      </Text>
                      <Text style={adCreationStyles.adTypeText}>
                        Drugi vid plaćenog oglasa. Po ceni od 150 dinara
                        nedeljno, učinite da Vaš oglas bude bolje istaknut i
                        sortiran zajedno sa ostalim Premium oglasima, tik ispod
                        VIP oglasa.
                      </Text>
                    </View>
                    <View>
                      <Text style={adCreationStyles.adTypeTextName}>
                        - Classic -
                      </Text>
                      <Text style={adCreationStyles.adTypeText}>
                        Besplatan oglas za one koji žele da se oglase bez ikakve
                        novčane naknade.
                      </Text>
                    </View>
                    <View>
                      <Text style={adCreationStyles.adNoteText}>
                        * Uplate se vrše slanjem SMS-a sa tekstom VIP ili
                        Premium, u zavisnosti od toga za koji paket ste se
                        odlučili na broj 1312. Nakon uplate dobićete odgovor
                        koji sadrži kod koji je neophodno unet i u odgovarajuće
                        polje čime se potvrđuje uplata.
                      </Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </Modal>
            <View style={adCreationStyles.dropDownTypeWrapper}>
              <View style={adCreationStyles.dropDownTypeContainer}>
                <Picker
                  fieldWrapperStyle={{
                    alignSelf: "center",
                    marginTop: hp("1%"),
                    marginLeft: wp("2%"),
                    width: wp("42%"),
                    height: hp("6%"),
                    borderRadius: 8,
                    opacity: 0.8,
                  }}
                  fieldStyle={{
                    alignSelf: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: wp("40%"),
                  }}
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
              <TextInput
                style={adCreationStyles.typeCodeInput}
                placeholder="Unesite kod ovde"
                placeholderTextColor="#ededed"
              />
            </View>
            <EditProfileButton
              title={"Potvrdi"}
              onPress={() => {
                formikProps.handleSubmit();
              }}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}
