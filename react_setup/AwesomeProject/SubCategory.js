import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View, Image, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const customFonts = {
  'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf')
};

const pressHandler = () => {
  console.log(5);
}

export default class SubCategory extends React.Component {
  state = {
    fontsLoaded: false
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  
  render(){
    if(this.state.fontsLoaded){
      return (
        <TouchableOpacity
          onPress = {this.props.onPress}
          style = {styles.mainContainer}>
            <Text style = {styles.mainContainerText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    }else{
      return <ActivityIndicator size='large' />;
    }
  }
}

const styles = StyleSheet.create({
  mainContainer: {
  backgroundColor: '#1e1c24',
  width: '100%',
  height: '100%',
  borderRadius: 25,
  },
  mainContainerText: {
  textAlign: "left",
  textAlignVertical: "center",
  paddingTop: 12,
  paddingLeft: 10,
  color: '#ededed',
  fontSize: 18,
  fontFamily: 'Comfortaa-Bold'
  },
  });