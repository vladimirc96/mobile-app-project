import { ImageBackground, View, ActivityIndicator } from "react-native";
import { AboutUsContact } from "../components/Buttons";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
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
                <Text style={aboutUsStyles.titleText}>Pronađi sam.</Text>
              </View>
              <View style={aboutUsStyles.subtitleContainer}>
                <View style={aboutUsStyles.subtitleNameContainer}>
                  <Text style={aboutUsStyles.subtitleText}>Čemu služi ova aplikacija?</Text>
                </View>
                <Text style={aboutUsStyles.mainTextFirstPart}>
                  {" "}
                  Pronađi sam je aplikacija koju je razvio tim mladih ljudi, entuzijasta, sa ciljem
                  da uz pomoć te aplikacije, oni koji traže određenu uslugu lako i brzo nađu one koji tu uslugu pružaju.
                </Text>
                  <View style={aboutUsStyles.SecondPartTextContainer}>
                    <Text style={aboutUsStyles.mainTextSecondPart}>
                      Sebi smo postavili tri izazova:
                    </Text>
                  </View>
                  <View style={aboutUsStyles.SecondPartTextContainer}>
                    <FontAwesome name="chevron-circle-right" style={aboutUsStyles.bulletIcon}/>
                    <Text style={aboutUsStyles.mainTextThirdPart}>
                      da vredni ljudi, koji nude svoje znanje i veštine, budu lako dostupni onima koji to traže
                    </Text>
                  </View>
                  <View style={aboutUsStyles.SecondPartTextContainer}>
                    <FontAwesome name="chevron-circle-right" style={aboutUsStyles.bulletIcon}/>
                    <Text style={aboutUsStyles.mainTextThirdPart}>
                      da što više korisnih usluga imate na jednom mestu i to na Vašem mobilnom uređaju 
                    </Text>
                  </View>
                  <View style={aboutUsStyles.SecondPartTextContainer}>
                    <FontAwesome name="chevron-circle-right" style={aboutUsStyles.bulletIcon} />
                    <Text style={aboutUsStyles.mainTextThirdPart}>
                      da iskoristimo tehnologiju na pravi način, jer je brža od tradicionalnog oglašavanja
                      (novinski oglasi, lepljenje letaka po autobuskim stanicama...)
                    </Text>
                  </View>
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
