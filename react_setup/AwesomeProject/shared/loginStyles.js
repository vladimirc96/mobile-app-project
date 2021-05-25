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

export const loginStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
  },
  welcomeTextContainer: {
    alignSelf: "center",
    width: wp("90%"),
    marginTop: hp("9%"),
    marginBottom: hp("9%"),
  },
  firstText: {
    textAlign: "left",
    fontSize: wp("9.6%"),
    fontFamily: "Comfortaa-Regular",
  },
  secondText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: wp("9.6%"),
  },
  inputContainer: {
    alignSelf: "center",
    marginBottom: hp("20%"),
  },
  inputField: {
    width: wp("90%"),
    height: hp("10%"),
    paddingLeft: wp("5%"),
    marginTop: hp("1.5%"),
    fontSize: wp("4%"),
    fontFamily: "Comfortaa-Light",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ededed",
    color: "#ffffff",
    backgroundColor: "#1e1c24",
    opacity: 0.8,
  },
  footerContainer: {
    alignSelf: "center",
  },
  footerSmallContainer: {
    flexDirection: "row",
    marginBottom: hp("3%"),
    justifyContent: "center",
  },
  footerText: {
    paddingTop: Platform.OS === "ios" ? hp("0.7%") : hp("0.2%"),
    fontSize: wp("4.25%"),
    fontFamily: "Comfortaa-Regular",
  },
  boldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: wp("5.25%"),
  },
});

