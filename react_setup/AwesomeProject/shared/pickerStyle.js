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

export const pickerStyle = {
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: hp("40%"),
    width: wp("60%"),
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    marginBottom: hp("1%"),
    fontSize: wp("4.25%"),
  },
  fieldWrapper: {
    alignSelf: "center",
    marginTop: hp("1%"),
    width: wp("82%"),
    height: hp("6%"),
    borderRadius: 8,
    opacity: 0.8,
  },
  field: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("75%"),
  },
  fieldText: {
    textAlign: "center",
    paddingTop: hp("1.25%"),
    fontSize: wp("4%"),
    color: "#ededed",
    fontFamily: "Roboto-Bold",
    fontStyle: "italic",
  },
  closeIcon: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  caretIcon: {
    fontSize: wp("3.75%"),
    color: "#ededed",
    paddingTop: hp("1.75%"),
  },
  fieldName: {
    marginLeft: wp("1%"),
    marginTop: hp("1.25%"),
    fontSize: wp("3.15%"),
    fontFamily: "Roboto-Light",
    color: "#ededed",
  },
};
