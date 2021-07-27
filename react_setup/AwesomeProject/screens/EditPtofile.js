import React from "react";
import EditProfileForm from "../components/forms/EditProfileForm";
import { ImageBackground, StyleSheet, ActivityIndicator } from "react-native";
import { getAll } from "../services/LocationService";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};
export default class EditProfile extends React.Component {
  state = {
    fontsLoaded: false,
    locations: [],
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  async componentDidMount() {
    try {
      const data = await getAll();
      await data.map((item) => {
        item.name = item.value;
        delete item.value;
      });
      await this.setState({ locations: data });
    } catch (err) {
      console.log(err.message);
    }

    // this._loadFontsAsync();
  }

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
    return (
      <ImageBackground
        style={styles.backgroundImageContainer}
        source={backgroundImage}
      >
        <EditProfileForm
          updateUser={this.props.navigation.getParam("updateUser")}
          locations={this.state.locations}
          user={this.props.navigation.getParam("user")}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
});
