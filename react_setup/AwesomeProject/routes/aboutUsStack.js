import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "./../shared/header";
import AboutUs from "./../screens/AboutUs";
import ContactUs from "./../screens/ContactUs";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const screens = {
  AboutUs: {
    screen: AboutUs,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="" navigation={navigation} mainScreen={true} />
        ),
        headerLeft: null,
      };
    },
  },
  ContactUs: {
    screen: ContactUs,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Pronadji sam." navigation={navigation} />,
      };
    },
  },
};

// home stack navigator screens
const AboutUsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#ededed",
    headerStyle: { backgroundColor: "#1e1c24", height: hp("12%") },
  },
});

export default AboutUsStack;
