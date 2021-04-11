import React from "react";
import { ImageBackground, Text, View, ScrollView, ActivityIndicator} from "react-native";
import Ad from "../components/Ad";
import AdModal from './AdModal';
import { adsStyles } from "../shared/Styles";
import * as Font from "expo-font";
import { getAllBySubcategoryId } from "../services/AdService";

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
	  showModal: false,
    ads: [],
    chosenAd: null
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.getAllBySubCategoryId();
  }

  async getAllBySubCategoryId() {
    try {
      const data = await getAllBySubcategoryId(
        this.props.navigation.state.params.subCategoryId
      );
      this.setState({ ads: data });
    } catch (err) {
      console.log(err.message);
    }
  }

  toggleModal = (ad) => {
    this.setState(prevState => ({showModal:!prevState.showModal, chosenAd: ad}))
  }

  render() {
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    const adsList = this.state.ads.map((ad) => (
      <View style={adsStyles.adContainer}
        key={ad.id}
      >
      <Ad
        navigation={this.props.navigation}
        ad={ad}
        onPress={() => this.toggleModal(ad)}
      />
    </View>
    ));
    if(this.state.fontsLoaded){
    return (
      <ImageBackground
        style={adsStyles.backgroundImageContainer}
        source={backgroundImage}
      >
      {this.state.showModal ?
        <AdModal toggleModal={this.toggleModal} navigation={this.props.navigation} ad={this.state.chosenAd} />
        :
        <ScrollView>
          <View style={adsStyles.mainContainer}>
            <View style={adsStyles.titleContainer}>
              <Text style={adsStyles.titleText}> {this.props.navigation.state.params.subCategoryName} </Text>
            </View>
                <View>
                  <View style={adsStyles.numberOfAdsContainer}></View>
                  {adsList}
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
	
