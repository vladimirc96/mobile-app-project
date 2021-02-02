import {ImageBackground, View} from 'react-native';

import {FirstRunButton} from '../Buttons';
import React from 'react';
import {firstRunStyles} from '../shared/Styles';

export default class FirstRun extends React.Component { 

  pressHandler = () => {
    this.props.navigation.navigate('');
  }

  render(){
    const backgroundImage = require('./../assets/images/logInBackground.jpg')

    return (
      <ImageBackground
        style = {firstRunStyles.backgroundImageContainer}
        source = {backgroundImage}>
        <View style = {firstRunStyles.mainContainer}>
          <View style = {firstRunStyles.userContainer}>
            <FirstRunButton onPress = {pressHandler} title = {'Nudim uslugu'}/>
          </View>
          <View style = {firstRunStyles.guestContainer}>
            <FirstRunButton onPress = {pressHandler} title = {'Tražim uslugu'}/>
          </View>
        </View>
      </ImageBackground>
    );
  }
}