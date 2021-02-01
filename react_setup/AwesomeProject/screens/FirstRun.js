import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {FirstRunButton} from '../Buttons';

const pressHandler = () => {
  console.log(5);
}

export default class FirstRun extends React.Component { 
  render(){
    const backgroundImage = require('./../assets/images/logInBackground.jpg')

    return (
      <ImageBackground
        style = {styles.backgroundImageContainer}
        source = {backgroundImage}>
        <View style = {styles.mainContainer}>
          <View style = {styles.userContainer}>
            <FirstRunButton onPress = {pressHandler} title = {'Nudim uslugu'}/>
          </View>
          <View style = {styles.guestContainer}>
            <FirstRunButton onPress = {pressHandler} title = {'Tražim uslugu'}/>
          </View>
        </View>
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
  userContainer: {
    alignSelf: "center",
    marginTop: hp("11%")
  },
  guestContainer: {
    alignSelf: "center",
    marginTop: hp("5%")
  }
});