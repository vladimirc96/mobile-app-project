import LogIn from "../screens/LogIn";
import React from "react";
import SignUp from "../screens/SignUp";
import FirstRun from "../screens/FirstRun";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";

const screens = {
  FirstRun: {
    screen: FirstRun,
  },
  LogIn: {
    screen: LogIn,
  },
  SignUp: {
    screen: SignUp,
  },
  Home: {
    screen: Home,
  },
};

const FirstRunStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(FirstRunStack);
