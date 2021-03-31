import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { headerStyles } from "./Styles";
import { useSelector } from "react-redux";
import { Button, Menu, Divider, Provider, Avatar } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header({ title, navigation, mainScreen }) {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const avatar = require("./../assets/images/avatar.png");

  const token = useSelector((state) => state.authenticationReducer.token);

  return (
    <Provider>
      <View style={headerStyles.header}>
        {mainScreen && (
          <MaterialIcons
            name="menu"
            onPress={openDrawer}
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
        {token ? (
          <View
            style={{
              height: hp("7%"),
              width: hp("7%"),
              position: "absolute",
              right: wp("2%"),
            }}
          >
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() => setVisible(true)}
                >
                  <Avatar.Image size={40} source={avatar} />
                </TouchableOpacity>
              }
            >
              <Menu.Item onPress={() => {}} title="Profil" />
              <Menu.Item onPress={() => {}} title="Odjavi se" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
        ) : null}
      </View>
    </Provider>
  );
}
