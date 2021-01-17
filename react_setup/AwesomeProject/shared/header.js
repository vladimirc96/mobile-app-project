import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation,mainScreen }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  const avatar = require('./../assets/images/avatar.png')

  return (
    <View style={styles.header}>
      {mainScreen && <MaterialIcons name='menu' onPress={openMenu} style={styles.icon} />}
      <View>
        <Text style={mainScreen? styles.headerTextMain : styles.headerText}>{title}</Text>
      </View>
      <Image
            source = {avatar}
            style = {styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ededed',
    letterSpacing: 1,
    marginLeft: -60
  },
  headerTextMain: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ededed',
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 5,
    color: '#ededed',
    fontSize: 40
  },
  avatar: {
    height: 45,
    width: 45,
    position: 'absolute',
    right: 5
  }
});