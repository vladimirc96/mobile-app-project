import React from "react";
import { ImageBackground, Text, View, ScrollView, ActivityIndicator } from "react-native";
import Ad from "../components/Ad";
import { adsStyles } from "../shared/Styles";
import * as Font from "expo-font";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Bold.ttf"),
};

export default class Ads extends React.Component {
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

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={adsStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <ScrollView>
            <View style={adsStyles.mainContainer}>
              <View style={adsStyles.titleContainer}>
                <Text style={adsStyles.titleText}> Privatni casovi </Text>
              </View>
              <View style={adsStyles.numberOfAdsContainer}></View>
              <View style={adsStyles.adContainer}>
                <Ad
                  navigation={this.props.navigation}
                  title="CASOVI GITARE DUZI NASLOV"
                />
              </View>
              <View style={adsStyles.adContainer}>
                <Ad title="CASOVI GITARE" />
              </View>
              <View style={adsStyles.adContainer}>
                <Ad title="Casovi gitare" />
              </View>
              <View style={adsStyles.adContainer}>
                <Ad title="Casovi gitare" />
              </View>
              <View style={adsStyles.adContainer}>
                <Ad title="Casovi gitare" />
              </View>
              <View style={adsStyles.adContainer}>
                <Ad title="Casovi gitare" />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
