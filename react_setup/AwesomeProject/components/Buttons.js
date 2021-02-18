import React from "react";
import { TouchableOpacity, Text, Image, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { buttonsStyles } from "../shared/Styles";

const customFonts = {
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
};

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export class LogInButton extends React.Component {
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
        <TouchableOpacity
          onPress={this.props.onPress}
          style={buttonsStyles.logInButtonContainer}
        >
          <Text style={buttonsStyles.logInButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
export class AdvButton extends React.Component {
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
        <TouchableOpacity
          onPress={this.props.onPress}
          style={buttonsStyles.AdvButtonContainer}
        >
          <Text style={buttonsStyles.AdvButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}

export class SignUpButton extends React.Component {
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
        <TouchableOpacity
          onPress={this.props.onPress}
          style={buttonsStyles.signUpButtonContainer}
        >
          <Text style={buttonsStyles.signUpButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}

export class FirstRunButton extends React.Component {
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
    const cameraIcon = require("../assets/images/camera_icon.png");

    if (this.state.fontsLoaded) {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          style={buttonsStyles.firstRunButtonContainer}
        >
          <Image
            style={
              windowHeight * 0.37 < windowWidth * 0.7
                ? buttonsStyles.inputImageHeight
                : buttonsStyles.inputImageWidth
            }
            source={cameraIcon}
          />
          <Text
            style={
              windowHeight * 0.37 < windowWidth * 0.7
                ? buttonsStyles.firstRunButtonTextHeight
                : buttonsStyles.firstRunButtonTextWidth
            }
          >
            {this.props.title}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}

export class EditProfileButton extends React.Component {
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
        <TouchableOpacity
          onPress={this.props.onPress}
          style={buttonsStyles.editProfileButtonContainer}
        >
          <Text style={buttonsStyles.editProfileButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
