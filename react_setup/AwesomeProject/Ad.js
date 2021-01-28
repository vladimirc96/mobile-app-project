import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View, Image, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import {Octicons} from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';

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
                <Text style={styles.publishTitle}>postavljen</Text>
                <Text style={styles.publishDate}>danas</Text>
              </View>
              <View style = {styles.location}>
                <Text style = {styles.locationText}>Lokacija</Text>
              </View>
              <View>
                <View style = {styles.ratingValue}>
                  <Text style = {styles.ratingValueText}>ocena </Text>
                  <Text style = {styles.ratingValueText}>3.5 </Text>
                </View>
                <View style = {styles.ratingStars}>
                  <FontAwesome name="star" style={styles.star} />
                  <FontAwesome name="star" style={styles.star} />
                  <FontAwesome name="star" style={styles.star} />
                  <FontAwesome name="star-half-empty" style={styles.star} />
                  <FontAwesome name="star-o" style={styles.star}/>
                </View>
                <View style = {styles.ratingComment}>
                  <Text style = {styles.ratingCommentText}>od strane </Text>
                  <Text style = {styles.ratingCommentText}>4 korisnika </Text>
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
    height: 100,
    width: 100,
    top: 5,
    left: 5,
    borderWidth: 2,
    borderColor: '#ededed'
  },
  adMainContainer: {
    flexDirection: "row"
  },
  adMainText: {
    marginTop: 5,
    marginLeft: 10,
    backgroundColor: '#3f3e42',
    width: 135,
    height: 100
  },
  adDetails: {
      marginTop: 5,
      width: 75,
      height: 100,
      backgroundColor: '#3f3e42',
      marginLeft: 5
  },
  line:{
      color: '#ededed',
      fontSize: 5,
      textAlignVertical: 'center'
  },
  descriptionSmall:{
    backgroundColor:'#1e1c24',
    width:'100%',
    height: 65,
    borderRadius: 5
  },
  descriptionLarge: {
    backgroundColor:'#1e1c24',
    width:'100%',
    height: 52,
    borderRadius: 5
  },
  descriptionText: {
      fontSize: 8,
      color: '#ededed',
      marginLeft: 3,
      marginRight: 3
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
    marginLeft: 1,
    flexDirection: 'row'
  },
  ownerNameContainer: {
    alignSelf: 'flex-start'
  },
  ownerName: {
    fontSize: 8,
    color: '#ededed'
  },
  priceContainer: {
    alignSelf: 'center',
    height: 18,
    width: 65,
    backgroundColor: 'black'
  },
  priceValue: {
    textAlign: 'center',
    marginTop: 2,
    fontSize: 10,
    color: '#ededed'
  },
  publishDateContainer: {
    backgroundColor:'#3f3e42',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 60,
    marginTop: 4
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
    width: 60,
    marginTop: 5
  },
  locationText: {
    fontSize: 8,
    color: '#ededed'
  },
  ratingValue: {
    flexDirection: 'row',
    width: 75,
    justifyContent: 'center',
    marginTop: 3
  },
  ratingValueText: {
    fontSize: 8,
    color: '#ededed'
  },
  ratingStars: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 75,
    marginTop: 1
  },
  star: {
    color: "#ededed"
  },
  ratingComment: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 75,
    marginTop: 1
  },
  ratingCommentText: {
    fontSize: 7,
    color: '#ededed'
  }
  });