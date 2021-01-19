import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text, View, Image, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import {Octicons} from '@expo/vector-icons'

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
                <View style={{flexDirection:'row'}}>
                    <Octicons name='dash' style={styles.line}/>
                    <Octicons name='dash' style={styles.line}/>
                    <Text style={styles.ownerName}> Slobodanka Jakovljevic </Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}> -svi zanrovi -svi zanrovi -svi zanrovi -svi zanrovi -svi zanrovi -svi</Text>
                </View>
            </View>
            <View style={styles.adDetails}>

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
  backgroundColor: '#1e1c24',
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
    backgroundColor: 'red',
    width: 135,
    height: 100
  },
  adDetails: {
      marginTop: 5,
      width: 75,
      height: 100,
      backgroundColor: 'blue',
      marginLeft: 5
  },
  line:{
      color: '#ededed',
      fontSize: 5,
      textAlignVertical: 'center'
  },
  description:{
      backgroundColor:'#1e1c24',
      width:'100%',
      height: 40,
      borderRadius: 5,
      borderWidth: 1
  },
  descriptionText: {
      fontSize: 10,
      color: '#ededed'
  },
  ownerName: {
    fontSize: 9,
    color: '#ededed'
  }
  });