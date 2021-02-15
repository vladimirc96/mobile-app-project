import React from "react";
import { ImageBackground, Image, View } from "react-native";
import { AdvButton } from "./../components/Buttons";
import { categoriesStyles } from "./../shared/Styles";
import Category from "./../components/Category";

export default class Categories extends React.Component {
  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");

    return (
      <ImageBackground
        style={categoriesStyles.backgroundImageContainer}
        source={backgroundImage}
      >
        <View style={categoriesStyles.mainContainer}>
          <View style={categoriesStyles.categoryRowContainer}>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
          </View>
          <View style={categoriesStyles.categoryRowContainer}>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
          </View>
          <View style={categoriesStyles.categoryRowContainer}>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
          </View>
          <View style={categoriesStyles.categoryRowContainer}>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
            <View style={categoriesStyles.singleCategoryContainer}>
              <Category
                onPress={() => this.props.navigation.navigate("SubCategories")}
                title={"Category_name"}
              />
            </View>
          </View>
          <AdvButton title={"Postavite oglas"} />
        </View>
      </ImageBackground>
    );
  }
}
