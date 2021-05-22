import React from "react";
import { ImageBackground, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { contactUsStyles } from "./../shared/Styles";
import ContactUsForm from "../components/forms/ContactUsForm";
import { sendMail } from "../services/MailService";
import Toast from "react-native-simple-toast";
import { CONTACT_US_SUCCESS } from "../constants/Messages";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};
export default class ContactUs extends React.Component {
  state = {
    fontsLoaded: false,
    image: null,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  handleSubmit = async (mail) => {
    try {
      const formData = new FormData();
      Object.keys(mail).forEach((key) => {
        if (key === "image") {
          return;
        }
        formData.append(key, mail[key]);
      });
      if (mail.image) {
        const response = await fetch(mail.image);
        const blob = await response.blob();
        const image = {
          uri: mail.image,
          type: blob.type,
          name: blob.data.name,
        };
        formData.append("image", image);
      }
      await sendMail(formData);
      Toast.show(CONTACT_US_SUCCESS, Toast.LONG);
      this.props.navigation.navigate("Categories");
    } catch (err) {
      console.log(err);
      Toast.show(err.message, Toast.SHORT);
    }
  };

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    console.log(this.state.fontsLoaded);
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={contactUsStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <ContactUsForm handleSubmit={this.handleSubmit} />
        </ImageBackground>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
