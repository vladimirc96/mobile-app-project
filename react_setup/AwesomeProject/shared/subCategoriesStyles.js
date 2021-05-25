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

export const subCategoriesStyles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    alignSelf: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp("3%"),
    marginBottom: hp("3%"),
    minWidth: wp("40%"),
    height: hp("10%"),
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: "#1e1c24",
    borderColor: "#ededed",
  },
  title: {
    marginTop: Platform.OS === "ios" ? hp("3.25%") : hp("2.45%"),
    fontSize: wp("4.4%"),
    marginLeft: wp("0.75%"),
    marginRight: wp("1.5%"),
    color: "#ededed",
    fontFamily: "Comfortaa-Bold",
  },
  titleIconHeight: {
    width: hp("7.5%"),
    height: hp("7.5%"),
    top: hp("0.5%"),
    left: wp("2.5%"),
  },
  titleIconWidth: {
    width: wp("12%"),
    height: wp("12%"),
    top: wp("2.5%"),
    left: wp("2.5%"),
  },
  subcategoryContainer: {
    alignSelf: "center",
    marginTop: hp("1%"),
    width: wp("85%"),
    height: hp("7.5%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export const subCategoryStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#1e1c24",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  mainContainerText: {
    textAlign: "left",
    textAlignVertical: "center",
    paddingTop: Platform.OS === "ios" ? hp("1.6%") : hp("1.6%"),
    paddingLeft: wp("4%"),
    color: "#ededed",
    fontSize: wp("4.25%"),
    fontFamily: "Comfortaa-Bold",
  },
});
