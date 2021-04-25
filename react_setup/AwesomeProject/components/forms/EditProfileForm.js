import React, { useState } from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { EditProfileButton } from "../Buttons";
import * as ImagePicker from "expo-image-picker";

import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as yup from "yup";
import { Picker } from "@react-native-picker/picker";
import {
  getEditProfileError,
  getFieldNameError,
} from "../../shared/ValidationUtil";
import { ScrollView } from "react-native-gesture-handler";
import PermissionService from "../../services/PermissionService";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const editProfileSchema = yup.object({
  username: yup.string().required(),
  // password: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().required(),
  location: yup.object(),
  details: yup.string(),
});

export default function EditProfileForm({ updateUser, locations, user }) {
  const [image, setImage] = useState(null);

  const avatar = require("../../assets/images/avatar.png");

  const pickImage = async (formikProps) => {
    const permissionGranted = await PermissionService.requestMediaLibraryPermission();
    if (!permissionGranted) {
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      await formikProps.setFieldValue("image", result.base64);
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <Formik
        initialValues={{
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          email: user.email,
          location: user.location,
          details: user.details ? user.details : "",
          image: user.imageBytes,
        }}
        onSubmit={(values) => {
          delete values.image;
          updateUser({ ...values, image });
        }}
        validationSchema={editProfileSchema}
      >
        {(formikProps) => (
          <View style={styles.mainContainer}>
            {formikProps.values.image ? (
              <Image
                style={
                  windowHeight * 0.15 < windowWidth * 0.28
                    ? styles.inputImageHeight
                    : styles.inputImageWidth
                }
                source={{
                  uri: "data:image/png;base64," + formikProps.values.image,
                }}
              />
            ) : (
              <Image
                style={
                  windowHeight * 0.15 < windowWidth * 0.28
                    ? styles.inputImageHeight
                    : styles.inputImageWidth
                }
                source={avatar}
              />
            )}
            <TouchableOpacity onPress={() => pickImage(formikProps)}>
              <Text style={styles.pickImage}>Izmeni Profilnu Sliku</Text>
            </TouchableOpacity>
            <View style={styles.userDetailsContainer}>
              <View
                style={[
                  styles.inputFieldContainer,
                  getEditProfileError(
                    formikProps.errors.username,
                    formikProps.touched.username
                  ),
                ]}
              >
                <Text
                  style={[
                    styles.fieldName,
                    getFieldNameError(
                      formikProps.errors.username,
                      formikProps.touched.username
                    ),
                  ]}
                >
                  Korisničko ime
                </Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={formikProps.handleChange("username")}
                  value={formikProps.values.username}
                  onBlur={formikProps.handleBlur("username")}
                />
              </View>
              <View
                style={[
                  styles.inputFieldContainer,
                  getEditProfileError(
                    formikProps.errors.firstName,
                    formikProps.touched.firstName
                  ),
                ]}
              >
                <Text
                  style={[
                    styles.fieldName,
                    getFieldNameError(
                      formikProps.errors.firstName,
                      formikProps.touched.firstName
                    ),
                  ]}
                >
                  Ime
                </Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={formikProps.handleChange("firstName")}
                  value={formikProps.values.firstName}
                  onBlur={formikProps.handleBlur("firstName")}
                />
              </View>
              <View
                style={[
                  styles.inputFieldContainer,
                  getEditProfileError(
                    formikProps.errors.lastName,
                    formikProps.touched.lastName
                  ),
                ]}
              >
                <Text
                  style={[
                    styles.fieldName,
                    getFieldNameError(
                      formikProps.errors.lastName,
                      formikProps.touched.lastName
                    ),
                  ]}
                >
                  Prezime
                </Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={formikProps.handleChange("lastName")}
                  value={formikProps.values.lastName}
                  onBlur={formikProps.handleBlur("lastName")}
                />
              </View>
              <View
                style={[
                  styles.inputFieldContainer,
                  getEditProfileError(
                    formikProps.errors.phoneNumber,
                    formikProps.touched.phoneNumber
                  ),
                ]}
              >
                <Text
                  style={[
                    styles.fieldName,
                    getFieldNameError(
                      formikProps.errors.phoneNumber,
                      formikProps.touched.phoneNumber
                    ),
                  ]}
                >
                  Kontakt telefon
                </Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={formikProps.handleChange("phoneNumber")}
                  value={formikProps.values.phoneNumber}
                  onBlur={formikProps.handleBlur("phoneNumber")}
                  keyboardType="numeric"
                />
              </View>
              <View
                style={[
                  styles.inputFieldContainer,
                  getEditProfileError(
                    formikProps.errors.email,
                    formikProps.touched.email
                  ),
                ]}
              >
                <Text
                  style={[
                    styles.fieldName,
                    getFieldNameError(
                      formikProps.errors.email,
                      formikProps.touched.email
                    ),
                  ]}
                >
                  E-mail adresa
                </Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={formikProps.handleChange("email")}
                  value={formikProps.values.email}
                  onBlur={formikProps.handleBlur("email")}
                />
              </View>

              <View style={styles.inputFieldContainer}>
                <Picker
                  selectedValue={formikProps.values.location.id}
                  style={{
                    fontSize: hp("2%"),
                    backgroundColor: "#1e1c24",
                    color: "white",
                    borderColor: "transparent",
                    paddingTop: hp("0.5%"),
                  }}
                  onValueChange={(itemValue, itemIndex) => {
                    formikProps.setFieldValue("location", locations[itemIndex]);
                  }}
                >
                  {locations.map((location) => (
                    <Picker.Item
                      label={location.value}
                      value={location.id}
                      key={location.id}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <TextInput
              placeholder="Detalji"
              multiline={true}
              textAlignVertical="top"
              numberOfLines={5}
              style={styles.detailsInputField}
              onChangeText={formikProps.handleChange("details")}
              value={formikProps.values.details}
              onBlur={formikProps.handleBlur("details")}
            />
            <EditProfileButton
              title={"Sačuvaj"}
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
    minHeight: hp("80%"),
    borderRadius: 10,
    backgroundColor: "#2d2d2d",
  },
  backForwardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: hp("4%"),
    backgroundColor: "#1e1c24",
  },
  inputImageHeight: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: hp("15%"),
    height: hp("15%"),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
  },
  inputImageWidth: {
    alignSelf: "center",
    marginTop: hp("1.5%"),
    width: wp("25%"),
    height: wp("25%"),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
  },
  pickImage: {
    alignSelf: "center",
    marginTop: hp("1%"),
    marginBottom: hp("1.5%"),
    fontSize: hp("2.25%"),
    fontFamily: "Roboto-Bold",
    color: "#87cefa",
  },
  userDetailsContainer: {
    alignSelf: "center",
    paddingBottom: hp("1%"),
    width: wp("85%"),
    borderRadius: 10,
    backgroundColor: "#1e1c24",
  },
  inputFieldContainer: {
    marginLeft: wp("1%"),
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: wp("82%"),
  },
  fieldName: {
    marginLeft: wp("1%"),
    marginTop: hp("1%"),
    fontSize: hp("1.25%"),
    fontFamily: "Roboto-Light",
    color: "#ededed",
  },
  inputField: {
    width: wp("80%"),
    height: hp("4%"),
    paddingLeft: wp("1%"),
    fontSize: hp("2%"),
    fontFamily: "Roboto-Bold",
    opacity: 0.8,
    backgroundColor: "#1e1c24",
    color: "#ffffff",
  },
  detailsInputField: {
    alignSelf: "center",
    width: wp("85%"),
    height: hp("10%"),
    borderRadius: 10,
    marginTop: hp("1%"),
    paddingLeft: wp("1%"),
    fontSize: hp("2%"),
    fontFamily: "Roboto-Light",
    fontStyle: "italic",
    color: "#ededed",
    opacity: 0.8,
    backgroundColor: "#1e1c24",
  },
});
