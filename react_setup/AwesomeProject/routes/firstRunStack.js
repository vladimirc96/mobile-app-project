import LogIn from "../screens/LogIn";
import React from "react";
import SignUp from "../screens/SignUp";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  LogIn: {
    screen: LogIn,
  },
  SignUp: {
    screen: SignUp,
  },
};

const FirstRunStack = createStackNavigator(screens);

export default createAppContainer(FirstRunStack);
