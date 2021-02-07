import React from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { signupStyles } from "../shared/Styles";
import SignUpForm from "../components/forms/SignUpForm";

export default function SignUp() {
  const backgroundImage = require("./../assets/images/signUpBackground.jpg");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={signupStyles.backgroundImageContainer}
        source={backgroundImage}
      >
        <SignUpForm />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
