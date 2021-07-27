import LogIn from "../screens/LogIn";
import React from "react";
import SignUp from "../screens/SignUp";
import FirstRun from "../screens/FirstRun";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import AuthStack from "./AuthStack";

const screens = {
  FirstRun: {
    screen: FirstRun,
  },
  Auth: AuthStack,
  Home: {
    screen: Home,
  },
};

const FirstRunStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});
const FirstRunNavigator = createAppContainer(FirstRunStack);

export default FirstRunNavigator;
