import React from "react";
import { ImageBackground, ActivityIndicator, View, TouchableOpacity, Text } from "react-native";
import { AdvButton } from "./../components/Buttons";
import { categoriesStyles } from "./../shared/Styles";
import Category from "./../components/Category";
import { getCategories } from "../store/actions/category/categoryActions";
import { connect } from "react-redux";
import * as Font from "expo-font";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf")
};

export class Categories extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.props.getCategories();
    this._loadFontsAsync();
  }

  render() {
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    const categoryList = this.props.categories.map((category) => (
      <View style={categoriesStyles.singleCategoryContainer} key={category.id}>
        <Category
          onPress={() =>
            this.props.navigation.navigate("SubCategories", {
              categoryId: category.id,
              title: category.name.replace(/(\r\n|\n|\r)/gm, " "),
              imagePath: category.imagePathSub,
            })
          }
          title={category.name}
          imagePath={category.imagePath}
          color={category.color}
          multiLine={category.multiLine}
        />
      </View>
    ));
    const rows = [];
    for (var i = 0; i < categoryList.length; i += 3) {
      rows.push(
        <View style={categoriesStyles.categoryRowContainer} key={i}>
          {categoryList.slice(i, i + 3)}
        </View>
      );
    }
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={categoriesStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <View style={categoriesStyles.mainContainer}>
            {rows}
            {!this.props.token ? (
              <View style={categoriesStyles.footerContainer}>
                <View style={categoriesStyles.footerSmallContainer}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
                    <Text style={categoriesStyles.boldText}>Registrujte se</Text>
                  </TouchableOpacity>
                    <Text style={categoriesStyles.footerTextFirstPart}>ukoliko i Vi imate</Text>
                </View>
                <View style={categoriesStyles.footerSmallContainerSecondPart}>
                  <Text style={categoriesStyles.footerTextSecondPart}>oglas koji želite da postavite </Text>
                </View>
              </View>
            ) : (
              <AdvButton
                title="Postavite oglas"
                onPress={() => this.props.navigation.navigate("AdCreation") }
              />
              )}
            </View>
        </ImageBackground>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
    token: state.authenticationReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
