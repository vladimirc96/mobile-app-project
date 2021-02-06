import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, Text, View, Image, ActivityIndicator} from 'react-native';
import * as Font from 'expo-font';
import {Octicons} from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { adStyles } from '../shared/Styles'; 

const customFonts = {
  'Comfortaa-Bold': require('../assets/fonts/Comfortaa-Bold.ttf')
};

const gitara = require('../assets/images/gitara.jpg')

const pressHandler = () => {
  console.log(5);
}

export default class Ad extends React.Component {
  state = {
    fontsLoaded: false
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  
  render(){

    if(this.state.fontsLoaded){
      return (
        <TouchableOpacity
          onPress = {this.props.onPress}
          style = {adStyles.mainContainer}>
        <View style={adStyles.adMainContainer}>
            <View>
            <Image
                style = {adStyles.adImage}
                source = {gitara}
            />
            </View>
            <View style = {adStyles.adMainText}>
                <Text style = {adStyles.adTitle}>{this.props.title}</Text>
                <View style={adStyles.ownerContainer}>
                  <View style={adStyles.leftDashContainer}>
                    <Octicons name='dash' style={adStyles.line}/>
                    <Octicons name='dash' style={adStyles.line}/>
                    <Octicons name='dash' style={adStyles.line}/>
                    <Octicons name='dash' style={adStyles.line}/>
                  </View>
                </View>
                <View style={ this.props.title.length < 15 ? adStyles.descriptionSmall : adStyles.descriptionLarge}>
                    <Text style={adStyles.descriptionText}> -svi zanrovi -svi zanrovi -svi zanrovi -svi zanrovi -svi zanrovi -svi</Text>
                    <TouchableOpacity style={adStyles.descriptionDetails}>
                    <Text style = {adStyles.descriptionDetailsText}>Detaljnije</Text>
                    <FontAwesome name="angle-double-down" style={adStyles.detailsArrow} />
                    </TouchableOpacity>
                </View>
                <View style={adStyles.ownerNameContainer}>
                    <Text style={adStyles.ownerName}>Vlasnik: Slobodanka Jakovljevic </Text>
                </View>
            </View>
            <View style={adStyles.adDetails}>
              <View style = {adStyles.priceContainer}>
                <Text style={adStyles.priceValue}>Dogovor</Text>
              </View>
              <View style = {adStyles.publishDateContainer}>
                <Text style={adStyles.publishTitle}>postavljen:</Text>
                <Text style={adStyles.publishDate}>danas</Text>
              </View>
              <View style = {adStyles.location}>
                <Text style = {adStyles.locationText}>Novi Sad</Text>
              </View>
              <View>
                <View style = {adStyles.ratingStars}>
                  <Text style={adStyles.likeText}>6969</Text>
                  <Fontisto name="like" style={adStyles.like}/>
                  <Fontisto name="dislike" style={adStyles.dislike}/>
                  <Text style={adStyles.dislikeText}>69</Text>
                </View>
              </View>
            </View>
        </View>
        </TouchableOpacity>
      );
    }else{
      return <ActivityIndicator size='large' />;
    }
  }
}
