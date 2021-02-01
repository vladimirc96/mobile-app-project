import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AdvButton } from '../Buttons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
                <View style={styles.categoryRowContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SubCategories')} style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRowContainer}>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRowContainer}>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRowContainer}>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <AdvButton title={"Postavite oglas"}/>
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
    alignSelf:"center",
    marginBottom: hp("4%"),
    marginTop: hp("8%"),
  },
  categoryRowContainer: {
    flexDirection: "row"
  },
  category: {
    marginBottom: hp("1%"),
    marginRight: wp("2%"),
    marginLeft: wp("2"),
    width: wp("28%"),
    height: hp("15%"),
    borderRadius: 30,
    opacity: 0.90,
    backgroundColor: '#1e1c24'
  },
  categoryImage: {
    alignSelf: 'center',
    marginTop: 15,
    width: 50,
    height: 50
  },
  categoryName: {
    textAlign: "center",
    paddingTop: 3,
    fontSize: 10,
    fontFamily: 'Comfortaa-Bold',
    color: '#ededed'
  }
});