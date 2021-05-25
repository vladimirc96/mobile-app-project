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
import { adsStyles } from "../shared/adsStyles";
import { modalStyles } from "../shared/modalStyles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto, SimpleLineIcons, Feather } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BlurView } from "expo-blur";
import { Dimensions } from "react-native";
import * as Font from "expo-font";
import HTMLView from "react-native-htmlview";
import { connect } from "react-redux";
import { isEqual } from "lodash";
import { showPopup, confirmButton, rejectButton } from "../shared/AlertPopup";
import { DELETE_MESSAGE } from "../constants/Messages";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export class AdModalProfile extends React.Component {
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

  handleConfirm = () => {
    this.props.handleDelete(this.props.ad.id);
  };

  delete = () => {
    const buttons = [confirmButton(this.handleConfirm), rejectButton()];
    showPopup("", DELETE_MESSAGE, buttons);
  };

  render() {
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
                      <Ionicons
                        name="md-close"
                        size={26}
                        onPress={() => this.props.toggleModal()}
                        style={modalStyles.closeButton}
                        color="#ededed"
                      />
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
                        <View style={modalStyles.closeButtonContainer}>
                          <View></View>
                          {isEqual(this.props.user.id, this.props.userId) ? (
                            <MaterialCommunityIcons
                              name="delete"
                              style={modalStyles.closeButton}
                              size={26}
                              onPress={this.delete}
                              color="white"
                            />
                          ) : null}
                        </View>
                        <View
                          style={
                            windowHeight * 0.37 < windowWidth * 0.7
                              ? modalStyles.profileImageBorderHeight
                              : modalStyles.profileImageBorderWidth
                          }
                        >
                          {this.props.ad.imageBytes ? (
                            <Image
                              style={
                                windowHeight * 0.37 < windowWidth * 0.7
                                  ? modalStyles.profileImageHeight
                                  : modalStyles.profileImageWidth
                              }
                              source={{
                                uri:
                                  "data:image/jpeg;base64," +
                                  this.props.ad.imageBytes,
                              }}
                            />
                          ) : (
                            <Image
                              style={
                                windowHeight * 0.37 < windowWidth * 0.7
                                  ? modalStyles.profileImageHeight
                                  : modalStyles.profileImageWidth
                              }
                              source={{
                                uri: null,
                              }}
                            />
                          )}
                        </View>
                        <Text style={modalStyles.profileName}>
                          {this.props.user.firstName +
                            " " +
                            this.props.user.lastName}
                        </Text>
                        <View style={modalStyles.userLocation}>
                          <SimpleLineIcons
                            name="location-pin"
                            size={hp("2.5%")}
                            color="#ededed"
                          />
                          <Text style={modalStyles.location}>
                            {this.props.user.location.value}
                          </Text>
                        </View>
                        <View style={modalStyles.userMail}>
                          <Fontisto
                            name="email"
                            size={hp("2.5%")}
                            color="#ededed"
                          />
                          <Text style={modalStyles.location}>
                            {this.props.user.email}
                          </Text>
                        </View>
                        <View style={modalStyles.userOntact}>
                          <Feather
                            name="phone"
                            size={hp("2.5%")}
                            color="#ededed"
                          />
                          <Text style={modalStyles.location}>
                            {this.props.user.phoneNumber}
                          </Text>
                        </View>
                        {isEqual(this.props.user.id, this.props.userId) ? (
                          <TouchableOpacity
                            onPress={() => {
                              this.props.navigation.navigate("AdCreation", {
                                ad: this.props.ad,
                              });
                              this.props.toggleModal();
                            }}
                          >
                            <View style={modalStyles.editButton}>
                              <Text style={modalStyles.editButtonText}>
                                Izmeni oglas
                              </Text>
                            </View>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPress={() => this.props.toggleModal()}
                          >
                            <View style={modalStyles.editButton}>
                              <Text style={modalStyles.editButtonText}>
                                Pogledaj profil
                              </Text>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                      <View
                        style={[
                          modalStyles.description,
                          isEqual(this.props.user.id, this.props.userId)
                            ? { minHeight: hp("34%") }
                            : null,
                        ]}
                      >
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
    userId:
      state.userReducer.user && state.userReducer.user.id
        ? state.userReducer.user.id
        : null,
  };
};
export default connect(mapStateToProps)(AdModalProfile);
