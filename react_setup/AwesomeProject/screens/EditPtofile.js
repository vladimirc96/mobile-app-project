import React from "react";
import EditProfileForm from "../components/forms/EditProfileForm";
import { ImageBackground, StyleSheet } from "react-native";

export default class EditProfile extends React.Component {
  
  update = (user) => {

  }

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");

    return (
      <ImageBackground
        style={styles.backgroundImageContainer}
        source={backgroundImage}
      >
        <EditProfileForm updateUser={this.update}/>
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
