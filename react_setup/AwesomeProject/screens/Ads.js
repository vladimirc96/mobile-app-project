import React from "react";
import { ImageBackground, Text, View, ScrollView, ActivityIndicator} from "react-native";
import Ad from "../components/Ad";
import AdModal from './AdModal';
import { adsStyles } from "../shared/Styles";
import * as Font from "expo-font";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export default class Ads extends React.Component {
  state = {
    fontsLoaded: false,
	  showModal: false
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  toggleModal = () => {
    this.setState(prevState => ({showModal:!prevState.showModal}))
  }

  render() {
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    if(this.state.fontsLoaded){
    return (
      <ImageBackground
        style={adsStyles.backgroundImageContainer}
        source={backgroundImage}
      >
      {this.state.showModal ?
        <AdModal toggleModal={this.toggleModal} />
        :
        <ScrollView>
          <View style={adsStyles.mainContainer}>
            <View style={adsStyles.titleContainer}>
              <Text style={adsStyles.titleText}> Privatni casovi </Text>
            </View>
                <View>
                  <View style={adsStyles.numberOfAdsContainer}></View>
                <View style={adsStyles.adContainer}>
                  <Ad
                    navigation={this.props.navigation}
                    title="CASOVI GITARE DUZI NASLOV"
                    onPress={() => this.toggleModal()}
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
          </View>
        </ScrollView>
      }
      </ImageBackground>
    );
  }
  else{
    return <ActivityIndicator size="large" />;
  }
}}
	
