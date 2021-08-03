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

export const categoriesStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
    paddingTop: hp("7%"),
  },
  categoryRowContainer: {
    flexDirection: "row",
    marginBottom: hp("1%"),
  },
  singleCategoryContainer: {
    marginRight: wp("2%"),
    marginLeft: wp("2"),
    width: wp("28%"),
    height: hp("15%"),
  },
  footerContainer: {
    alignSelf: "center",
  },
  footerSmallContainer: {
    flexDirection: "row",
    marginTop: hp("5%"),
    justifyContent: "center",
  },
  footerSmallContainerSecondPart: {
    justifyContent: "center",
  },
  footerTextFirstPart: {
    paddingTop: hp("0.5%"),
    paddingLeft: wp("1%"),
    fontSize: wp("4.25%"),
    fontWeight: "600",
  },
  footerTextSecondPart: {
    alignSelf: "center",
    paddingTop: Platform.OS === "ios" ? hp("0.55%") : hp("0.35%"),
    fontSize: wp("4.25%"),
    fontWeight: "600",
  },
  boldText: {
    textDecorationLine: "underline",
    fontSize: wp("5%"),
    fontWeight: "bold",
  },
});

export const categoryStyles = StyleSheet.create({
  category: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    opacity: 0.9,
  },
  categoryImageHeight: {
    alignSelf: "center",
    marginTop: hp("0.8%"),
    width: hp("10%"),
    height: hp("10%"),
  },
  categoryImageWidth: {
    alignSelf: "center",
    marginTop: wp("1.75%"),
    width: wp("20%"),
    height: wp("20%"),
  },
  categoryNameHeight: {
    textAlign: "center",
    fontSize: wp("2.85%"),
    fontWeight: "bold",
    color: "#1e1c24",
  },
  categoryNameWidth: {
    textAlign: "center",
    paddingTop: wp("0.3%"),
    fontSize: wp("2.85%"),
    fontWeight: "bold",
    color: "#1e1c24",
  },
  categoryNameHeightMultiline: {
    textAlign: "center",
    fontSize: wp("2.85%"),
    lineHeight: wp("2.75%"),
    fontWeight: "bold",
    color: "#1e1c24",
  },
  categoryNameWidthMultiline: {
    textAlign: "center",
    fontSize: wp("2.85%"),
    lineHeight: wp("2.75%"),
    fontWeight: "bold",
    color: "#1e1c24",
  },
});