import React from "react";
import { ImageBackground, Image, View } from "react-native";
import { AdvButton } from "./../components/Buttons";
import { categoriesStyles } from "./../shared/Styles";
import Category from "./../components/Category";
import { getCategories } from "../store/actions/category/categoryActions";
import { connect } from "react-redux";

export class Categories extends React.Component {
  componentDidMount() {
    this.props.getCategories();
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
    return (
      <ImageBackground
        style={categoriesStyles.backgroundImageContainer}
        source={backgroundImage}
      >
        <View style={categoriesStyles.mainContainer}>
          {rows}
          <AdvButton
            title={
              this.props.token
                ? "Postavite oglas"
                : "Registurj se da postaviš oglas"
            }
            onPress={() =>
              this.props.token
                ? this.props.navigation.navigate("AdCreation")
                : this.props.navigation.navigate("SignUp")
            }
          />
        </View>
      </ImageBackground>
    );
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
