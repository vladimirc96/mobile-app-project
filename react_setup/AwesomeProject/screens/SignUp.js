import React from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { signupStyles } from "../shared/Styles";
import SignUpForm from "../components/forms/SignUpForm";
import { login } from "../store/actions/authentication/authenticationActions";
import { registerUser } from "../store/actions/user/userActions";
import { connect } from "react-redux";

const backgroundImage = require("./../assets/images/signUpBackground.jpg");

export class SignUp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  signupCallback = async (user) => {
    try {
      const formData = new FormData();
      Object.keys(user).forEach((key) => {
        if (key === "image") {
          return;
        }
        formData.append(key, user[key]);
      });
      if (user.image) {
        const response = await fetch(user.image);
        const blob = await response.blob();
        const image = {
          uri: user.image,
          type: blob.type,
          name: blob.data.name,
        };
        formData.append("image", image);
      }
      await this.props.register(
        formData,
        { username: user.username, password: user.password },
        this.props.navigation
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  redirect = async (user) => {
    try {
      await this.props.loginUser(
        {
          username: user.username,
          password: user.password,
        },
        this.props.navigation
      );
      console.log("TOKEN: ", this.props.token);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={signupStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <SignUpForm signup={this.signupCallback} />
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    token: state.authenticationReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user, credentials, navigation) =>
      dispatch(registerUser(user, credentials, navigation)),
    loginUser: () => dispatch(login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
