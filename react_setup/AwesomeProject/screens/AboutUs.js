import { ImageBackground, View, ActivityIndicator } from "react-native";
import { AboutUsContact } from "../components/Buttons";
import * as Font from "expo-font";
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

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
  "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
};

export default class AboutUs extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

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
    if (this.state.fontsLoaded) {
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
                <View style={styles.subtitleNameContainer}>
                  <Text style={styles.subtitleText}> O nama</Text>
                </View>
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
    } else {
      return <ActivityIndicator size="large" />;
    }
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
  subtitleNameContainer: {
    borderBottomWidth: 1
  },
  subtitleText: {
    marginTop: hp("2%"),
    paddingLeft: wp("1.5%"),
    fontSize: hp("2.5%"),
    fontFamily: 'Roboto-Black',
  },
  mainText: {
    marginTop: hp("1.25%"),
    fontSize: hp("2.25%"),
    textAlign: "justify",
    fontFamily: 'Roboto-LightItalic',
    fontWeight: "400",
  },
  contactPartContainer: {
    marginBottom: hp("5%"),
  },
  contactText: {
    marginBottom: hp("1.25%"),
    fontSize: hp("2%"),
    fontFamily: 'Comfortaa-Regular',
    fontWeight: "600",
    textAlign: "center",
  },
});
