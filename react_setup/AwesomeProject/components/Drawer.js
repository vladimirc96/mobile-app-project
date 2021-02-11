import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";

export default function Drawer(props) {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <DrawerItems
          {...props}
          onItemPress={() => props.navigation.navigate("Categories")}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
