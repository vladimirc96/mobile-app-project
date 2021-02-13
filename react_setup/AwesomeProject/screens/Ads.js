import React from "react";
import { ImageBackground, Text, View, ScrollView } from "react-native";
import Ad from "../components/Ad";
import { adsStyles } from "../shared/Styles";

export default class Ads extends React.Component {

    render() {
    const backgroundImage = require('./../assets/images/logInBackground.jpg')
      return (
        <ImageBackground
            style = {adsStyles.backgroundImageContainer}
            source = {backgroundImage}>
            <ScrollView>
            <View style = {adsStyles.mainContainer}>
                <View style = {adsStyles.titleContainer}>
                    <Text style={adsStyles.titleText}> Privatni casovi </Text>
                </View>
                <View style={adsStyles.numberOfAdsContainer}>

                </View>
                <View style={adsStyles.adContainer}>
                    <Ad title='CASOVI GITARE DUZI NASLOV'/>
                </View>
                <View style={adsStyles.adContainer}>
                    <Ad title='CASOVI GITARE'/>
                </View>
                <View style={adsStyles.adContainer}>
                    <Ad title='Casovi gitare'/>
                </View>
                <View style={adsStyles.adContainer}>
                    <Ad title='Casovi gitare'/>
                </View>
                <View style={adsStyles.adContainer}>
                    <Ad title='Casovi gitare'/>
                </View>
                <View style={adsStyles.adContainer}>
                    <Ad title='Casovi gitare'/>
                </View>
            </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
