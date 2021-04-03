import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";
import Navigator from "./routes/firstRunStack";
import React from "react";
import Ads from "./screens/Ads";
import Profile from "./screens/Profile";
import ContactUs from "./screens/ContactUs";
import EditProfile from "./screens/EditPtofile";
import AdCreation from "./screens/AdCreation";
import AboutUs from "./screens/AboutUs";
import Categories from "./screens/Categories";
import FirstRun from "./screens/FirstRun";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";

const customFonts = {
  "Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
};

export default class App extends React.Component {
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
      return <Ads />;
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
