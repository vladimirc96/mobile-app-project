import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
import { subCategoryStyles } from "../shared/subCategoriesStyles";

const customFonts = {
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
};

const pressHandler = () => {
  console.log(5);
};

export default class SubCategory extends React.Component {
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
          style={subCategoryStyles.mainContainer}
        >
          <Text style={subCategoryStyles.mainContainerText}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
