import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { logout } from "../services/AuthService";
import LocalStorage from "../localStorage";
import { Divider } from "react-native-elements";
import DrawerItem from "./DrawerItem";
import { MaterialIcons } from "@expo/vector-icons";

export default function Drawer(props) {
  const handleLogout = async () => {
    try {
      await logout();
      await LocalStorage.removeItem("currentUser");
      alert("Odjavljeni ste");
    } catch (err) {
      console.log(err.message);
    }
  };

  const getToken = async () => {
    const data = await LocalStorage.getItem("currentUser");
    setToken(data);
  };

  const [token, setToken] = useState({});

  useEffect(() => {
    getToken();
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      {props.items.map((item) => {
        if (!token && item.key === "Profile") {
          return;
        }
        return (
          <DrawerItem
            key={item.key}
            routeName={item.routeName}
            drawerIcon={props.descriptors[item.key].options.drawerIcon()}
            navigation={props.navigation}
          />
        );
      })}

      <View style={{ marginTop: "5%" }}>
        <Divider style={{ backgroundColor: "white" }} />
      </View>
      {/* <DrawerItems
        {...props}
        onItemPress={({ route, focused }) => {
          props.navigation.navigate(route.key);
        }}
        labelStyle={styles.label}
      /> */}
      {token ? (
        <TouchableOpacity
          style={{ marginTop: 10, marginLeft: 10 }}
          onPress={handleLogout}
        >
          <View style={styles.logoutContainer}>
            <MaterialIcons name="logout" size={24} color="white" />
            <Text style={styles.menuText}>Odjavi se</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1c24",
  },
  logoutContainer: {
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
