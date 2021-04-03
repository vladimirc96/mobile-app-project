import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EditProfileButton } from "../Buttons";
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
  return (
    <View>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: "",
          subCategory: "",
          price: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={adSchema}
      >
        {(props) => (
          <View style={adCreationStyles.mainContainer}>
            <View style={adCreationStyles.backForwardContainer}></View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Naziv oglasa</Text>
              <TextInput
                style={adCreationStyles.adNameField}
                placeholder="Max. 50 karaktera."
                placeholderTextColor="#ededed"
                value={props.values.title}
              />
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Opis oglasa</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={adCreationStyles.adDescriptionField}
                placeholder="Max. 500 karaktera."
                placeholderTextColor="#ededed"
                value={props.values.description}
              />
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>
                Izaberi kategoriju i potkategoriju
              </Text>
              <View style={adCreationStyles.dropDownCatSubContainer}>
                <View style={adCreationStyles.dropDownCatContainer}>
                  <Picker
                    selectedValue={""}
                    style={{
                      fontSize: hp("1.9%"),
                      backgroundColor: "#1e1c24",
                      fontFamily: "Roboto-Bold",
                      color: "white",
                      borderColor: "transparent",
                      paddingTop: hp("0.5%"),
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      console.log(itemValue, itemIndex)
                    }
                    value={props.values.category}
                  >
                    {props.categories
                      ? props.categories.map((category) => (
                          <Picker.Item
                            label={category.name}
                            value={category.id}
                          />
                        ))
                      : null}
                  </Picker>
                </View>
                <View style={adCreationStyles.dropDownSubContainer}>
                  <Picker
                    selectedValue={""}
                    style={{
                      fontSize: hp("1.9%"),
                      backgroundColor: "#1e1c24",
                      fontFamily: "Roboto-Bold",
                      color: "white",
                      borderColor: "transparent",
                      paddingTop: hp("0.75%"),
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      console.log(itemValue, itemIndex)
                    }
                    value={props.values.subCategory}
                  >
                    {props.subCategories
                      ? props.subCategories.map((subCategory) => (
                          <Picker.Item
                            label={subCategory.name}
                            value={subCategory.id}
                          />
                        ))
                      : null}
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
              <TouchableOpacity>
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
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <View style={adCreationStyles.inputFieldAdditionalContainer}>
                <Text style={adCreationStyles.fieldName}>
                  Izaberi tip oglasa
                </Text>
                <FontAwesome
                  name="question-circle-o"
                  style={adCreationStyles.questionMarkIcon}
                />
              </View>
              <View style={adCreationStyles.dropDownTypeContainer}>
                <View style={adCreationStyles.dropDownSubContainer}>
                  <Picker
                    selectedValue={""}
                    style={{
                      fontSize: hp("1.9%"),
                      backgroundColor: "#1e1c24",
                      fontFamily: "Roboto-Bold",
                      color: "white",
                      borderColor: "transparent",
                      paddingTop: hp("0.75%"),
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      console.log(itemValue, itemIndex)
                    }
                  >
                    <Picker.Item label="Basic" value="adType_id_1" />
                    <Picker.Item label="VIP" value="adType_id_2" />
                    <Picker.Item label="Gold" value="adType_id_3" />
                  </Picker>
                </View>
              </View>
              <TextInput
                style={adCreationStyles.typeCodeInput}
                placeholder="Unesite kod ovde"
                placeholderTextColor="#ededed"
              />
            </View>
            <EditProfileButton title={"Postavi"} />
          </View>
        )}
      </Formik>
    </View>
  );
}
