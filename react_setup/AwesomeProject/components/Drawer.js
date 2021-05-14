import SafeAreaView from "react-native-safe-area-view";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import DrawerItem from "./DrawerItem";
import { MaterialIcons } from "@expo/vector-icons";
import { logout } from "../store/actions/authentication/authenticationActions";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { cloneDeep } from "lodash";
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
    if (!this.props.token) {
      items.push({
        navigate: (navigation) => navigation.navigate("ContactUs"),
        routeName: "ContactUs",
        drawerIcon: () => {
          return this.props.descriptors["ContactUs"].options.drawerIcon();
        },
      });
    }
    this.setState({ drawerItems: items });
  }

  render() {
    if (this.state.drawerItems.length === 0) {
      return <View></View>;
    }
    const drawerItems = cloneDeep(this.state.drawerItems);
    if (!this.props.token) {
      drawerItems.splice(0, 1);
    }
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={styles.drawerItemList}>
          <FlatList
            data={drawerItems}
            renderItem={({ item }) => {
              return (
                <DrawerItem
                  key={item.routeName}
                  routeName={item.routeName}
                  drawerIcon={item.drawerIcon}
                  navigate={item.navigate}
                  navigation={this.props.navigation}
                />
              );
            }}
            keyExtractor={(item) => item.routeName}
          ></FlatList>
        </View>

        {this.props.token ? (
          <TouchableOpacity
            style={styles.logoutContainer}
            onPress={() => {
              this.props.logoutUser();
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="logout" size={24} color="white" />
              <Text style={styles.menuText}>Odjavi se</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.logoutContainer}
            onPress={() => {
              this.props.navigation.navigate("LogIn");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialIcons name="login" size={24} color="white" />
              <Text style={styles.menuText}>Prijavi se</Text>
            </View>
          </TouchableOpacity>
        )}
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
    marginTop: hp("2%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  menuText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginLeft: 20,
  },
  drawerItemList: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
});
