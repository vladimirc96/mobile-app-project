import React from "react";
import { ImageBackground, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Font from "expo-font";

import { adCreationStyles } from "./../shared/Styles";
import AdForm from "../components/forms/AdForm";
import { getCategories } from "../store/actions/category/categoryActions";
import { connect } from "react-redux";
import { getAllByCategoryId } from "../services/SubCategoryService";
import { saveAd } from "../services/AdService";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export class AdCreation extends React.Component {
  state = {
    fontsLoaded: false,
    categories: [],
    subCategories: [],
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    (async () => {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();

    this._loadFontsAsync();
    this.getSubCategories(1);
  }

  getSubCategories = async (categoryId) => {
    try {
      const data = await getAllByCategoryId(categoryId);
      this.setState({ subCategories: data });
    } catch (err) {
      console.log(err.message);
    }
  };

  onChangeCategory = (categoryId) => {
    this.getSubCategories(categoryId);
  };

  handleSubmit = async (ad) => {
    try {
      const formData = new FormData();
      Object.keys(ad).forEach((key) => {
        if (key === "category" || key === "image") {
          return;
        }
        formData.append(key, ad[key]);
      });
      if (ad.image) {
        const response = await fetch(ad.image);
        const blob = await response.blob();
        const image = {
          uri: ad.image,
          type: blob.type,
          name: blob.data.name,
        };
        formData.append("image", image);
      }
      formData.append("creationDate", new Date().toISOString().slice(0, 10));
      await saveAd(formData);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");

    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={adCreationStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <AdForm
            categories={this.props.categories}
            subCategories={this.state.subCategories}
            onChangeCategory={this.onChangeCategory}
            handleSubmit={this.handleSubmit}
          ></AdForm>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdCreation);
