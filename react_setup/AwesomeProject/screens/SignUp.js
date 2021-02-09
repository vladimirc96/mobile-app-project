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
      const formData = new FormData();
      formData.append('username',user.username);
      formData.append('password',user.password);
      formData.append('name',user.name);
      formData.append('lastName',user.lastName);
      formData.append('email',user.email);
      formData.append('phoneNumber',user.phoneNumber);
      formData.append('location',JSON.stringify(user.location));
      const response = await fetch(user.image);
      const blob = await response.blob();
      formData.append('image', blob);
      await signup(formData);
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
