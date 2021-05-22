import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { adStyles } from "./../shared/Styles";

const customFonts = {
  "Comfortaa-Bold": require("./../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

const gitara = require("./../assets/images/gitara.jpg");

export default class Ad extends React.Component {
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
          style={adStyles.mainContainer}
        >
          <View style={adStyles.adMainContainer}>
            <View>
              {this.props.ad.image ? (
                <Image style={adStyles.adImage} source={{ uri: this.props.ad.image }} />
              ) : (
                <Image style={adStyles.adImage} source={{ uri: null }} />
              )}
            </View>
            <View style={adStyles.adMainText}>
              <View style={adStyles.adTitleContainer}>
                <Text
                  numberOfLines={this.props.ad.title.length < 15 ? 1 : 2}
                  style={adStyles.adTitle}
                >
                  {this.props.ad.title.toUpperCase()}
                </Text>
              </View>
              <View
                style={
                  this.props.ad.title.length < 15
                    ? adStyles.descriptionSmall
                    : adStyles.descriptionLarge
                }
              >
                <Text
                  numberOfLines={this.props.ad.title.length < 15 ? 4 : 3}
                  style={adStyles.descriptionText}
                >
                  {this.props.ad.description.replace(/(<([^>]+)>)/gi, "")}
                </Text>
                <TouchableOpacity
                  style={adStyles.descriptionDetails}
                  onPress={this.props.onPress}
                >
                  <Text style={adStyles.descriptionDetailsText}>
                    Detaljnije
                  </Text>
                  <FontAwesome
                    name="angle-double-down"
                    style={adStyles.detailsArrow}
                  />
                </TouchableOpacity>
              </View>
              <View style={adStyles.ownerNameContainer}>
                <Text style={adStyles.ownerName}>
                  Vlasnik:{" "}
                  {this.props.ad.user.firstName +
                    " " +
                    this.props.ad.user.lastName}{" "}
                </Text>
              </View>
            </View>
            <View style={adStyles.adDetails}>
              <View style={adStyles.priceContainer}>
                <Text style={adStyles.priceValue}>{this.props.ad.price}</Text>
              </View>
              <View style={adStyles.publishDateContainer}>
                <Text style={adStyles.publishTitle}>postavljen:</Text>
                <Text style={adStyles.publishDate}>
                  {this.props.ad.creationDate}
                </Text>
              </View>
              <View style={adStyles.location}>
                <Text style={adStyles.locationText}>
                  {this.props.ad.user.location.value}
                </Text>
              </View>
              <View>
                <View style={adStyles.ratingStars}>
                  <Text style={adStyles.likeText}>{this.props.ad.user.positiveRatings}</Text>
                  <Fontisto name="like" style={adStyles.like} />
                  <Fontisto name="dislike" style={adStyles.dislike} />
                  <Text style={adStyles.dislikeText}>{this.props.ad.user.negativeRatings}</Text>
                </View>
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
