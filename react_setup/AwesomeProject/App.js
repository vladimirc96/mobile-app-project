import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";
import Navigator from "./routes/firstRunStack";
import React from "react";
import { Provider } from 'react-redux';
import store from './store/store';

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
      return <Provider store={store}><Navigator /></Provider>;
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
