import React from "react";
import { Image, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { categoryStyles } from "./../shared/Styles";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf")
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

    if (this.state.fontsLoaded) {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[categoryStyles.category, {backgroundColor: this.props.color}]}
        >
          <Image
            style={
              windowHeight * 0.15 < windowWidth * 0.28
                ? categoryStyles.categoryImageHeight
                : categoryStyles.categoryImageWidth
            }
            source={this.props.imagePath}
          />
          <Text
            style={
              windowHeight * 0.15 < windowWidth * 0.28
                ? categoryStyles.categoryNameHeight
                : categoryStyles.categoryNameWidth
            }
          >
            {this.props.title}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
