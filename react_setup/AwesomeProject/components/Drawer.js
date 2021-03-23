import SafeAreaView from "react-native-safe-area-view";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";
import DrawerItem from "./DrawerItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authentication/authentication";

export default function Drawer(props) {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authenticationReducer.token);

  const logoutUser = () => dispatch(logout());

  const [drawerItems, setDrawerItems] = useState([]);

  const initItems = () => {
    const items = [
      {
        navigate: (navigation) =>
          navigation.navigate("Profile", { username: user.username }),
        routeName: "Profile",
        drawerIcon: () => {
          return props.descriptors["Profile"].options.drawerIcon();
        },
      },
      {
        navigate: (navigation) => navigation.navigate("Categories"),
        routeName: "Categories",
        drawerIcon: () => {
          return props.descriptors["Categories"].options.drawerIcon();
        },
      },
      {
        navigate: (navigation) => navigation.navigate("AboutUs"),
        routeName: "AboutUs",
        drawerIcon: () => {
          return props.descriptors["AboutUs"].options.drawerIcon();
        },
      },
    ];
    setDrawerItems(items);
  };

  useEffect(() => {
    console.log(user);
    initItems();
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      {drawerItems.map((item) => {
        if (!token && item.key === "Profile") {
          return;
        }
        return (
          <DrawerItem
            key={item.routeName}
            routeName={item.routeName}
            drawerIcon={item.drawerIcon}
            navigate={item.navigate}
            navigation={props.navigation}
          />
        );
      })}

      <View style={{ marginTop: "5%" }}>
        <Divider style={{ backgroundColor: "white" }} />
      </View>

      {token ? (
        <TouchableOpacity
          style={{ marginTop: 10, marginLeft: 10 }}
          onPress={() => {
            logoutUser();
          }}
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
