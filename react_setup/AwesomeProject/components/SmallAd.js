import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
import { smallAdStyles } from "./../shared/Styles";

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
              {this.props.ad.image ? (
                <Image
                  style={smallAdStyles.adImage}
                  source={{ uri: this.props.ad.image }}
                />
              ) : (
                <Image style={smallAdStyles.adImage} source={{ uri: null }} />
              )}
            </View>
            <View style={smallAdStyles.adMainText}>
              <Text numberOfLines={1} style={smallAdStyles.adTitle}>
                {this.props.ad.title}
              </Text>
              <View style={smallAdStyles.descriptionSmall}>
                <Text numberOfLines={3} style={smallAdStyles.descriptionText}>
                  {this.props.ad.description.replace(/(<([^>]+)>)/gi, "")}
                </Text>
              </View>
            </View>
            <View style={smallAdStyles.adDetails}>
              <View style={smallAdStyles.priceContainer}>
                <Text style={smallAdStyles.priceValue}>
                  {this.props.ad.price}
                </Text>
              </View>
              <View style={smallAdStyles.publishDateContainer}>
                <Text style={smallAdStyles.publishTitle}>postavljen:</Text>
                <Text style={smallAdStyles.publishDate}>
                  {this.props.ad.creationDate}
                </Text>
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
