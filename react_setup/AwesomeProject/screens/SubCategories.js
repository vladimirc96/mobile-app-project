import React from "react";
import { ImageBackground, Text, View, Image, ScrollView } from "react-native";
import SubCategory from "./../components/SubCategory";
import { subCategoriesStyles } from "../shared/Styles";
import { Dimensions } from "react-native";
import { getAllByCategoryId } from "../services/SubCategoryService";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class SubCategories extends React.Component {
  state = {
    subCategories: [],
  };

  componentDidMount() {
    this.getAllByCategoryId();
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
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
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
                source={cameraIcon}
              />
              <Text style={subCategoriesStyles.title}> #CATEGORY_NAME </Text>
            </View>
            {subCategoryList}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
