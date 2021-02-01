import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {headerStyles} from './Styles';

export default function Header({ title, navigation,mainScreen }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  const avatar = require('./../assets/images/avatar.png')

  return (
    <View style={headerStyles.header}>
      {mainScreen && <MaterialIcons name='menu' onPress={openMenu} style={headerStyles.icon} />}
      <View>
        <Text style={mainScreen? headerStyles.headerTextMain : headerStyles.headerText}>{title}</Text>
      </View>
      <Image
            source = {avatar}
            style = {headerStyles.avatar}
      />
    </View>
  );
}