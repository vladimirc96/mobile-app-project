import { ImageBackground, View } from "react-native";

import { AboutUsContact } from "../components/Buttons";
import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { screensEnabled } from "react-native-screens";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SCREENS = {
  HOME: 1,
  LOGIN: 2,
  CONTACTUS: 3
};

export default class AboutUs extends React.Component {
  pressHandler = (screenType) => {
    switch (screenType) {
      case SCREENS.HOME:
        this.props.navigation.navigate("Home");
        break;
      case SCREENS.LOGIN:
        this.props.navigation.navigate("LogIn");
        break;
      case SCREENS.CONTACTUS:
        this.props.navigation.navigate("ContactUs");
        break;
    }
  };

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");

    return (
      <ImageBackground
        style={styles.backgroundImageContainer}
        source={backgroundImage}
      >
        <View style={styles.mainContainer}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}> #APPNAME</Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitleText}> O nama</Text>
              <Text style={styles.mainText}>
                {" "}
                Ovo je prica o nama, ovo je prica o njoj..... Ovo je prica o
                nama, ovo je prica o njoj..... Ovo je prica o nama, ovo je prica
                o njoj..... Ovo je prica o nama, ovo je prica o njoj.....Ovo je
                prica o nama, ovo je prica o njoj..... Ovo je prica o nama, ovo
                je prica o njoj.....
              </Text>
            </View>
          </View>
          <View style={styles.contactPartContainer}>
            <Text style={styles.contactText}>
              {" "}
              Imate li pitanja ili sugestiju?
            </Text>
            <AboutUsContact
              onPress={() => this.pressHandler(SCREENS.CONTACTUS)}
              title={"Kontaktirajte nas"}
            />
          </View>
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
    justifyContent: "space-between",
    width: wp("100%"),
    height: hp("88%"),
    backgroundColor: "#ededed",
  },
  titleContainer: {
    alignContent: "center",
    marginTop: hp("5%"),
  },
  titleText: {
    alignSelf: "center",
    fontSize: hp("5%"),
    fontWeight: "600",
  },
  subtitleContainer: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
  },
  subtitleText: {
    marginTop: hp("2%"),
    paddingLeft: wp("1.5%"),
    fontSize: hp("2.5%"),
    fontWeight: "bold",
  },
  mainText: {
    marginTop: hp("1.25%"),
    fontSize: hp("2.25%"),
    textAlign: "justify",
  },
  contactPartContainer: {
    marginBottom: hp("5%"),
  },
  contactText: {
    marginBottom: hp("1.25%"),
    fontSize: hp("2%"),
    fontWeight: "600",
    textAlign: "center",
  },
});
