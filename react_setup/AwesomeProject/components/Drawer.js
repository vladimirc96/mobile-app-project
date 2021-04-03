import SafeAreaView from "react-native-safe-area-view";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";
import DrawerItem from "./DrawerItem";
import { MaterialIcons } from "@expo/vector-icons";
import { logout } from "../store/actions/authentication/authenticationActions";
import { connect } from "react-redux";

export class Drawer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerItems: [],
    };
  }

  componentDidMount() {
    const items = [
      {
        navigate: (navigation) =>
          navigation.navigate("Profile", {
            username: this.props.user.username,
          }),
        routeName: "Profile",
        drawerIcon: () => {
          return this.props.descriptors["Profile"].options.drawerIcon();
        },
      },
      {
        navigate: (navigation) => navigation.navigate("Categories"),
        routeName: "Categories",
        drawerIcon: () => {
          return this.props.descriptors["Categories"].options.drawerIcon();
        },
      },
      {
        navigate: (navigation) => navigation.navigate("AboutUs"),
        routeName: "AboutUs",
        drawerIcon: () => {
          return this.props.descriptors["AboutUs"].options.drawerIcon();
        },
      },
    ];
    this.setState({ drawerItems: items });
  }

  render() {
    if (this.state.drawerItems.length === 0) {
      return <View></View>;
    }
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        {this.state.drawerItems.map((item) => {
          if (!this.props.token && item.routeName === "Profile") {
            return;
          }
          return (
            <DrawerItem
              key={item.routeName}
              routeName={item.routeName}
              drawerIcon={item.drawerIcon}
              navigate={item.navigate}
              navigation={this.props.navigation}
            />
          );
        })}

        <View style={{ marginTop: "5%" }}>
          <Divider style={{ backgroundColor: "white" }} />
        </View>

        {this.props.token ? (
          <TouchableOpacity
            style={{ marginTop: 10, marginLeft: 10 }}
            onPress={() => {
              this.props.logoutUser();
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
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    token: state.authenticationReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);

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
