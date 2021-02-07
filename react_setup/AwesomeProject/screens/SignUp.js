import React from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { signupStyles } from "../shared/Styles";
import SignUpForm from "../components/forms/SignUpForm";
import { signup } from "../services/UserService";

export default function SignUp() {
  const backgroundImage = require("./../assets/images/signUpBackground.jpg");

  const signupCallback = async (user) => {
    try {
      user.location = { id: null, text: "" };
      const data = await signup(user);
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
