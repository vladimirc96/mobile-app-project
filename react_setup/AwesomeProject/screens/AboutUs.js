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
import { aboutUsStyles } from "./../shared/Styles";
 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SCREENS = {
  HOME: 1,
  LOGIN: 2,
  CONTACTUS: 3
};

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Bold": require("./../assets/fonts/Comfortaa-Bold.ttf"),
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
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={aboutUsStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <View style={aboutUsStyles.mainContainer}>
            <View>
              <View style={aboutUsStyles.titleContainer}>
                <Text style={aboutUsStyles.titleText}> #APPNAME</Text>
              </View>
              <View style={aboutUsStyles.subtitleContainer}>
                <View style={aboutUsStyles.subtitleNameContainer}>
                  <Text style={aboutUsStyles.subtitleText}> O nama</Text>
                </View>
                  <Text style={aboutUsStyles.mainText}>
                    {" "}
                    Ovo je prica o nama, ovo je prica o njoj..... Ovo je prica o
                    nama, ovo je prica o njoj..... Ovo je prica o nama, ovo je prica
                    o njoj..... Ovo je prica o nama, ovo je prica o njoj.....Ovo je
                    prica o nama, ovo je prica o njoj..... Ovo je prica o nama, ovo
                    je prica o njoj.....
                  </Text>
              </View>
            </View>
            <View style={aboutUsStyles.contactPartContainer}>
              <Text style={aboutUsStyles.contactText}>
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
