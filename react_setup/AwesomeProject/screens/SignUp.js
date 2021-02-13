import React, { useEffect, useState }  from 'react';
import { Button, ImageBackground, TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import {SignUpButton} from '../components/Buttons';
import * as ImagePicker from "expo-image-picker";
import Constants from 'expo-constants'
import {signupStyles} from '../shared/Styles';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pressHandler = () => {
console.log(5);
}

export default function SignUp() {
const backgroundImage = require('./../assets/images/signUpBackground.jpg')
const cameraIcon = require('./../assets/images/camera_icon.png')
const B = (props) => <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>{props.children}</Text>

const [image, setImage] = useState(null);
useEffect(() => {
    (async () => {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
      })();
}, []);

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

    return (
    <ImageBackground
            style = {signupStyles.backgroundImageContainer}
            source = {backgroundImage}>
        <View style = {signupStyles.mainContainer}>
        <View style = {(windowHeight * 0.37) < (windowWidth * 0.7) ? signupStyles.imageContainerHeight : signupStyles.imageContainerWidth}>
            <TouchableOpacity onPress = {pickImage}>
              <Image
                  style = {(windowHeight * 0.37) < (windowWidth * 0.7) ? signupStyles.inputImageHeight : signupStyles.inputImageWidth}
                  source = {cameraIcon}
              />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </TouchableOpacity>
        </View>
        <View style = {signupStyles.inputContainer}>
            <TextInput
                style = {signupStyles.inputField}
                placeholder = "e-mail ili korisnicko ime"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {signupStyles.inputField}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {signupStyles.inputField}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {signupStyles.inputField}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
        </View>
        <View style = {signupStyles.buttonContainer}>
            <SignUpButton onPress = {pressHandler} title = {'Registrujte se'}/>
        </View>
        </View>
    </ImageBackground>
    );
}