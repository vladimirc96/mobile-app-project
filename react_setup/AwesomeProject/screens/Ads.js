import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native'
import Ad from './../Ad'

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
                    <Ad title='CASOVI GITARE DUZI NASLOV'/>
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
    marginTop: 20,
    marginBottom: 15,
    alignContent : 'center',
    width: 1500,
    height: 50,
    borderColor: '#ededed',
    paddingTop: 6
    },
    titleIcon: {
    width: 40,
    height: 40,
    bottom: 10,
    left: 8
    },
    subcategoryContainer: {
    alignSelf: "center",
    marginTop: 10,
    width: 300,
    height: 60
    },
    titleText: {
        marginLeft:10,
        color:'#ededed',
        textAlign: "center",
        fontSize: 25
    },
    adContainer: {
        alignSelf: 'center',
        marginTop: 10,
        height: 110,
        width: 330 
    }
    });
    