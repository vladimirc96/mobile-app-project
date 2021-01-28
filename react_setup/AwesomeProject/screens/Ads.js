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
                <View style={{height: 20}}>

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
        headerContainer: {
        alignSelf: "center"
    },
    titleContainer: {
        backgroundColor: '#1e1c24',
        marginTop: hp("2%"),
        marginBottom: hp("0.75"),
        alignContent : 'center',
        width: wp("100%"),
        height: hp("6%"),
        borderColor: '#ededed',
        paddingTop: hp("1%")
    },
    titleText: {
        color:'#ededed',
        textAlign: "center",
        fontSize: 25
    },
    adContainer: {
        alignSelf: 'center',
        marginTop: hp("0.75%"),
        height: hp("11.75%"),
        width: wp("17.2%") 
    }
    });
    