import React from 'react';
import { ImageBackground, Image, TouchableOpacity, Text, View } from 'react-native';
import { AdvButton } from '../Buttons'
import { categoriesStyles } from '../shared/Styles'; 

export default class Categories extends React.Component {
  
  render(){
    const backgroundImage = require('./../assets/images/logInBackground.jpg')
    const cameraIcon = require('./../assets/images/camera_icon.png')
    const hamburger = require('./../assets/images/hamburger.png')
    const avatar = require('./../assets/images/avatar.png')

    return (
      <ImageBackground
        style = {categoriesStyles.backgroundImageContainer}
        source = {backgroundImage}>
            <View style={categoriesStyles.mainContainer}>
                <View style={categoriesStyles.categoryRowContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SubCategories')} style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={categoriesStyles.categoryRowContainer}>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={categoriesStyles.categoryRowContainer}>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
                <View style={categoriesStyles.categoryRowContainer}>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={categoriesStyles.category}>
                    <Image
                      style = {categoriesStyles.categoryImage}
                      source = {cameraIcon}
                    />
                    <Text style = {categoriesStyles.categoryName}>Umetnost</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <AdvButton title={"Postavite oglas"}/>
      </ImageBackground>
    );
  }
}