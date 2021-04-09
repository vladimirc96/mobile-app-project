import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EditProfileButton, AdDescriptionAdding } from "../Buttons";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import RadioButton from "../RadioButton";
import {
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";
import { Dimensions } from "react-native";
import { adCreationStyles } from "../../shared/Styles";
import { Divider } from "react-native-elements";
import RichTextEditor from "../RichTextEditor";
import { WebView } from "react-native-webview";
import * as ImagePicker from "expo-image-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const adSchema = yup.object({
  title: yup.string().required("Naslov je obavezan."),
  description: yup.string().required("Opis je obavezan."),
  category: yup.string().required("Kategorija je obavezna."),
  subCategory: yup.string().required("Podkagetorija je obavezna."),
  price: yup.string(),
});

export default function AdForm(props) {
  const [visible, setVisible] = useState(false);

  const handleChangeVisible = (isVisible) => {
    setVisible(isVisible);
  };

  const handleChangeRichText = (formikProps, html) => {
    formikProps.setFieldValue("description", html);
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
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      alert("Slika je uspešno učitana");
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: props.categories[0],
          subCategory: { id: null, name: "" },
          price: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={adSchema}
      >
        {(formikProps) => (
          <View style={adCreationStyles.mainContainer}>
            <View style={adCreationStyles.backForwardContainer}></View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Naziv oglasa</Text>
              <TextInput
                style={adCreationStyles.adNameField}
                placeholder="Max. 50 karaktera."
                placeholderTextColor="#ededed"
                value={formikProps.values.title}
                onChangeText={formikProps.handleChange("title")}
              />
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              {/* <AdDescriptionAdding title={"Dodaj opis oglasa"} /> */}
              <Text style={adCreationStyles.fieldName}>Opis oglasa</Text>
              <RichTextEditor
                visible={visible}
                handleChangeVisible={handleChangeVisible}
                handleChangeRichText={handleChangeRichText}
                formikProps={formikProps}
                html={formikProps.values.description}
              />
              <TouchableOpacity
                style={adCreationStyles.adDescriptionField}
                onPress={() => setVisible(true)}
              ></TouchableOpacity>
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>
                Izaberi kategoriju i potkategoriju
              </Text>
              <View style={adCreationStyles.dropDownCatSubContainer}>
                <View style={adCreationStyles.dropDownCatContainer}>
                  <Picker
                    selectedValue={formikProps.values.category.id}
                    style={{
                      fontSize: hp("1.9%"),
                      backgroundColor: "#1e1c24",
                      fontFamily: "Roboto-Bold",
                      color: "white",
                      borderColor: "transparent",
                      paddingTop: hp("8%"),
                    }}
                    onValueChange={(itemValue, itemIndex) => {
                      formikProps.setFieldValue("category", {
                        id: props.categories[itemIndex].id,
                        name: props.categories[itemIndex].name,
                      });
                      props.onChangeCategory(props.categories[itemIndex].id);
                    }}
                    value={formikProps.values.category}
                    itemStyle={{ alignSelf: "center", marginLeft: 100 }}
                  >
                    {props.categories.map((category) => (
                      <Picker.Item
                        key={category.id}
                        label={category.name}
                        value={category.id}
                      />
                    ))}
                  </Picker>
                </View>
                <Divider style={{ height: 1, backgroundColor: "white" }} />
                <View style={adCreationStyles.dropDownSubContainer}>
                  <Picker
                    selectedValue={formikProps.values.subCategory.id}
                    style={{
                      fontSize: hp("1.9%"),
                      backgroundColor: "#1e1c24",
                      fontFamily: "Roboto-Bold",
                      color: "white",
                      borderColor: "transparent",
                      paddingTop: hp("8%"),
                    }}
                    onValueChange={(itemValue, itemIndex) => {
                      formikProps.setFieldValue(
                        "subCategory",
                        props.subCategories[itemIndex]
                      );
                    }}
                    value={formikProps.values.subCategory}
                  >
                    {props.subCategories.map((subCategory) => (
                      <Picker.Item
                        key={subCategory.id}
                        label={subCategory.name}
                        value={subCategory.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Izaberi cenu</Text>
              <View style={adCreationStyles.priceRBContainer}>
                <RadioButton />
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
            <EditProfileButton title={"Postavi"} />
          </View>
        )}
      </Formik>
    </View>
  );
}
