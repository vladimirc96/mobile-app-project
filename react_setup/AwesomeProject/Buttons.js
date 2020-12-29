import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export function LogInButton ({propStyle, onPress, title}) {
  return (
    <TouchableOpacity
      onPress = {onPress}
      style = {styles.logInButtonContainer}>
        <Text style = {styles.logInButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function SignUpButton ({onPress, title}) {
  return (
    <TouchableOpacity
      onPress = {onPress}
      style = {styles.signUpButtonContainer}>
        <Text style = {styles.signUpButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function FirstRunButton ({onPress, title}) {
  const cameraIcon = require('./assets/images/camera_icon.svg')

  return (
    <TouchableOpacity
      onPress = {onPress}
      style = {styles.firstRunButtonContainer}>
      <Image
        style = {styles.inputImage}
        source = {cameraIcon}
      />
        <Text style = {styles.firstRunButtonText}>{title}</Text>
    </TouchableOpacity>
  );
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
    paddingTop: 15,
    color: '#ededed',
    fontSize: 20
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
    paddingTop: 15,
    color: '#ededed',
    fontSize: 20
  },
  firstRunButtonContainer: {
    width: 250,
    height: 250,
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
    paddingTop: 15,
    color: '#ededed',
    fontSize: 20
  },
});