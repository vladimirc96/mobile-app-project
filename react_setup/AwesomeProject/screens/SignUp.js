import React from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { signupStyles } from "../shared/Styles";
import SignUpForm from "../components/forms/SignUpForm";
import { signup } from "../services/UserService";
import { login } from "../services/AuthService";
import LocalStorage from "../localStorage";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
};

export default function SignUp(props) {
  const backgroundImage = require("./../assets/images/signUpBackground.jpg");

  const signupCallback = async (user) => {
    try {
      const formData = new FormData();
      Object.keys(user).forEach((key) => formData.append(key, user[key]));
      const response = await fetch(user.image);
      const blob = await response.blob();
      formData.append("image", blob);

      await signup(formData);
      redirect(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const redirect = async (user) => {
    try {
      const token = await login({
        username: user.username,
        password: user.password,
      });
      LocalStorage.setItem("currentUser", token);
      props.navigation.navigate("Home");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={signupStyles.backgroundImageContainer}
        source={backgroundImage}
      >
        <SignUpForm signup={signupCallback} />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
