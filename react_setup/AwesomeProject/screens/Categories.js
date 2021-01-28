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
            <View style={{marginBottom: hp("4%"),marginTop: hp("8%"), alignSelf:"center"}}>
                <View style={styles.categoryRow}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SubCategories')} style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryRow}>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                    <Image
                      style = {styles.inputImage}
                      source = {cameraIcon}
                    />
                    <Text style = {styles.AdvButtonText}>Umetnost</Text>
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
  category: {
    width: wp("28%"),
    height: hp("15%"),
    borderRadius: 30,
    backgroundColor: '#1e1c24',
    opacity: 0.90,
    marginRight: wp("2%"),
    marginLeft: wp("2"),
    marginBottom: hp("1%")
  },
  categoryRow: {
    flexDirection: "row"
  },
  inputImage: {
    marginTop: 15,
    alignSelf: 'center',
    width: 50,
    height: 50
  },
  AdvButtonText: {
    textAlign: "center",
    paddingTop: 3,
    color: '#ededed',
    fontSize: 10,
    fontFamily: 'Comfortaa-Bold'
  }
});