import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { headerStyles } from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Divider, Provider, Avatar } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { logout } from "../store/actions/authentication/authenticationActions";

export default function Header({ title, navigation, mainScreen }) {
  const inLineLogo = require("../assets/images/in_line_logo_fixed.png");

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const dispatch = useDispatch();

  const logoutUser = () => dispatch(logout());

  const avatar = require("./../assets/images/avatar.png");

  const token = useSelector((state) => state.authenticationReducer.token);

  const user = useSelector((state) => state.userReducer.user);

  return (
      <View style={headerStyles.header}>
        {mainScreen && (
          <MaterialIcons
            name="menu"
            onPress={openDrawer}
            style={headerStyles.icon}
          />
        )}
          <Image
            style={
              mainScreen ? headerStyles.headerLogoMain : headerStyles.headerLogo
            }
            source={inLineLogo}
          /> 
          {token ? (
            <View
              style={{
                height: hp("7%"),
                width: hp("7%"),
                position: "absolute",
                right: Platform.OS === "ios" ? -wp("10%") : wp("2%"),
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
                    <Avatar.Image size={35} source={avatar} />
                  </TouchableOpacity>
                }
              >
              <Menu.Item
                onPress={() => {
                  navigation.navigate("Profile", { username: user.username });
                  setVisible(false);
                }}
                title="Profil"
              />
              <Menu.Item
                onPress={() => {
                  logoutUser();
                }}
                title="Odjavi se"
              />
            </Menu>
          </View>
        ) : null}
      </View>
  );
}
