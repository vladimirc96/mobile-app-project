import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";
import { LogInButton } from "../Buttons";
import * as Font from "expo-font";
import { loginStyles } from "../shared/Styles";

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
};

export default class LogIn extends React.Component {
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

  navigateToRegistration = () => {
    this.props.navigation.navigate("SignUp");
  };

  login = () => {
    console.log('login');
  }

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={loginStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <View style={loginStyles.mainContainer}>
            <View style={loginStyles.welcomeTextContainer}>
              <Text style={loginStyles.firstText}>Dobrodošli</Text>
              <Text style={loginStyles.secondText}>Ulogujte se.</Text>
            </View>
            <View style={loginStyles.inputContainer}>
              <TextInput
                style={loginStyles.inputField}
                placeholder="e-mail ili korisničko ime"
                placeholderTextColor="#ededed"
              />
              <TextInput
                style={loginStyles.inputField}
                placeholder="lozinka"
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={loginStyles.footerContainer}>
              <View style={loginStyles.footerSmallContainer}>
                <Text style={loginStyles.footerText}> Nemate profil? </Text>
                <TouchableOpacity onPress={this.navigateToRegistration}>
                  <Text style={loginStyles.boldText}>Registruj se</Text>
                </TouchableOpacity>
              </View>
              <LogInButton onPress={this.login} title={"Ulogujte se"} />
            </View>
          </View>
        </ImageBackground>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
