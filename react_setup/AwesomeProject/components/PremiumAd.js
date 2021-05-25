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
import { premiumAdStyles } from "./../shared/adsStyles";
import { LinearGradient } from "expo-linear-gradient";

const customFonts = {
  "Comfortaa-Bold": require("./../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

const gitara = require("./../assets/images/gitara.jpg");

export default class PremiumAd extends React.Component {
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
        <LinearGradient
          colors={["#b9bdd1", "#f5f7fa", "#b9bdd1", "#f5f7fa"]}
          style={premiumAdStyles.mainContainer}
          start={{ x: 0.15, y: 0.2 }}
          end={{ x: 0.99, y: 1 }}
          locations={[0.2, 0.5, 0.7, 1]}
        >
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={premiumAdStyles.adMainContainer}>
              <View>
                <Image style={premiumAdStyles.adImage} source={gitara} />
              </View>
              <View style={premiumAdStyles.adMainText}>
                <View style={premiumAdStyles.adTitleContainer}>
                  <Text
                    numberOfLines={this.props.ad.title.length < 15 ? 1 : 2}
                    style={premiumAdStyles.adTitle}
                  >
                    {this.props.ad.title.toUpperCase()}
                  </Text>
                </View>
                <View
                  style={
                    this.props.ad.title.length < 15
                      ? premiumAdStyles.descriptionSmall
                      : premiumAdStyles.descriptionLarge
                  }
                >
                  <Text
                    numberOfLines={this.props.ad.title.length < 15 ? 4 : 3}
                    style={premiumAdStyles.descriptionText}
                  >
                    {this.props.ad.description.replace(/(<([^>]+)>)/gi, "")}
                  </Text>
                  <TouchableOpacity
                    style={premiumAdStyles.descriptionDetails}
                    onPress={this.props.onPress}
                  >
                    <Text style={premiumAdStyles.descriptionDetailsText}>
                      Detaljnije
                    </Text>
                    <FontAwesome
                      name="angle-double-down"
                      style={premiumAdStyles.detailsArrow}
                    />
                  </TouchableOpacity>
                </View>
                <View style={premiumAdStyles.ownerNameContainer}>
                  <Text style={premiumAdStyles.ownerName}>
                    Vlasnik:{" "}
                    {this.props.ad.user.firstName +
                      " " +
                      this.props.ad.user.lastName}{" "}
                  </Text>
                </View>
              </View>
              <View style={premiumAdStyles.adDetails}>
                <LinearGradient
                  colors={["#a4adc2", "#495370"]}
                  style={premiumAdStyles.priceContainer}
                  locations={[0.01, 1]}
                >
                  <Text style={premiumAdStyles.priceValue}>
                    {this.props.ad.price}
                  </Text>
                </LinearGradient>
                <View style={premiumAdStyles.publishDateContainer}>
                  <Text style={premiumAdStyles.publishTitle}>postavljen:</Text>
                  <Text style={premiumAdStyles.publishDate}>
                    {this.props.ad.creationDate}
                  </Text>
                </View>
                <View style={premiumAdStyles.location}>
                  <Text style={premiumAdStyles.locationText}>
                    {this.props.ad.user.location.value}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
