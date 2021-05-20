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
import { vipAdStyles } from "./../shared/Styles";
import { LinearGradient } from 'expo-linear-gradient';

const customFonts = {
  "Comfortaa-Bold": require("./../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

const gitara = require("./../assets/images/gitara.jpg");

export default class VipAd extends React.Component {
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
        colors={['#d2bd84', '#fdfcfb', '#d2bd84', '#fdfcfb']}
        style={vipAdStyles.mainContainer}
        start={{ x: 0.15, y: 0.2 }}
        end={{ x: 0.99, y: 1}}
        locations={[0.2, 0.5, 0.72, 1]}
        >
            <TouchableOpacity
            onPress={this.props.onPress}
            >
            <View style={vipAdStyles.adMainContainer}>
              <View>
                <Image style={vipAdStyles.adImage} source={gitara} />
              </View>
              <View style={vipAdStyles.adMainText}>
                <View style={vipAdStyles.adTitleContainer}>
                  <Text numberOfLines={this.props.ad.title.length < 15? 1 : 2} style={vipAdStyles.adTitle}>{this.props.ad.title.toUpperCase()}</Text>
                </View>
                <View
                  style={
                    this.props.ad.title.length < 15
                      ? vipAdStyles.descriptionSmall
                      : vipAdStyles.descriptionLarge
                  }
                >
                  <Text numberOfLines={this.props.ad.title.length < 15 ? 4 : 3} style={vipAdStyles.descriptionText}>
                    {this.props.ad.description.replace(/(<([^>]+)>)/ig, '')}
                  </Text>
                  <TouchableOpacity style={vipAdStyles.descriptionDetails} onPress={this.props.onPress}>
                    <Text style={vipAdStyles.descriptionDetailsText}>
                      Detaljnije
                    </Text>
                    <FontAwesome
                      name="angle-double-down"
                      style={vipAdStyles.detailsArrow}
                    />
                  </TouchableOpacity>
                </View>
                <View style={vipAdStyles.ownerNameContainer}>
                  <Text style={vipAdStyles.ownerName}>
                    Vlasnik: {this.props.ad.user.firstName+" "+this.props.ad.user.lastName} {" "}
                  </Text>
                </View>
              </View>
              <View style={vipAdStyles.adDetails}>
                <LinearGradient
                    colors={['#b8986a', '#362a19']}
                    style={vipAdStyles.priceContainer}
                    locations={[0.01, 1]}>
                        <Text style={vipAdStyles.priceValue}>{this.props.ad.price}</Text>
                    </LinearGradient>
                <View style={vipAdStyles.publishDateContainer}>
                  <Text style={vipAdStyles.publishTitle}>postavljen:</Text>
                  <Text style={vipAdStyles.publishDate}>{this.props.ad.creationDate}</Text>
                </View>
                <View style={vipAdStyles.location}>
                  <Text style={vipAdStyles.locationText}>{this.props.ad.user.location.value}</Text>
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
