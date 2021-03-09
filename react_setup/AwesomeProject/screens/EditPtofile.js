import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  Octicons,
  Fontisto,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { adStyles } from "../shared/Styles";
import { EditProfileButton } from "./../components/Buttons";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class EditProfile extends React.Component {
  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
    const cameraIcon = require("./../assets/images/camera_icon.png");
    const hamburger = require("./../assets/images/hamburger.png");
    const avatar = require("./../assets/images/avatar.png");

    return (
      <ImageBackground
        style={styles.backgroundImageContainer}
        source={backgroundImage}
      >
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
                placeholder="dovla_car"
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={styles.inputFieldContainer}>
              <Text style={styles.fieldName}>Ime i prezime</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Vladimir Cvetanovic"
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={styles.inputFieldContainer}>
              <Text style={styles.fieldName}>Kontakt telefon</Text>
              <TextInput
                style={styles.inputField}
                placeholder="062266021"
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={styles.inputFieldContainer}>
              <Text style={styles.fieldName}>E-mail adresa</Text>
              <TextInput
                style={styles.inputField}
                placeholder="dovla.car96@hotmail.com"
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={styles.inputFieldContainer}>
              <Text style={styles.fieldName}>Lokacija</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Novi Sad"
                placeholderTextColor="#ededed"
              />
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
            numberOfLines={4}
            style={styles.detailsInputField}
            placeholder="Napiši nešto o sebi..."
            placeholderTextColor="#ededed"
          />
          <EditProfileButton title={"Sačuvaj"} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
    minHeight: hp("80%"),
    borderRadius: 10,
    backgroundColor: "#2d2d2d",
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
