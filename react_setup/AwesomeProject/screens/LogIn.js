import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import {LogInButton} from '../Buttons';

const pressHandler = () => {
  console.log(5);
}

export default function LogIn() {
  const backgroundImage = require('./../assets/images/logInBackground.jpg')
  const B = (props) => <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>{props.children}</Text>

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
    fontSize: 40
  },
  header2Text: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 40
  },
  inputContainer: {
    alignSelf: "center",
    marginBottom: 180
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
  },
  footerText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20
  }
});