import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function DrawerItem(props) {

  const getLabel = (labelName) => {
    if(labelName === 'Categories'){
      return 'Kategorije';
    }else if(labelName === 'AboutUs'){
      return 'O nama';
    }else if(labelName === 'Profile'){
      return 'Moj profil';
    }
  }
  return (
    <TouchableOpacity
      style={{ marginTop: 10, marginLeft: 10 }}
      onPress={() => props.navigate(props.navigation)}
    >
      <View style={styles.container}>
        {props.drawerIcon()}
        <Text style={styles.menuText}>{getLabel(props.routeName)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  menuText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginLeft: 20,
  },
});
