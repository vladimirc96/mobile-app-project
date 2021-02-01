import React, { useEffect, useState }  from 'react';
import { Button, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import {SignUpButton} from '../Buttons';
import * as ImagePicker from "expo-image-picker";
import Constants from 'expo-constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
            style = {styles.backgroundImageContainer}
            source = {backgroundImage}>
        <View style = {styles.mainContainer}>
        <View style = {styles.imageContainer}>
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
                style = {styles.inputField}
                placeholder = "e-mail ili korisnicko ime"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {styles.inputField}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {styles.inputField}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
            <TextInput
                style = {styles.inputField}
                placeholder = "lozinka"
                placeholderTextColor="#ededed"
            />
        </View>
        <View style = {styles.buttonContainer}>
            <SignUpButton onPress = {pressHandler} title = {'Registrujte se'}/>
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
imageContainer: {
alignSelf: "center",
justifyContent: 'center',
marginTop: hp("7.3%"),
marginBottom: hp("2.2%"),
borderWidth: 2,
width: wp("44%"),
height: hp("24%"),
paddingLeft: wp("6.7%"),
borderRadius: 80,
opacity: 0.8,
borderColor: '#ededed',
backgroundColor: '#1e1c24'
},
inputImage: {
width: wp("30%"),
height: hp("17%")
},
inputContainer: {
alignSelf: "center",
marginBottom: hp("6%")
},
inputField: {
borderWidth: 2,
width: wp("90%"),
height: hp("10%"),
paddingLeft: wp("5%"),
borderRadius: 20,
marginTop: hp("2%"),
opacity: 0.8,
borderColor: '#ededed',
backgroundColor: '#1e1c24',
},
buttonContainer: {
alignSelf: "center"
}
});