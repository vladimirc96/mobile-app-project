import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from './../shared/header';
import Categories from './../screens/Categories';
import SubCategories from './../screens/SubCategories';

const screens = {
    Categories: {
        screen: Categories,
        navigationOptions: ({ navigation }) => {
        return {
            headerTitle: () => <Header title='#APPNAME' navigation={navigation} />
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

    // Categories: {
    //     screen: Categories,
    //     navigationOptions: {
    //         title: '#APPNAME',
    //     },
    // },
    // SubCategories: {
    //     screen: SubCategories,
    //     navigationOptions: {
    //         title: '#APPNAME',
    //     },
    // },
};

// home stack navigator screens
const CategoriesStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default CategoriesStack;