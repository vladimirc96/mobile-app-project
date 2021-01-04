import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, View, ActivityIndicator } from 'react-native';
import {LogInButton} from '../Buttons';
import * as Font from 'expo-font';

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
    const B = (props) => <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>{props.children}</Text>
    if(this.state.fontsLoaded){
      return (
        <ImageBackground
          style = {styles.backgroundImageContainer}
          source = {backgroundImage}>
          <View style = {styles.mainContainer}>
            <View style = {styles.headerContainer}>
              <Text
                style = {styles.header1Text}>Dobrodošli</Text>
              <Text
                style = {styles.header2Text}>Ulogujte se.</Text>
            </View>
            <View style = {styles.inputContainer}>
              <TextInput
                style = {styles.logInInput}
                placeholder = "e-mail ili korisničko ime"
                placeholderTextColor="#ededed"
                />
              <TextInput
                style = {styles.logInInput}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
                />
            </View>
            <View style = {styles.footerContainer}>
              <Text style = {styles.footerText}>Nemate profil? <TouchableOpacity> <B>Registruj se</B> </TouchableOpacity></Text>
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
  headerContainer: {
    width: 320,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 60
  },
  header1Text: {
    textAlign: "left",
    fontSize: 40,
    fontFamily: 'Comfortaa-Regular'
  },
  header2Text: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: 'Comfortaa-Regular'
  },
  inputContainer: {
    alignSelf: "center",
    marginBottom: 160
  },
  logInInput: {
    borderWidth: 2,
    width: 320,
    height: 60,
    borderColor: '#ededed',
    backgroundColor: '#1e1c24',
    opacity: 0.8,
    paddingLeft: 15,
    borderRadius: 20,
    marginTop: 15
  },
  footerContainer: {
    alignSelf: "center",
    fontFamily: 'Comfortaa-Regular'
  },
  footerText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20
  }
});