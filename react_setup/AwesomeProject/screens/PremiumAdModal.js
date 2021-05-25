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
import { premiumModalStyles } from "../shared/modalStyles";
import { adsStyles } from "../shared/adsStyles";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BlurView } from "expo-blur";
import { Dimensions } from "react-native";
import * as Font from "expo-font";
import HTMLView from "react-native-htmlview";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

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
        <BlurView
          intensity={100}
          tint={"dark"}
          style={premiumModalStyles.blurView}
        >
          <ScrollView>
            <View style={adsStyles.mainContainer}>
              <View style={premiumModalStyles.modalWrap}>
                <Modal
                  transparent={true}
                  visible={this.state.showModal}
                  style={premiumModalStyles.modal}
                >
                  <LinearGradient
                    colors={["#b9bdd1", "#f5f7fa", "#b9bdd1", "#f5f7fa"]}
                    style={premiumModalStyles.modalInnerWrap}
                    start={{ x: 0.15, y: 0.2 }}
                    end={{ x: 0.99, y: 1 }}
                    locations={[0.2, 0.5, 0.7, 1]}
                  >
                    <View>
                      <View style={premiumModalStyles.closeButtonContainer}>
                        <View></View>
                        <TouchableOpacity
                          onPress={() => this.props.toggleModal()}
                        >
                          <Ionicons
                            name="md-close"
                            size={26}
                            style={premiumModalStyles.closeButton}
                            color="#ededed"
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={premiumModalStyles.centeredWrap}>
                        <View style={premiumModalStyles.titleContainer}>
                          <View>
                            <Text style={premiumModalStyles.title}>
                              {this.props.ad.title}
                            </Text>
                          </View>
                          <LinearGradient
                            colors={["#a4adc2", "#495370"]}
                            style={premiumModalStyles.priceContainer}
                            locations={[0.01, 1]}
                          >
                            <View>
                              <Text style={premiumModalStyles.price}>
                                {this.props.ad.price}
                              </Text>
                            </View>
                          </LinearGradient>
                        </View>
                        <View style={premiumModalStyles.basicUserInfo}>
                          <View
                            style={
                              windowHeight * 0.37 < windowWidth * 0.7
                                ? premiumModalStyles.profileImageBorderHeight
                                : premiumModalStyles.profileImageBorderWidth
                            }
                          >
                            {this.props.ad.image ? (
                              <Image
                                style={
                                  windowHeight * 0.37 < windowWidth * 0.7
                                    ? premiumModalStyles.profileImageHeight
                                    : premiumModalStyles.profileImageWidth
                                }
                                source={{ uri: this.props.ad.image }}
                              />
                            ) : (
                              <Image
                                style={
                                  windowHeight * 0.37 < windowWidth * 0.7
                                    ? premiumModalStyles.profileImageHeight
                                    : premiumModalStyles.profileImageWidth
                                }
                                source={avatar}
                              />
                            )}
                          </View>
                          <Text style={premiumModalStyles.profileName}>
                            {this.props.ad.user.firstName +
                              " " +
                              this.props.ad.user.lastName}
                          </Text>
                          <View style={premiumModalStyles.userLocation}>
                            <SimpleLineIcons
                              name="location-pin"
                              size={hp("2.5%")}
                              color="#000000"
                            />
                            <Text style={premiumModalStyles.location}>
                              {this.props.ad.user.location.value}
                            </Text>
                          </View>
                          <View style={premiumModalStyles.userMail}>
                            <Fontisto
                              name="email"
                              size={hp("2.5%")}
                              color="#000000"
                            />
                            <Text style={premiumModalStyles.location}>
                              {this.props.ad.user.email}
                            </Text>
                          </View>
                          <View style={premiumModalStyles.userOntact}>
                            <Feather
                              name="phone"
                              size={hp("2.5%")}
                              color="#000000"
                            />
                            <Text style={premiumModalStyles.location}>
                              {this.props.ad.user.phoneNumber}
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => {
                              if (this.props.token) {
                                this.props.navigation.navigate("AdCreation", {
                                  ad: this.props.ad,
                                });
                              } else {
                                this.props.navigation.navigate("Profile", {
                                  username: this.props.ad.user.username,
                                  toggleModal: this.props.toggleModal,
                                });
                              }
                            }}
                          >
                            <View style={premiumModalStyles.editButton}>
                              <Text style={premiumModalStyles.editButtonText}>
                                {this.props.token
                                  ? "Izmeni profil"
                                  : "Pogledaj profil"}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View style={premiumModalStyles.description}>
                          <HTMLView
                            value={this.props.ad.description}
                            stylesheet={{
                              div: {
                                color: "#000000",
                                paddingHorizontal: 5,
                              },
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
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
