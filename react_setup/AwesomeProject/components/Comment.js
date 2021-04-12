import React from "react";
import {
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
import { profileStyles } from "../shared/Styles";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { SimpleLineIcons } from "@expo/vector-icons";
  const customFonts = {
    "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
    "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
    "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Bold.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
  };

const gitara = require("./../assets/images/gitara.jpg");

export default class Comment extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={profileStyles.userDetails}>
          <Text style={profileStyles.commentTitle}>
            Casovi iz pythona
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp("0.25%"),
              marginLeft: wp("1%"),
            }}
          >
            <SimpleLineIcons
              name="like"
              style={profileStyles.like}
            />
            <Text style={profileStyles.commentUser}>Fedor96</Text>
            <Text style={profileStyles.commentTime}>
              30 Jul 2020 - 30 Avg 2020
            </Text>
          </View>
          <Text style={profileStyles.commentText}>
            "Bilo je zadovoljstvo raditi sa ovim covekom. Sve
            pohvale"
          </Text>
        </View>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
