import * as Font from "expo-font";

import { ActivityIndicator } from "react-native";

import Navigator from "./routes/firstRunStack";
import React from "react";
import { Profiler } from "react";

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
      return <Navigator />;
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
