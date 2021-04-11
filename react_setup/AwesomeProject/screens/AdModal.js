import React from "react";
import { Text, View, ScrollView, Modal, TouchableOpacity, Image, ActivityIndicator} from "react-native";
import { adsStyles, modalStyles } from "../shared/Styles";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto,SimpleLineIcons,Feather } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BlurView } from 'expo-blur';
import { Dimensions } from "react-native";
import * as Font from "expo-font";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export default class AdModal extends React.Component {
  state = {
    fontsLoaded: false
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
    if(this.state.fontsLoaded){
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
                              <Ionicons name="md-close" size={26} onPress={() => this.props.toggleModal()} style={modalStyles.closeButton} color="black" />
                            </View>
                            <View style={modalStyles.centeredWrap}>
                              <View style={modalStyles.titleContainer}>
                                <View>
                                  <Text style={modalStyles.title}> Casovi nemackog </Text>
                                </View> 
                                <View style={modalStyles.priceContainer}>
                                  <Text style={modalStyles.price}>Dogovor</Text>
                                </View>
                              </View>
                              <View style={modalStyles.basicUserInfo}>
                                <View style={
                                        windowHeight * 0.37 < windowWidth * 0.7
                                          ? modalStyles.profileImageBorderHeight
                                          : modalStyles.profileImageBorderWidth
                                      }>
                                <Image style={
                                        windowHeight * 0.37 < windowWidth * 0.7
                                          ? modalStyles.profileImageHeight
                                          : modalStyles.profileImageWidth
                                      } source={avatar} />
                                </View>
                                <Text style={modalStyles.profileName}>Vladimir Cvetanovic</Text>
                                <View style={modalStyles.userLocation}>
                                  <SimpleLineIcons name="location-pin" size={hp("2.5%")} color="black" />
                                  <Text style={modalStyles.location}>Novi Sad, Srbija</Text>
                                </View>
                                <View style={modalStyles.userMail}>
                                  <Fontisto name="email" size={hp("2.5%")} color="black" />
                                  <Text style={modalStyles.location}>dovla.car@gmail.com</Text>
                                </View>
                                <View style={modalStyles.userOntact}>
                                  <Feather name="phone" size={hp("2.5%")} color="black" />
                                  <Text style={modalStyles.location}>+381 62 266 021</Text>
                                </View>
                                <View style={modalStyles.userRating}>
                                  <TouchableOpacity style={modalStyles.likeComponent}>
                                    <SimpleLineIcons name="like" style={modalStyles.like} />
                                  </TouchableOpacity>
                                  <Text style={modalStyles.ratingText}>6969</Text>
                                  <TouchableOpacity style={modalStyles.dislikeComponent}>
                                    <SimpleLineIcons name="dislike" style={modalStyles.dislike} />
                                  </TouchableOpacity>
                                  <Text style={modalStyles.ratingText}>69</Text>
                                </View>
                                <View style={modalStyles.editButton}>
                                  <Text
                                    style={modalStyles.editButtonText}
                                    onPress={() =>
                                      this.props.navigation.navigate("Profile", {
                                        username: "test"
                                      })
                                    }
                                  >
                                     Pogledaj profil
                                  </Text>
                                </View>          
                              </View>
                              <View style={modalStyles.description}>
                                <Text style={modalStyles.adText}>
                                  Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                                  Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                                  Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                                  Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
                                </Text>
                              </View>
                            </View>
                          </View>
                        </Modal>
                    </View>
          </View>
        </ScrollView>
        </BlurView> 
    );
  }
  else{
    return <ActivityIndicator size="large" />;
  }
}}
	
