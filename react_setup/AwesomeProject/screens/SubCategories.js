import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native'
import SubCategory from './../SubCategory';

const pressHandler = () => {
  console.log(5);
}

export default class SubCategories extends React.Component {

    render(){
    const backgroundImage = require('./../assets/images/logInBackground.jpg')
    const cameraIcon = require('./../assets/images/camera_icon.png')

      return (
        <ImageBackground
            style = {styles.backgroundImageContainer}
            source = {backgroundImage}>
            <ScrollView>
            <View style = {styles.mainContainer}>
                <View style = {styles.titleContainer}>
                    <Image
                        style = {styles.titleIcon}
                        source = {cameraIcon}
                    />
                    <Text style={{marginLeft:10, color:'#ededed'}}> #CATEGORY_NAME </Text>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress={() => this.props.navigation.navigate('Ads')} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
      );
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
    alignSelf: "center"
    },
    titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#1e1c24',
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 15,
    width: 200,
    height: 70,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ededed',
    paddingTop: 22
    },
    titleIcon: {
    width: 40,
    height: 40,
    bottom: 10,
    left: 8
    },
    subcategoryContainer: {
    alignSelf: "center",
    marginTop: 10,
    width: 300,
    height: 60
    }
    });
    