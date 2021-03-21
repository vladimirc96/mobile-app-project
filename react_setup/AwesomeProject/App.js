import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";
import Navigator from "./routes/firstRunStack";
import React from "react";
import Ads from "./screens/Ads";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import FirstRun from "./screens/FirstRun";
import Categories from "./screens/Categories";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditPtofile";
import { EditProfileButton } from "./components/Buttons";

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
      return <EditProfile />;
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
