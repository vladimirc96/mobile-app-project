import { ImageBackground, View } from "react-native";

import { FirstRunButton } from "../components/Buttons";
import React from "react";
import { firstRunStyles } from "../shared/Styles";

const SCREENS = {
  HOME: 1,
  LOGIN: 2,
};

export default class FirstRun extends React.Component {
  pressHandler = (screenType) => {
    switch (screenType) {
      case SCREENS.HOME:
        this.props.navigation.navigate("Home");
        break;
      case SCREENS.LOGIN:
        this.props.navigation.navigate("LogIn");
        break;
    }
  };

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");

    return (
      <ImageBackground
        style={firstRunStyles.backgroundImageContainer}
        source={backgroundImage}
      >
        <View style={firstRunStyles.mainContainer}>
          <View style={firstRunStyles.userContainer}>
            <FirstRunButton
              onPress={() => this.pressHandler(SCREENS.LOGIN)}
              title={"Nudim uslugu"}
            />
          </View>
          <View style={firstRunStyles.guestContainer}>
            <FirstRunButton
              onPress={() => this.pressHandler(SCREENS.HOME)}
              title={"Tražim uslugu"}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
