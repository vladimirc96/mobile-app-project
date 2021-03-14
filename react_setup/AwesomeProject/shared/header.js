import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { headerStyles } from "./Styles";
import LocalStorage from "../localStorage";

export default function Header({ title, navigation, mainScreen }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  const avatar = require("./../assets/images/avatar.png");

  const getToken = async () => {
    const data = await LocalStorage.getItem("currentUser");
    setToken(data);
  };

  const [token, setToken] = useState({});

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={headerStyles.header}>
      {mainScreen && (
        <MaterialIcons
          name="menu"
          onPress={openMenu}
          style={headerStyles.icon}
        />
      )}
      <View>
        <Text
          style={
            mainScreen ? headerStyles.headerTextMain : headerStyles.headerText
          }
        >
          {title}
        </Text>
      </View>
      {token ? <Image source={avatar} style={headerStyles.avatar} /> : null}
    </View>
  );
}
