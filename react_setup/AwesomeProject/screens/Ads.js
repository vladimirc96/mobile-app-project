import React from "react";
import { ImageBackground, Text, View, ScrollView, Modal, TouchableOpacity, Image, StyleSheet, ActivityIndicator} from "react-native";
import Ad from "../components/Ad";
import { adsStyles } from "../shared/Styles";
import { Ionicons } from '@expo/vector-icons';
import {
  Octicons,
  Fontisto,
  FontAwesome,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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

export default class Ads extends React.Component {
  state = {
    fontsLoaded: false,
	showModal: false
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    const avatar = require("./../assets/images/gitara.jpg");
    if(this.state.fontsLoaded){
    return (
      <ImageBackground
        style={adsStyles.backgroundImageContainer}
        source={backgroundImage}
      >
      {this.state.showModal ?
        <BlurView intensity={100} tint={"dark"} style={{width:wp("100%"), height:hp("100%")}}>
        <ScrollView>
          <View style={adsStyles.mainContainer}>
                    <View style={{alignSelf: "center", marginTop: hp("1%")}}>
                      <Modal
                        transparent={true}
                        visible={this.state.showModal}
                        style={{borderWidth:0,borderColor:"none"}}
                        >
                          <View style={{backgroundColor:"#ededed", width:wp("90%"), height: hp("85%"), borderRadius: 5}}>
                            <View style={{ flexDirection: "row",justifyContent:"space-between"}}>
                              <View></View>
                              <Ionicons name="md-close" size={26} onPress={() => this.setState({showModal: false})} style={{marginTop:hp("0.5%"), marginRight:hp("0.5%")}} color="black" />
                            </View>
                            <View style={{alignSelf:"center"}}>

                              <View style={{borderColor:"#d6d6d6", backgroundColor: "white", borderWidth: 1, borderRadius: 10, width: wp("86%"), height: hp("5%"), marginLeft: wp("2.5%"), marginRight: wp("2.5%"), textAlign:"center", flexDirection: "row", flex:1, justifyContent: "space-between"}}>
                                <View>
                                  <Text style={{fontSize: hp("2.5%"), color: "black",fontFamily: "Roboto-Bold", marginTop: hp("0.8%")}}> Casovi nemackog </Text>
                                </View> 
                                <View style={{height: hp("3%"), width: wp("20%"), backgroundColor: "black", marginTop: hp("0.8%"), marginRight: wp("1.5%"), borderRadius: 5}}>
                                  <Text style={{marginTop: hp("0.5%"), color:"white", fontSize: hp("1.75%"), fontFamily: "Roboto-Bold", textAlign: "center"}}>Dogovor</Text>
                                </View>
                              </View>


                              <View style={styles.basicUserInfo}>
                                <View style={
                                        windowHeight * 0.37 < windowWidth * 0.7
                                          ? styles.profileImageBorderHeight
                                          : styles.profileImageBorderWidth
                                      }>
                                <Image style={
                                        windowHeight * 0.37 < windowWidth * 0.7
                                          ? styles.profileImageHeight
                                          : styles.profileImageWidth
                                      } source={avatar} />
                                </View>
                                <Text style={styles.profileName}>Vladimir Cvetanovic</Text>
                                <View style={styles.userLocation}>
                                  <SimpleLineIcons name="location-pin" size={hp("2.5%")} color="black" />
                                  <Text style={styles.location}>Novi Sad, Srbija</Text>
                                </View>
                                <View style={styles.userMail}>
                                  <Fontisto name="email" size={hp("2.5%")} color="black" />
                                  <Text style={styles.location}>dovla.car@gmail.com</Text>
                                </View>
                                <View style={styles.userOntact}>
                                  <Feather name="phone" size={hp("2.5%")} color="black" />
                                  <Text style={styles.location}>+381 62 266 021</Text>
                                </View>
                                <View style={styles.userRating}>
                                  <TouchableOpacity style={styles.likeComponent}>
                                    <SimpleLineIcons name="like" style={styles.like} />
                                  </TouchableOpacity>
                                  <Text style={styles.ratingText}>6969</Text>
                                  <TouchableOpacity style={styles.dislikeComponent}>
                                    <SimpleLineIcons name="dislike" style={styles.dislike} />
                                  </TouchableOpacity>
                                  <Text style={styles.ratingText}>69</Text>
                                </View>
                              </View>
                              <View style={styles.description}>
                                <Text style={{marginLeft: 2, marginRight: 2, fontFamily: "Roboto-Light"}}>
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
        :
        <ScrollView>
          <View style={adsStyles.mainContainer}>
            <View style={adsStyles.titleContainer}>
              <Text style={adsStyles.titleText}> Privatni casovi </Text>
            </View>
                <View>
                  <View style={adsStyles.numberOfAdsContainer}></View>
                <View style={adsStyles.adContainer}>
                  <Ad
                    navigation={this.props.navigation}
                    title="CASOVI GITARE DUZI NASLOV"
                    onPress={() => this.setState({showModal: true})}
                  />
                </View>
                <View style={adsStyles.adContainer}>
                  <Ad title="CASOVI GITARE" />
                </View>
                <View style={adsStyles.adContainer}>
                  <Ad title="Casovi gitare" />
                </View>
                <View style={adsStyles.adContainer}>
                  <Ad title="Casovi gitare" />
                </View>
                <View style={adsStyles.adContainer}>
                  <Ad title="Casovi gitare" />
                </View>
                <View style={adsStyles.adContainer}>
                  <Ad title="Casovi gitare" />
                </View>
                </View>
          </View>
        </ScrollView>
      }
      </ImageBackground>
    );
  }
  else{
    return <ActivityIndicator size="large" />;
  }
}}
	


const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    alignSelf: "center",
    marginTop: hp("3%"),
    width: wp("90%"),
    height: wp("60%")
  },
  basicUserInfo: {
    maxHeight: hp("50%"),
    marginBottom: wp("1%"),
    marginTop: hp("1%"),
    marginLeft: wp("2.5%"),
    marginRight: wp("2.5%"),
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d6d6d6"
  },
  description: {
    minHeight: hp("33%"),
    marginBottom: hp("0.5%"),
    marginTop: hp("1%"),
    marginLeft: wp("2.5%"),
    marginRight: wp("2.5%"),
    paddingLeft: wp("2%"),
    paddingLeft: wp("1%"),
    paddingTop: wp("2%"),
    paddingBottom: wp("2%"),
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d6d6d6"
  },
  profileImageHeight: {
    alignSelf: "center",
    marginTop: hp("0.35%"),
    width: hp("15%"),
    height: hp("15%")
  },
  profileImageWidth:{
    alignSelf: "center",
    marginTop: wp("0.7%"),
    width: wp("30%"),
    height: wp("30%")
  },
  profileImageBorderHeight: {
    alignSelf: "center",
    marginTop: hp("1.5%"),
    width: hp("16%"),
    height: hp("16%"),
    borderWidth: 1,
    borderColor: "#747474"
  },
  profileImageBorderWidth:{
    alignSelf: "center",
    marginTop: wp("3%"),
    width: wp("32%"),
    height: wp("32%"),
    borderWidth: 1,
    borderColor: "#d6d6d6"
  },
  titleIconWidth: {
    width: wp("12%"),
    height: wp("12%"),
    top: wp("4%"),
    left: wp("2.5%"),
  },
  profileName: {
    alignSelf: "center",
    marginTop: hp("1.5%"),
    marginBottom: hp("0.5%"),
    fontSize: hp("3%"),
    fontWeight: "bold",
    fontFamily: "Roboto-Light",
    color: "black",
  },
  userLocation: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: hp("0.25%"),
  },
  location: {
    marginLeft: wp("1%"),
    fontSize: wp("4%"),
    fontFamily: "Roboto-Light",
    color: "black",
  },
  userMail: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: hp("0.5%"),
  },
  userOntact: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: hp("0.5%"),
  },
  userRating: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: hp("1.5%"),
  },
  ratingText: {
    fontSize: hp("2%"),
    fontFamily: "Roboto-Light",
    color: "black",
    marginLeft: wp("1%"),
    marginRight: wp("3%"),
  },
  likeComponent: {
    color: "black",
  },
  like: {
    fontSize: hp("2.75%"),
    color: "black"
  },
  dislikeComponent: {
    color: "black",
  },
  dislike: {
    fontSize: hp("2.75%"),
    color: "black",
  },
  userContact: {
    flexDirection: "row",
    alignSelf: "center",
  },
  userEmail: {
    flexDirection: "row",
    alignSelf: "center",
  },
  aboutUser: {
    marginBottom: hp("0.5%"),
    backgroundColor: "#1e1c24",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  smallContainer: {
    marginBottom: hp("0.5%"),
    backgroundColor: "#1e1c24",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ededed",
  },
  sectionName: {
    left: wp("2%"),
    marginTop: hp("1.5%"),
    marginBottom: hp("1.5%"),
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    fontSize: hp("2.5%"),
    color: "#ededed",
  },
  dashContainer: {
    marginLeft: wp("0.3%"),
    flexDirection: "row",
  },
  line: {
    textAlignVertical: "center",
    fontSize: hp("3%"),
    color: "#ededed",
  },
  userDetails: {
    paddingHorizontal: hp("1.25%"),
    paddingVertical: wp("2%"),
    marginHorizontal: wp("1.5%"),
    marginVertical: hp("0.5%"),
    borderRadius: 10,
    backgroundColor: "#1f1f2f",
  },
  details: {
    fontSize: hp("2%"),
    color: "#ededed",
  },
  commentTitle:{
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: "#ededed",
  },
  commentUser:{
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginTop: hp("0.5%"),
    marginLeft: wp("2%"),
    color: "#ededed",
  },
  commentTime:{
    fontSize: hp("2%"),
    marginTop: hp("0.5%"),
    marginLeft: wp("1%"),
    color: "#ededed",
  },
  commentText:{
    fontSize: hp("2%"),
    marginTop: hp("1%"),
    color: "#ededed",
  },
  arrow: {
    alignSelf: "center",
    fontSize: hp("3%"),
    color: "#ededed",
  },
  arrowSmall: {
    alignSelf: "center",
    marginTop: hp("0.5%"),
    fontSize: hp("3%"),
    color: "#ededed",
  }
});
