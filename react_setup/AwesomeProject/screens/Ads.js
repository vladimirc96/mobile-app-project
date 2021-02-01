import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native'
import Ad from './../Ad'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const pressHandler = () => {
  console.log(5);
}

export default class Ads extends React.Component {

    render(){
    const backgroundImage = require('./../assets/images/logInBackground.jpg')
    const cameraIcon = require('./../assets/images/camera_icon.png')

      return (
        <ImageBackground
            style = {styles.backgroundImageContainer}
            source = {backgroundImage}>
            <ScrollView>
            <View style = {styles.mainContainer}>
                <View style = {styles.titleContainer}>
                    <Text style={styles.titleText}> Privatni casovi </Text>
                </View>
                <View style={styles.numberOfAdsContainer}>

                </View>
                <View style={styles.adContainer}>
                    <Ad title='casovi girate duzi naslov'/>
                </View>
                <View style={styles.adContainer}>
                    <Ad title='CASOVI GITARE'/>
                </View>
                <View style={styles.adContainer}>
                    <Ad title='Casovi gitare'/>
                </View>
                <View style={styles.adContainer}>
                    <Ad title='Casovi gitare'/>
                </View>
                <View style={styles.adContainer}>
                    <Ad title='Casovi gitare'/>
                </View>
                <View style={styles.adContainer}>
                    <Ad title='Casovi gitare'/>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
      );
    }
  }


  const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
        resizeMode: "cover"
    },
    mainContainer: {
        flex: 1,
        alignSelf: "center"
    },
    titleContainer: {
        alignContent : 'center',
        marginTop: hp("2.5%"),
        marginBottom: hp("1%"),
        width: wp("100%"),
        height: hp("7%"),
        paddingTop: hp("0.85%"),
        backgroundColor: '#1e1c24',
        borderColor: '#ededed'
    },
    numberOfAdsContainer: {
        height: 20,
    },
    titleText: {
        color:'#ededed',
        textAlign: "center",
        fontSize: 25
    },
    adContainer: {
        alignSelf: 'center',
        marginTop: hp("1%"),
        height: hp("16%"),
        width: wp("90%") 
    }
    });
    