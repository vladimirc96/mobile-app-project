import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "./../shared/header";
import Categories from "./../screens/Categories";
import SubCategories from "./../screens/SubCategories";
import Ads from "./../screens/Ads";
import Profile from "./../screens/Profile";
import EditProfile from "./../screens/EditPtofile";
import AdCreation from "./../screens/adCreation";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const screens = {
  Categories: {
    screen: Categories,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="#APPNAME" navigation={navigation} mainScreen={true} />
        ),
        headerLeft: null,
      };
    },
  },
  SubCategories: {
    screen: SubCategories,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="#APPNAME" navigation={navigation} />,
      };
    },
  },
  Ads: {
    screen: Ads,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="#APPNAME" navigation={navigation} />,
      };
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="#APPNAME" navigation={navigation} />,
      };
    },
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="#APPNAME" navigation={navigation} />,
      };
    },
  },
  AdCreation: {
    screen: AdCreation,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="#APPNAME" navigation={navigation} />,
      };
    },
  },
};

// home stack navigator screens
const CategoriesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#ededed",
    headerStyle: { backgroundColor: "#1e1c24", height: hp("12%") },
  },
});

export default CategoriesStack;
