import React from 'react';
import {ImageBackground, Text, View, Image, ScrollView} from 'react-native'
import SubCategory from './../SubCategory';
import { subCategoriesStyles } from '../shared/Styles'; 

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
                        style = {subCategoriesStyles.titleIcon}
                        source = {cameraIcon}
                    />
                    <Text style={{marginLeft:10, color:'#ededed'}}> #CATEGORY_NAME </Text>
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

    