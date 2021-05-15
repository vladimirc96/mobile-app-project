import React from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { adsStyles, modalStyles } from "../shared/Styles";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BlurView } from "expo-blur";
import { Dimensions } from "react-native";
import * as Font from "expo-font";
import HTMLView from "react-native-htmlview";
import { connect } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export class AdModal extends React.Component {
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
    const avatar = require("./../assets/images/gitara.jpg");
    if (this.state.fontsLoaded) {
      return (
        <BlurView intensity={100} tint={"dark"} style={modalStyles.blurView}>
          <ScrollView>
            <View style={adsStyles.mainContainer}>
              <View style={modalStyles.modalWrap}>
                <Modal
                  transparent={true}
                  visible={this.state.showModal}
                  style={modalStyles.modal}
                >
                  <View style={modalStyles.modalInnerWrap}>
                    <View style={modalStyles.closeButtonContainer}>
                      <View></View>
                      <TouchableOpacity
                        onPress={() => this.props.toggleModal()}
                      >
                        <Ionicons
                          name="md-close"
                          size={26}
                          style={modalStyles.closeButton}
                          color="#ededed"
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={modalStyles.centeredWrap}>
                      <View style={modalStyles.titleContainer}>
                        <View>
                          <Text style={modalStyles.title}>
                            {this.props.ad.title}
                          </Text>
                        </View>
                        <View style={modalStyles.priceContainer}>
                          <Text style={modalStyles.price}>
                            {this.props.ad.price}
                          </Text>
                        </View>
                      </View>
                      <View style={modalStyles.basicUserInfo}>
                        <View
                          style={
                            windowHeight * 0.37 < windowWidth * 0.7
                              ? modalStyles.profileImageBorderHeight
                              : modalStyles.profileImageBorderWidth
                          }
                        >
                          {this.props.ad.image ? (
                            <Image
                              style={
                                windowHeight * 0.37 < windowWidth * 0.7
                                  ? modalStyles.profileImageHeight
                                  : modalStyles.profileImageWidth
                              }
                              source={{ uri: this.props.ad.image }}
                            />
                          ) : (
                            <Image
                              style={
                                windowHeight * 0.37 < windowWidth * 0.7
                                  ? modalStyles.profileImageHeight
                                  : modalStyles.profileImageWidth
                              }
                              source={avatar}
                            />
                          )}
                        </View>
                        <Text style={modalStyles.profileName}>
                          {this.props.ad.user.firstName +
                            " " +
                            this.props.ad.user.lastName}
                        </Text>
                        <View style={modalStyles.userLocation}>
                          <SimpleLineIcons
                            name="location-pin"
                            size={hp("2.5%")}
                            color="#ededed"
                          />
                          <Text style={modalStyles.location}>
                            {this.props.ad.user.location.value}
                          </Text>
                        </View>
                        <View style={modalStyles.userMail}>
                          <Fontisto
                            name="email"
                            size={hp("2.5%")}
                            color="#ededed"
                          />
                          <Text style={modalStyles.location}>
                            {this.props.ad.user.email}
                          </Text>
                        </View>
                        <View style={modalStyles.userOntact}>
                          <Feather
                            name="phone"
                            size={hp("2.5%")}
                            color="#ededed"
                          />
                          <Text style={modalStyles.location}>
                            {this.props.ad.user.phoneNumber}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate("Profile", {
                              username: this.props.ad.user.username,
                              toggleModal: this.props.toggleModal,
                            });
                          }}
                        >
                          <View style={modalStyles.editButton}>
                            <Text style={modalStyles.editButtonText}>
                              Pogledaj profil
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={modalStyles.description}>
                        <HTMLView
                          value={this.props.ad.description}
                          stylesheet={{
                            div: {
                              color: "#ededed",
                              paddingHorizontal: 5,
                            },
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </ScrollView>
        </BlurView>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authenticationReducer.token,
  };
};

export default connect(mapStateToProps)(AdModal);
