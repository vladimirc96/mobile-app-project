import { Platform, StyleSheet } from "react-native";
import { withTheme } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Comfortaa-Bold": require("./../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export const aboutUsStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    alignSelf: "center",
    justifyContent: "space-between",
    width: wp("100%"),
    height: hp("88%"),
  },
  titleContainer: {
    alignContent: "center",
    marginTop: hp("5%"),
  },
  titleText: {
    alignSelf: "center",
    fontSize: wp("8.5%"),
    fontWeight: "600",
  },
  subtitleContainer: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
  },
  subtitleNameContainer: {
    borderBottomWidth: 1,
  },
  subtitleText: {
    marginTop: hp("2%"),
    paddingLeft: wp("1.5%"),
    fontSize: wp("4.25%"),
    fontFamily: "Roboto-Black",
  },
  mainTextFirstPart: {
    marginTop: hp("1.25%"),
    fontSize: wp("4%"),
    textAlign: "justify",
    fontFamily: "Roboto-LightItalic",
    fontWeight: "400",
  },
  SecondPartTextContainer: {
    flexDirection: "row",
    marginTop: hp("1.25%"),
  },
  mainTextSecondPart: {
    fontSize: wp("4%"),
    textAlign: "justify",
    fontFamily: "Roboto-LightItalic",
    fontWeight: "400",
  },
  bulletIcon: {
    fontSize: wp("3.15%"),
    color: "black",
    paddingTop: hp("0.8%"),
  },
  mainTextThirdPart: {
    paddingLeft: wp("0.75%"),
    fontSize: wp("4%"),
    textAlign: "justify",
    fontFamily: "Roboto-LightItalic",
    fontWeight: "400",
  },
  contactPartContainer: {
    marginBottom: hp("5%"),
  },
  contactText: {
    marginBottom: hp("1.25%"),
    fontSize: wp("3.5%"),
    fontWeight: "bold",
    textAlign: "center",
  },
});
