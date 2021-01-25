import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from './../shared/header';
import Categories from './../screens/Categories';
import SubCategories from './../screens/SubCategories';
import Ads from './../screens/Ads';

const screens = {
    Categories: {
        screen: Categories,
        navigationOptions: ({ navigation }) => {
        return {
            headerTitle: () => <Header title='#APPNAME' navigation={navigation} mainScreen={true} />
        }
        },
    },
    SubCategories: {
        screen: SubCategories,
        navigationOptions: ({ navigation }) => {
        return {
            headerTitle: () => <Header title='#APPNAME' navigation={navigation} />
        }
        },
    },
    Ads: {
        screen: Ads,
        navigationOptions: ({ navigation }) => {
        return {
            headerTitle: () => <Header title='#APPNAME' navigation={navigation} />
        }
        },
    },
};

// home stack navigator screens
const CategoriesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#ededed',
    headerStyle: { backgroundColor: '#1e1c24', height: 85 }
  }
});

export default CategoriesStack;