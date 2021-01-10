import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native'
import SubCategory from './../SubCategory';

const pressHandler = () => {
  console.log(5);
}

export default class SubCategories extends React.Component {

    render(){
    const backgroundImage = require('./../assets/images/subcategories.png')
    const cameraIcon = require('./../assets/images/camera_icon.svg')

      return (
        <ImageBackground
            style = {styles.backgroundImageContainer}
            source = {backgroundImage}>
            <View style = {styles.mainContainer}>
              <ScrollView>
                <View style = {styles.titleContainer}>
                    <Image
                        style = {styles.titleIcon}
                        source = {cameraIcon}
                    />
                    <Text> #CATEGORY_NAME </Text>
                </View>
                <View style = {styles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
              </ScrollView>
            </View>
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
        marginTop: 40,
        marginBottom: 15,
        width: 250,
        height: 60,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#ededed',
    },
    titleIcon: {
        width: 50,
        height: 50
    },
    subcategoryContainer: {
        alignSelf: "center",
        marginTop: 10
    }
  });