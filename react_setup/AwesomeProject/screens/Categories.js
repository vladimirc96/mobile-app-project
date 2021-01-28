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
            <View style={{marginBottom: 10,marginTop: 40}}>
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
    width: 95,
    height: 95,
    borderRadius: 35,
    backgroundColor: '#1e1c24',
    opacity: 0.90,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 10
  },
  categoryRow: {
    paddingLeft: 10,
    paddingRight: 10,
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
  },
  hamburger: {
    marginTop: 33,
    marginLeft: 20,
    width: 50,
    height: 50
  },
  LogoText: {
    textAlign: "center",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 5,
    color: '#ededed',
    fontSize: 30,
    fontFamily: 'Comfortaa-Bold'
  }
});