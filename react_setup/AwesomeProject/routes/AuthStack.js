import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  LogIn: {
    screen: LogIn,
  },
  SignUp: {
    screen: SignUp,
  },
};

const AuthStackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerShown: false,
  },
});
const AuthStack = createAppContainer(AuthStackNavigator);

export default AuthStack;
