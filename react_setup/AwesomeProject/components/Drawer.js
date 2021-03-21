import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { logout } from "../services/AuthService";
import LocalStorage from "../localStorage";

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
      <DrawerItems
        {...props}
        onItemPress={({ route, focused }) => {
          props.navigation.navigate(route.key);
        }}
      />
      {token ? (
        <TouchableOpacity onPress={handleLogout}>
          <Text>Odjava</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
