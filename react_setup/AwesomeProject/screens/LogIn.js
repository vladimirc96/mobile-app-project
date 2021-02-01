import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, View, ActivityIndicator } from 'react-native';
import {LogInButton} from '../Buttons';
import * as Font from 'expo-font';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const customFonts = {
  'Comfortaa-Regular': require('../assets/fonts/Comfortaa-Regular.ttf'),
  'Comfortaa-Light': require('../assets/fonts/Comfortaa-Light.ttf')
};

const pressHandler = () => {
  console.log(5);
}

export default class LogIn extends React.Component {
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
    const backgroundImage = require('./../assets/images/logInBackground.jpg')
    if(this.state.fontsLoaded){
      return (
        <ImageBackground
          style = {styles.backgroundImageContainer}
          source = {backgroundImage}>
          <View style = {styles.mainContainer}>
            <View style = {styles.welcomeTextContainer}>
              <Text
                style = {styles.firstText}>Dobrodošli
              </Text>
              <Text
                style = {styles.secondText}>Ulogujte se.
              </Text>
            </View>
            <View style = {styles.inputContainer}>
              <TextInput
                style = {styles.inputField}
                placeholder = "e-mail ili korisničko ime"
                placeholderTextColor="#ededed"
                />
              <TextInput
                style = {styles.inputField}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
                />
            </View>
            <View style = {styles.footerContainer}>
              <View style={styles.footerSmallContainer}>
                <Text style = {styles.footerText}> Nemate profil? </Text>
                <TouchableOpacity> 
                  <Text style={styles.boldText}>Registruj se</Text>
                </TouchableOpacity>
              </View> 
              <LogInButton onPress = {pressHandler} title = {'Ulogujte se'}/>
            </View>
          </View>
        </ImageBackground>
      );
    }else{
      return <ActivityIndicator size='large' />;
    }
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
  welcomeTextContainer: {
    alignSelf: "center",
    width: wp("90%"),
    marginTop: hp("9%"),
    marginBottom: hp("9%")
  },
  firstText: {
    textAlign: "left",
    fontSize: 40,
    fontFamily: 'Comfortaa-Regular'
  },
  secondText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: 'Comfortaa-Regular'
  },
  inputContainer: {
    alignSelf: "center",
    marginBottom: hp("20%")
  },
  inputField: {
    width: wp("90%"),
    height: hp("10%"),
    paddingLeft: wp("5%"),
    marginTop: hp("2%"),
    borderRadius: 20,
    borderWidth: 2,
    opacity: 0.8,
    borderColor: '#ededed',
    backgroundColor: '#1e1c24'
  },
  footerContainer: {
    alignSelf: "center",
    fontFamily: 'Comfortaa-Regular'
  },
  footerSmallContainer:{
    flexDirection: "row",
    marginBottom: hp("3%"),
    justifyContent: 'center'
  },
  footerText: {
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 18
  }
});