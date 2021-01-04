import React from 'react';
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import FirstRun from './screens/FirstRun';
import * as Font from 'expo-font';

const customFonts = {
  'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf')
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
      return (
        <Login />
      );
    } else {
      return <ActivityIndicator size='large' />;
    }
  }
}