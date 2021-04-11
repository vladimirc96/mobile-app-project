import React from "react";
import { ImageBackground, Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import SubCategory from "./../components/SubCategory";
import * as Font from "expo-font";
import { subCategoriesStyles } from "../shared/Styles";
import { Dimensions } from "react-native";
import { getAllByCategoryId } from "../services/SubCategoryService";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf")
};
export default class SubCategories extends React.Component {
  state = {
    fontsLoaded: false,
    subCategories: [],
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.getAllByCategoryId();
    this._loadFontsAsync();
  }

  async getAllByCategoryId() {
    try {
      const data = await getAllByCategoryId(
        this.props.navigation.state.params.categoryId
      );
      this.setState({ subCategories: data });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const props = this.props.navigation.state.params;
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    const cameraIcon = require("./../assets/images/camera_icon.png");
    const subCategoryList = this.state.subCategories.map((subCategory) => (
      <View
        style={subCategoriesStyles.subcategoryContainer}
        key={subCategory.id}
      >
        <SubCategory
          onPress={() => this.props.navigation.navigate("Ads")}
          title={subCategory.name}
        />
      </View>
    ));
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={subCategoriesStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <ScrollView>
            <View style={subCategoriesStyles.mainContainer}>
              <View style={subCategoriesStyles.titleContainer}>
                <Image
                  style={
                    windowHeight * 0.37 < windowWidth * 0.7
                      ? subCategoriesStyles.titleIconHeight
                      : subCategoriesStyles.titleIconWidth
                  }
                  source={props.imagePath}
                />
                <Text style={subCategoriesStyles.title}> {props.title} </Text>
              </View>
              {subCategoryList}
            </View>
          </ScrollView>
        </ImageBackground>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
