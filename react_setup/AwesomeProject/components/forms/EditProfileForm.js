import React, { useState } from "react";
import { Formik } from "formik";
import { StyleSheet, Image, Text, TextInput, View } from "react-native";
import { EditProfileButton } from "../Buttons";

import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as yup from "yup";
import { Picker } from "@react-native-picker/picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const editProfileSchema = yup.object({
  username: yup.string(),
  password: yup.string(),
});

export default function EditProfileForm({ updateUser, locations, user }) {
  const avatar = require("../../assets/images/avatar.png");

  return (
    <View>
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
        }}
        onSubmit={(values) => {
          updateUser(values);
        }}
        validationSchema={editProfileSchema}
      >
        {(props) => (
          <View style={styles.mainContainer}>
            <Image
              style={
                windowHeight * 0.15 < windowWidth * 0.28
                  ? styles.inputImageHeight
                  : styles.inputImageWidth
              }
              source={avatar}
            />
            <Text style={styles.pickImage}>Izmeni Profilnu Sliku</Text>
            <View style={styles.userDetailsContainer}>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Korisničko ime</Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={props.handleChange("username")}
                  value={props.values.username}
                />
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Ime i prezime</Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={props.handleChange("firstName")}
                  value={props.values.firstName}
                />
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Kontakt telefon</Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={props.handleChange("phoneNumber")}
                  value={props.values.phoneNumber}
                />
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>E-mail adresa</Text>
                <TextInput
                  style={styles.inputField}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
              </View>

              <View style={styles.inputFieldContainer}>
                <Picker
                  selectedValue={props.values.location.id}
                  style={{
                    fontSize: hp("2%"),
                    backgroundColor: "#1e1c24",
                    color: "white",
                    borderColor: "transparent",
                    paddingTop: hp("0.5%"),
                  }}
                  onValueChange={(itemValue, itemIndex) => {
                    props.setFieldValue("location", locations[itemIndex]);
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
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Pol</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Ženski"
                  placeholderTextColor="#ededed"
                />
              </View>
            </View>
            <TextInput
              multiline={true}
              numberOfLines={5}
              style={styles.detailsInputField}
              onChangeText={props.handleChange("details")}
              value={props.values.details}
            />
            <EditProfileButton title={"Sačuvaj"} onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
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
    backgroundColor: "#181824",
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
    color: "#ededed",
  },
  inputField: {
    width: wp("80%"),
    height: hp("4%"),
    paddingLeft: wp("1%"),
    fontSize: hp("2%"),
    fontWeight: "bold",
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
    fontStyle: "italic",
    opacity: 0.8,
    backgroundColor: "#1e1c24",
  },
});
