import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
// stacks
import CategoriesStack from "./categoriesStack";
import AboutUsStack from "./aboutUsStack";
import Drawer from "../components/Drawer";
import { FontAwesome } from "@expo/vector-icons";
import Profile from "../screens/Profile";
import AboutUs from "../screens/Profile";
import ContactUs from "../screens/ContactUs";
import React from "react";

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        drawerIcon: () => <FontAwesome name="user-o" size={24} color="white" />,
      },
    },
    Categories: {
      screen: CategoriesStack,
      navigationOptions: {
        drawerIcon: () => (
          <FontAwesome name="list-ul" size={24} color="white" />
        ),
      },
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: ({ navigation }) => {
        return {
          drawerIcon: () => (
            <FontAwesome name="question-circle-o" size={24} color="white" />
          ),
        };
      },
    },
  },
  {
    contentComponent: Drawer,
    initialRouteName: "Categories",
  }
);

const DrawerNavigator = createAppContainer(RootDrawerNavigator);

export default DrawerNavigator;
