import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View, Image, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import {Octicons} from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const customFonts = {
  'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf')
};

const gitara = require('./assets/images/gitara.jpg')

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
          style = {styles.mainContainer}>
        <View style={styles.adMainContainer}>
            <View>
            <Image
                style = {styles.adImage}
                source = {gitara}
            />
            </View>
            <View style = {styles.adMainText}>
                <Text style = {styles.adTitle}>{this.props.title}</Text>
                <View style={styles.ownerContainer}>
                  <View style={styles.leftDashContainer}>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                  </View>
                </View>
                <View style={ this.props.title.length < 15 ? styles.descriptionSmall : styles.descriptionLarge}>
                    <Text style={styles.descriptionText}> -svi zanrovi -svi zanrovi -svi zanrovi -svi zanrovi -svi zanrovi -svi</Text>
                    <TouchableOpacity style={styles.descriptionDetails}>
                    <Text style = {styles.descriptionDetailsText}>Detaljnije</Text>
                    <FontAwesome name="angle-double-down" style={styles.detailsArrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ownerNameContainer}>
                    <Text style={styles.ownerName}>Vlasnik: Slobodanka Jakovljevic </Text>
                </View>
            </View>
            <View style={styles.adDetails}>
              <View style = {styles.priceContainer}>
                <Text style={styles.priceValue}>Dogovor</Text>
              </View>
              <View style = {styles.publishDateContainer}>
                <Text style={styles.publishTitle}>postavljen:</Text>
                <Text style={styles.publishDate}>danas</Text>
              </View>
              <View style = {styles.location}>
                <Text style = {styles.locationText}>Novi Sad</Text>
              </View>
              <View>
                <View style = {styles.ratingStars}>
                  <Text style={styles.likeText}>6969</Text>
                  <Fontisto name="like" style={styles.like}/>
                  <Fontisto name="dislike" style={styles.dislike}/>
                  <Text style={styles.dislikeText}>69</Text>
                </View>
                {/* <View style = {styles.ratingComment}>
                  <Text style = {styles.ratingCommentText}>od strane </Text>
                  <Text style = {styles.ratingCommentText}>4 korisnika </Text>
                </View> */}
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

const styles = StyleSheet.create({
  mainContainer: {
  backgroundColor: '#3f3e42',
  width: '100%',
  height: '100%'
  },
  adTitle: {
  textAlign: "left",
  color: '#ededed',
  fontSize: 14,
  fontFamily: 'Comfortaa-Bold'
  },
  adImage: {
    height: hp("10.7%"),
    width: wp("5.2%"),
    top: hp("0.53%"),
    left: wp("0.26%"),
    borderWidth: 2,
    borderColor: '#ededed'
  },
  adMainContainer: {
    flexDirection: "row"
  },
  adMainText: {
    marginTop: hp("0.53%"),
    marginLeft: wp("0.52%"),
    backgroundColor: '#3f3e42',
    width: wp("7%"),
    height: hp("10.7%")
  },
  adDetails: {
      marginTop: hp("0.53%"),
      width: wp("3.9%"),
      height: ("10.7%"),
      backgroundColor: '#3f3e42',
      marginLeft: wp("0.26%")
  },
  line:{
      color: '#ededed',
      fontSize: 5,
      textAlignVertical: 'center'
  },
  descriptionSmall:{
    backgroundColor:'#1e1c24',
    width:'100%',
    height: hp("6.95%"),
    borderRadius: 5
  },
  descriptionLarge: {
    backgroundColor:'#1e1c24',
    width:'100%',
    height: hp("5.55%"),
    borderRadius: 5
  },
  descriptionText: {
      fontSize: 8,
      color: '#ededed',
      marginLeft: wp("0.16%"),
      marginRight: wp("0.16%")
  },
  descriptionDetails: {
    alignSelf: 'center'
  },
  descriptionDetailsText: {
    fontSize: 8,
    color: '#ededed',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  detailsArrow: {
    color: '#ededed',
    fontSize: 10,
    alignSelf: 'center',
  },
  ownerContainer: {
    flexDirection:'row',
  },
  leftDashContainer: {
    marginLeft: wp("0.05%"),
    flexDirection: 'row'
  },
  ownerNameContainer: {
    alignSelf: 'flex-start',
    marginTop: hp("0.1%")
  },
  ownerName: {
    fontSize: 8,
    color: '#ededed'
  },
  priceContainer: {
    marginTop: hp("0.1%"),
    alignSelf: 'center',
    height: hp("1.92%"),
    width: wp("3.39%"),
    backgroundColor: 'black'
  },
  priceValue: {
    textAlign: 'center',
    marginTop: hp("0.2%"),
    fontSize: 10,
    color: '#ededed'
  },
  publishDateContainer: {
    backgroundColor:'#3f3e42',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp("3.13%"),
    marginTop: hp("0.43%")
  },
  publishTitle: {
    fontSize: 8,
    color: '#ededed'
  },
  publishDate: {
    fontSize: 8,
    color: '#ededed'
  },
  location: {
    backgroundColor:'#3f3e42',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp("3.13%"),
    marginTop: hp("1%")
  },
  locationText: {
    fontSize: 8,
    color: '#ededed'
  },
  ratingStars: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp("3.9%"),
    marginTop: hp("1.5%")
  },
  likeText: {
    fontSize: 9,
    color: '#ededed'
  },
  like: {
    marginLeft: wp("0.26%"),
    color: "#ededed"
  },
  dislike: {
    marginLeft: wp("0.26%"),
    color: "#ededed"
  },
  dislikeText: {
    marginLeft: wp("0.26%"),
    fontSize: 9,
    color: '#ededed'
  },
  ratingComment: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp("3.9%"),
    marginTop: hp("0.1%")
  },
  ratingCommentText: {
    fontSize: 7,
    color: '#ededed'
  }
  });