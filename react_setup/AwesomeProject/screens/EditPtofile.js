import React from "react";
import EditProfileForm from "../components/forms/EditProfileForm";
import { ImageBackground, StyleSheet } from "react-native";
import { getAll } from "../services/LocationService";
export default class EditProfile extends React.Component {
  state = {
    locations: [],
  };

  async componentDidMount() {
    try {
      const data = await getAll();
      this.setState({ locations: data });
    } catch (err) {
      console.log(err.message);
    }
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
