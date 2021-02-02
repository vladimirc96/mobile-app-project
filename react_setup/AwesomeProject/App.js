import * as Font from 'expo-font';

import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Categories from './screens/Categories';
import FirstRun from './screens/FirstRun';
import LogIn from './screens/LogIn';
import Navigator from './routes/firstRunStack';
import React from 'react';
import SignUp from './screens/SignUp';
import SubCategories from './screens/SubCategories';

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
        <Navigator />
      );
    } else {
      return <ActivityIndicator size='large' />;
    }
  }
}