import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";
import Navigator from "./routes/firstRunStack";
import React from "react";
<<<<<<< HEAD
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
=======
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store/store";

const persistStore = configureStore();
>>>>>>> 04135f29517f4367bdc021d80d0375595becd69e

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
        <Provider store={persistStore.store}>
          <PersistGate loading={null} persistor={persistStore.persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
