import React from "react";
import { ImageBackground, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { loginStyles } from "../shared/Styles";
import LoginForm from "../components/forms/LoginForm";
import { login } from "../services/AuthService";
import LocalStorage from "../localStorage";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf")
};

export default class LogIn extends React.Component {
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

  handleLogin = async (user) => {
    try {
      const token = await login({
        username: user.username,
        password: user.password,
      });
      await LocalStorage.setItem("currentUser", token);
      this.props.navigation.navigate("Home");
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={loginStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <LoginForm
            navigation={this.props.navigation}
          />
        </ImageBackground>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
