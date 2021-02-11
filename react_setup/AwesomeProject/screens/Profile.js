import React from 'react';
import { ImageBackground, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { AdvButton } from '../Buttons'
import { Octicons, Fontisto, SimpleLineIcons, Feather } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { adStyles } from './../shared/Styles'; 

export default class Categories extends React.Component {
  
    render(){
      const backgroundImage = require('./../assets/images/logInBackground.jpg')
      const cameraIcon = require('./../assets/images/camera_icon.png')
      const hamburger = require('./../assets/images/hamburger.png')
      const avatar = require('./../assets/images/avatar.png')
  
      return (
        <ImageBackground
            style = {styles.backgroundImageContainer}
            source = {backgroundImage}>
            
            <View style={styles.mainContainer}>
                <View style={styles.basicUserInfo}>
                    <Image
                    style = {styles.inputImage}
                    source = {avatar}
                    />
                    <Text style = {styles.profileName}>Vladimir Cvetanovic</Text>
                    <View style = {styles.userLocation}>
                        <SimpleLineIcons name="location-pin" size={22} color="white" />
                        <Text style={styles.location}>Novi Sad, Srbija</Text>
                    </View>
                    <View style = {styles.userMail}>
                        <Fontisto name="email" size={20} color="white" />
                        <Text style={styles.location}>dovla.car@gmail.com</Text>
                    </View>
                    <View style = {styles.userOntact}>
                        <Feather name="phone" size={20} color="white" />
                        <Text style={styles.location}>+381 62 266 021</Text>
                    </View>
                    <View style = {styles.userRating}>
                        <TouchableOpacity style={styles.likeComponent}>
                            <SimpleLineIcons name="like" style={styles.like}/>
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>6969</Text>
                        <TouchableOpacity style={styles.dislikeComponent}>
                            <SimpleLineIcons name="dislike" style={styles.dislike}/>
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>69</Text>
                    </View>
                </View>
                <View style={styles.aboutUser}>
                    <Text style = {styles.sectionName}>O korisniku</Text>
                    <View style={styles.dashContainer}>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                  </View>
                    <View style = {styles.userDetails}>
                        <Text style={styles.details}>Novi Sad, Srbija Novi Sad, Srbija Novi Sad, Srbija Novi Sad, SrbijaNovi Sad, Srbija
                        Novi Sad, Srbija Novi Sad, SrbijaNovi Sad, SrbijaNovi Sad, Srbija
                        Novi Sad, Srbija Novi Sad, Srbija Novi Sad, Srbija Novi Sad, Srbija Novi Sad, Srbija</Text>
                    </View>
                </View>
                <View style={styles.aboutUser}>
                    <Text style = {styles.sectionName}>Komentari</Text>
                    <View style={styles.dashContainer}>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                  </View>
                    <View style = {styles.userDetails}>
                        <Text style={styles.details}>Casovi iz pythona</Text>
                        <SimpleLineIcons name="like" style={styles.like}/>
                    </View>
                    <View style = {styles.userDetails}>
                        <Text style={styles.details}>Novi Sad, Srbija Novi Sad, Srbija Novi Sad, Srbija Novi Sad, SrbijaNovi Sad, Srbija</Text>
                    </View>
                </View>
            </View>


        </ImageBackground>
    );
    }
}

const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
        resizeMode: "cover",
    },
    mainContainer: {
        alignSelf: "center",
        marginTop: hp("8%"),
        width: wp("90%"),
        height: hp("40%"),
    },
    basicUserInfo: {
        backgroundColor: "#1e1c24",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ededed",
    },
    inputImage: {
        alignSelf: 'center',
        marginTop: hp("1.5%"),
        width: wp("30%"),
        height: hp("17%"),
    },
    profileName: {
        alignSelf: 'center',
        marginTop: hp("1.5%"),
        marginBottom: hp("0.5%"),
        fontSize: 20,
        color: "#ededed",
    },
    userLocation: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: hp("0.25%"),
    },
    location: {
        marginLeft: wp("1%"),
        fontSize: 16,
        color: "#ededed",
    },
    userMail: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: hp("0.5%"),
    },
    userOntact: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: hp("0.5%"),
    },
    userRating: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: hp("1.5%"),
    },
    ratingText: {
        fontSize: 16,
        color: "#ededed",
        marginLeft: wp("1%"),
        marginRight: wp("3%"),
    },
    likeComponent: {
        color: "#ededed",
    },
    like: {
        fontSize: 18,
        color: "#ededed",
    },
    dislikeComponent: {
        color: "#ededed",
    },
    dislike: {
        fontSize: 18,
        color: "#ededed",
    },
    userContact: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    userEmail: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    aboutUser: {
        backgroundColor: "#1e1c24",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ededed",
    },
    sectionName: {
        left: wp("2%"),
        marginTop: hp("1.5%"),
        marginBottom: hp("0.5%"),
        fontSize: 20,
        color: "#ededed",
    },
    dashContainer: {
        marginLeft: wp("0.3%"),
        flexDirection: "row",
    },
    line: {
        textAlignVertical: "center",
        fontSize: 5,
        color: "#ededed",
    },
    userDetails: {
        paddingHorizontal: wp("2.5%"),
        paddingVertical: hp("1%"),
        marginHorizontal: wp("1.5%"),
        marginVertical: hp("0.5%"),
        borderRadius: 10,
        backgroundColor: "#1f1f2f",
    },
    details: {
        color: "#ededed",
    },
  });