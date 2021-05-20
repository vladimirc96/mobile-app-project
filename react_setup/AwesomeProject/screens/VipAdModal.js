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
import { adsStyles, vipModalStyles } from "../shared/Styles";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BlurView } from "expo-blur";
import { Dimensions } from "react-native";
import * as Font from "expo-font";
import HTMLView from "react-native-htmlview";
import { connect } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';

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
        <BlurView intensity={100} tint={"dark"} style={vipModalStyles.blurView}>
          <ScrollView>
            <View style={adsStyles.mainContainer}>
              <View style={vipModalStyles.modalWrap}>
                <Modal
                  transparent={true}
                  visible={this.state.showModal}
                  style={vipModalStyles.modal}
                >
                    <LinearGradient
                    colors={['#d2bd84', '#fdfcfb', '#d2bd84', '#fdfcfb']}
                    style={vipModalStyles.modalInnerWrap}
                    start={{ x: 0.15, y: 0.2 }}
                    end={{ x: 0.99, y: 1}}
                    locations={[0.2, 0.5, 0.72, 1]}
                    >
                  <View>
                    <View style={vipModalStyles.closeButtonContainer}>
                      <View></View>
                      <TouchableOpacity
                        onPress={() => this.props.toggleModal()}
                      >
                        <Ionicons
                          name="md-close"
                          size={26}
                          style={vipModalStyles.closeButton}
                          color="#ededed"
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={vipModalStyles.centeredWrap}>
                      <View style={vipModalStyles.titleContainer}>
                        <View>
                          <Text style={vipModalStyles.title}>
                            {this.props.ad.title}
                          </Text>
                        </View>
                        <LinearGradient
                        colors={['#b8986a', '#362a19']}
                        style={vipModalStyles.priceContainer}
                        locations={[0.01, 1]}>
                        <View>
                          <Text style={vipModalStyles.price}>
                            {this.props.ad.price}
                          </Text>
                        </View>
                        </LinearGradient>
                      </View>
                      <View style={vipModalStyles.basicUserInfo}>
                        <View
                          style={
                            windowHeight * 0.37 < windowWidth * 0.7
                              ? vipModalStyles.profileImageBorderHeight
                              : vipModalStyles.profileImageBorderWidth
                          }
                        >
                          {this.props.ad.image ? (
                            <Image
                              style={
                                windowHeight * 0.37 < windowWidth * 0.7
                                  ? vipModalStyles.profileImageHeight
                                  : vipModalStyles.profileImageWidth
                              }
                              source={{ uri: this.props.ad.image }}
                            />
                          ) : (
                            <Image
                              style={
                                windowHeight * 0.37 < windowWidth * 0.7
                                  ? vipModalStyles.profileImageHeight
                                  : vipModalStyles.profileImageWidth
                              }
                              source={avatar}
                            />
                          )}
                        </View>
                        <Text style={vipModalStyles.profileName}>
                          {this.props.ad.user.firstName +
                            " " +
                            this.props.ad.user.lastName}
                        </Text>
                        <View style={vipModalStyles.userLocation}>
                          <SimpleLineIcons
                            name="location-pin"
                            size={hp("2.5%")}
                            color="#000"
                          />
                          <Text style={vipModalStyles.location}>
                            {this.props.ad.user.location.value}
                          </Text>
                        </View>
                        <View style={vipModalStyles.userMail}>
                          <Fontisto
                            name="email"
                            size={hp("2.5%")}
                            color="#000"
                          />
                          <Text style={vipModalStyles.location}>
                            {this.props.ad.user.email}
                          </Text>
                        </View>
                        <View style={vipModalStyles.userOntact}>
                          <Feather
                            name="phone"
                            size={hp("2.5%")}
                            color="#000"
                          />
                          <Text style={vipModalStyles.location}>
                            {this.props.ad.user.phoneNumber}
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                              this.props.navigation.navigate("Profile", {
                                username: this.props.ad.user.username,
                                toggleModal: this.props.toggleModal,
                              });
                            }
                          }
                        >
                          <View style={vipModalStyles.editButton}>
                            <Text style={vipModalStyles.editButtonText}>
                                Pogledaj profil
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={vipModalStyles.description}>
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
