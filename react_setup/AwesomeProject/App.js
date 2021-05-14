import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";
import Navigator from "./routes/firstRunStack";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./store/store";
import Entry from "./screens/Entry";
import { Provider as MenuProvider } from "react-native-paper";

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
      return (
        <MenuProvider>
          <Provider store={persistedStore.store}>
            <PersistGate loading={null} persistor={persistedStore.persistor}>
              <Entry />
            </PersistGate>
          </Provider>
        </MenuProvider>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
