import React, { useEffect, useState }  from 'react';
import { Button, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import {SignUpButton} from '../Buttons';
import * as ImagePicker from "expo-image-picker";
import Constants from 'expo-constants'

const pressHandler = () => {
console.log(5);
}

export default function SignUp() {
const backgroundImage = require('./../assets/images/signUpBackground.jpg')
const cameraIcon = require('./../assets/images/camera_icon.svg')
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
            style = {styles.backgroundImageContainer}
            source = {backgroundImage}>
        <View style = {styles.mainContainer}>
        <View style = {styles.headerContainer}>
            <TouchableOpacity onPress = {pickImage}>
              <Image
                  style = {styles.inputImage}
                  source = {cameraIcon}
              />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </TouchableOpacity>
        </View>
        <View style = {styles.inputContainer}>
            <TextInput
                style = {styles.logInInput}
                placeholder = "e-mail ili korisnicko ime"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {styles.logInInput}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {styles.logInInput}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {styles.logInInput}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
        </View>
        <View style = {styles.footerContainer}>
            <SignUpButton onPress = {pressHandler} title = {'Ulogujte se'}/>
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
alignSelf: "center",
justifyContent: 'center',
marginTop: 50,
marginBottom: 15,
borderWidth: 2,
width: 150,
height: 150,
borderColor: '#ededed',
backgroundColor: '#1e1c24',
opacity: 0.8,
paddingLeft: 15,
borderRadius: 80,
},
inputImage: {
width: 116,
height: 116
},
inputContainer: {
alignSelf: "center",
marginBottom: 70
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
alignSelf: "center"
},
footerText: {
fontSize: 18,
textAlign: "center",
marginBottom: 20
}

});