import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import * as Font from "expo-font";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const customFonts = {
  "Comfortaa-Bold": require("./../assets/fonts/Comfortaa-Bold.ttf"),
};

const gitara = require("./../assets/images/gitara.jpg");

export default class SmallAd extends React.Component {
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
        <TouchableOpacity
          onPress={this.props.onPress}
          style={smallAdStyles.mainContainer}
        >
          <View style={smallAdStyles.adMainContainer}>
            <View>
              <Image style={smallAdStyles.adImage} source={gitara} />
            </View>
            <View style={smallAdStyles.adMainText}>
              <Text numberOfLines={1} style={smallAdStyles.adTitle}>{this.props.ad.title}</Text>
              <View style={smallAdStyles.descriptionSmall}>
                <Text numberOfLines={3} style={smallAdStyles.descriptionText}>{this.props.ad.description.replace(/(<([^>]+)>)/ig, '')}</Text>
            </View>
            </View>
            <View style={smallAdStyles.adDetails}>
              <View style={smallAdStyles.priceContainer}>
                <Text style={smallAdStyles.priceValue}>{this.props.ad.price}</Text>
              </View>
              <View>
                <View style={smallAdStyles.ratingStars}>
                  <Text style={smallAdStyles.likeText}>6969</Text>
                  <Fontisto name="like" style={smallAdStyles.like} />
                  <Fontisto name="dislike" style={smallAdStyles.dislike} />
                  <Text style={smallAdStyles.dislikeText}>69</Text>
                </View>
              </View>
              <View style={smallAdStyles.publishDateContainer}>
                <Text style={smallAdStyles.publishTitle}>postavljen:</Text>
                <Text style={smallAdStyles.publishDate}>{this.props.ad.creationDate}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}

const smallAdStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#1e1c24",
        height:wp("18.72%"),
        marginHorizontal: wp("1.5%"),
        marginVertical: hp("0.15%"),
        borderRadius: 5,
        borderWidth: wp("0.1%"),
        borderColor: "#9f9f9f"
    },
    adMainContainer: {
      flexDirection: "row",
    },
    adImage: {
      height: wp("16%"),
      width: wp("16%"),
      top: wp("1.36%"),
      left: wp("1.36%"),
      borderWidth: 1,
      borderColor: "#ffffff",
    },
    adMainText: {
      marginTop: wp("1%"),
      marginLeft: wp("2.72%"),
      width: wp("50%"),
    },
    adTitle: {
      textAlign: "left",
      fontSize: wp("3%"),
      lineHeight: wp("4.4%"),
      fontFamily: "Comfortaa-Bold",
      color: "#ededed",
    },
    descriptionSmall: {
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: "#2d2d2d",
        height: wp("12%")
      },
      descriptionText: {
        fontSize: wp("2.25%"),
        marginTop: wp("1%"),
        marginLeft: wp("0.85%"),
        marginRight: wp("0.85%"),
        color: "#ededed",
      },
    leftDashContainer: {
      marginLeft: wp("0.3%"),
      flexDirection: "row",
    },
    line: {
      textAlignVertical: "center",
      fontSize: 5,
      color: "#ededed",
    },
    adDetails: {
      marginTop: wp("1.36%"),
      marginLeft: wp("1%"),
      width: wp("16%"),
    },
    priceContainer: {
      alignSelf: "center",
      marginTop: wp("0.3%"),
      height: wp("4%"),
      width: wp("15%"),
      borderRadius: 5,
      backgroundColor: "#03d5ff",
    },
    priceValue: {
      textAlign: "center",
      marginTop: wp("1%"),
      fontSize: wp("1.75%"),
      color: "#ededed",
    },
    publishDateContainer: {
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginTop: wp("1%"),
      width: wp("16.4%"),
    },
    publishTitle: {
      fontSize: wp("2%"),
      color: "#ededed",
    },
    publishDate: {
      fontSize: wp("2%"),
      color: "#ededed",
    },
    locationText: {
      fontSize: wp("2.25%"),
      color: "#ededed",
    },
    ratingStars: {
      flexDirection: "row",
      justifyContent: "center",
      width: wp("15%"),
      marginTop: wp("3%"),
    },
    likeText: {
      marginLeft:wp("1%"),
      fontSize: wp("2%"),
      color: "#ededed",
    },
    like: {
      marginLeft: wp("1.36%"),
      fontSize: wp("2%"),
      color: "#ededed",
    },
    dislike: {
      marginLeft: wp("1.36%"),
      fontSize: wp("2%"),
      color: "#ededed",
    },
    dislikeText: {
      marginLeft: wp("1.36%"),
      fontSize: wp("2%"),
      color: "#ededed",
    },
  });
