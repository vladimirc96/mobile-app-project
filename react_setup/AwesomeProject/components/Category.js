import React from "react";
import { Image, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { categoryStyles } from "./../shared/Styles";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
};

const pressHandler = () => {
  console.log(5);
};

export default class Category extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    const cameraIcon = require("../assets/images/camera_icon.png");

    if (this.state.fontsLoaded) {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          style={categoryStyles.category}
        >
          <Image
            style={
              windowHeight * 0.15 < windowWidth * 0.28
                ? categoryStyles.categoryImageHeight
                : categoryStyles.categoryImageWidth
            }
            source={cameraIcon}
          />
          <Text
            style={
              windowHeight * 0.15 < windowWidth * 0.28
                ? categoryStyles.categoryNameHeight
                : categoryStyles.categoryNameWidth
            }
          >
            Umetnost
          </Text>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
