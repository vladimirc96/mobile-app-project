import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const customFonts = {
  'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf')
};

export class LogInButton extends React.Component {
state={
  fontsLoaded: false
}

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
          style = {styles.logInButtonContainer}>
            <Text style = {styles.logInButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    }else{
      return <ActivityIndicator size='large' />;
    }
  }
}

export class AdvButton extends React.Component {
  state={
    fontsLoaded: false
  }
  
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
            style = {styles.AdvButtonContainer}>
              <Text style = {styles.AdvButtonText}>{this.props.title}</Text>
          </TouchableOpacity>
        );
      }else{
        return <ActivityIndicator size='large' />;
      }
    }
  }

export class SignUpButton extends React.Component {
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
          style = {styles.signUpButtonContainer}>
            <Text style = {styles.signUpButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    }else{
      return <ActivityIndicator size='large' />;
    }
  }
}

export class FirstRunButton extends React.Component {
  state = {
    fontsLoaded: false
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render(){
    const cameraIcon = require('./assets/images/camera_icon.png')

    if(this.state.fontsLoaded){
      return (
        <TouchableOpacity
          onPress = {this.state.onPress}
          style = {styles.firstRunButtonContainer}>
          <Image
            style = {styles.inputImage}
            source = {cameraIcon}
          />
            <Text style = {styles.firstRunButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    }else{
      return <ActivityIndicator size='large' />;
    }
  }
}

const styles = StyleSheet.create({
  logInButtonContainer: {
    width: 320,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#1e1c24',
    opacity: 0.99
  },
  logInButtonText: {
    textAlign: "center",
    paddingTop: 20,
    color: '#ededed',
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold'
  },
  signUpButtonContainer: {
    width: 320,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#1e1c24',
    opacity: 0.99
  },
  signUpButtonText: {
    textAlign: "center",
    paddingTop: 10,
    color: '#ededed',
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold'
  },
  firstRunButtonContainer: {
    width: wp("70%"),
    height: hp("37%"),
    borderRadius: 30,
    backgroundColor: '#1e1c24',
    opacity: 0.90
  },
  inputImage: {
    marginTop: 20,
    alignSelf: 'center',
    width: 140,
    height: 140
  },
  firstRunButtonText: {
    textAlign: "center",
    paddingTop: hp("5%"),
    color: '#ededed',
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold'
  },
  AdvButtonContainer: {
    alignSelf: "center",
    width: wp("92%"),
    height: hp("9%"),
    borderRadius: 20,
    backgroundColor: '#1e1c24',
    opacity: 0.99
  },
  AdvButtonText: {
    textAlign: "center",
    marginTop: hp("1.5%"),
    color: '#ededed',
    fontSize: 20,
    fontFamily: 'Comfortaa-Bold'
  }
});