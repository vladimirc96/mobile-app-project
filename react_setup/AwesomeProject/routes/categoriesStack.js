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
            headerTitle: () => <Header title='#APPNAME' navigation={navigation} mainScreen={true} />
        }
        },
    },
    // SubCategories: {
    //     screen: SubCategories,
    //     navigationOptions: {//({ navigation }) => {
    //         return {
    //             headerTitle: () => <Header title='#APPNAME' navigation={navigation} />
    //         title: 'Subcategory',
    //         }
    //     }
    // },
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
    headerTintColor: '#ededed',
    headerStyle: { backgroundColor: '#1e1c24', height: 85 }
  }
});

export default CategoriesStack;