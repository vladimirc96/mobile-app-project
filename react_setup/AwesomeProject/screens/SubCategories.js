import React from 'react';
import {ImageBackground, Text, View, Image, ScrollView} from 'react-native'
import SubCategory from './../SubCategory';
import { subCategoriesStyles } from '../shared/Styles'; 
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pressHandler = () => {
  console.log(5);
}

export default class SubCategories extends React.Component {

    render(){
    const backgroundImage = require('./../assets/images/logInBackground.jpg')
    const cameraIcon = require('./../assets/images/camera_icon.png')
      return (
        <ImageBackground
            style = {subCategoriesStyles.backgroundImageContainer}
            source = {backgroundImage}>
            <ScrollView>
            <View style = {subCategoriesStyles.mainContainer}>
                <View style = {subCategoriesStyles.titleContainer}>
                    <Image
                        style = {(windowHeight * 0.37) < (windowWidth * 0.7) ? subCategoriesStyles.titleIconHeight : subCategoriesStyles.titleIconWidth}
                        source = {cameraIcon}
                    />
                    <Text style={subCategoriesStyles.title}> #CATEGORY_NAME </Text>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress={() => this.props.navigation.navigate('Ads')} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
                <View style = {subCategoriesStyles.subcategoryContainer}>
                    <SubCategory onPress = {pressHandler} title = {'1. Subcategory'}/>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
      );
    }
  }

    