import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { AdvButton } from "../components/Buttons";
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
import { getUserInfo, saveUser } from "../services/UserService";
import { adStyles, adsStyles } from "../shared/Styles";
import { Dimensions } from "react-native";
import SmallAd from "../components/SmallAd";
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

export default class Profile extends React.Component {
  constructor(){
    super()
    this.state ={
      fontsLoaded: false,
      text: "Novi Sad, Srbija Novi Sad, Srbija Novi Sad, Srbija Novi Sad,Srbija Novi Sad, Srbija Novi Sad, Srbija Novi Sad, Srbija Novi Sad, Srbija Novi Sad,Srbija Novi Sad, Srbija",
      shortText: true,
      showComments: false,
      showAds: false,
      user: null
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

async componentDidMount() {
    try {
      const data = await getUserInfo(
        this.props.navigation.getParam("username")
      );
      this.setState({ user: data });
    } catch (err) {
      console.log(err.message);
    }

    this._loadFontsAsync();
  }

  handlePress = () => {
    this.setState(prevState => ({
      shortText: !prevState.shortText
    }));
  }

  toggleComments = () => {
    this.setState(prevState => ({
      showComments:!prevState.showComments
    }));
  }

  toggleAds = () => {
    this.setState(prevState => ({
      showAds:!prevState.showAds
    }));
  }

  updateUser = async (user) => {
    try {
      const data = await saveUser(user);
      this.setState({ user: data });
      alert("Uspesno ste sacuvali izmene");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
    const cameraIcon = require("./../assets/images/camera_icon.png");
    const hamburger = require("./../assets/images/hamburger.png");
    const avatar = require("./../assets/images/avatar.png");

    if (!this.state.user) {
      return <View></View>;
    }

    
      if (this.state.fontsLoaded){
        return (
        <ImageBackground
        style={styles.backgroundImageContainer}
        source={backgroundImage}
      >
        <ScrollView>
        <View style={styles.mainContainer}>
            <View style={styles.basicUserInfo}>
              <Image
                style={
                  windowHeight * 0.37 < windowWidth * 0.7
                    ? styles.profileImageHeight
                    : styles.profileImageWidth
                }
                source={avatar}
              />
              <Text style={styles.profileName}>
                {this.state.user.firstName + " " + this.state.user.lastName}
              </Text>
              <View style={styles.userLocation}>
                <SimpleLineIcons
                  name="location-pin"
                  size={hp("2.5%")}
                  color="black"
                />
                <Text style={styles.location}>
                  {this.state.user.location.value + ", Novi Sad"}
                </Text>
              </View>
              <View style={styles.userMail}>
                <Fontisto name="email" size={hp("2.5%")} color="black" />
                <Text style={styles.location}>{this.state.user.email}</Text>
              </View>
              <View style={styles.userOntact}>
                <Feather name="phone" size={hp("2.5%")} color="black" />
                <Text style={styles.location}>
                  {this.state.user.phoneNumber}
                </Text>
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
              <View style={styles.editButton}>
                <Text
                  style={styles.editButtonText}
                  onPress={() =>
                    this.props.navigation.navigate("EditProfile", {
                      user: this.state.user,
                      updateUser: this.updateUser,
                    })
                  }
                >
                  Izmeni Profil
                </Text>
              </View>
            </View>
          <View style={styles.aboutUser}>
              <Text style={styles.sectionName}>O korisniku</Text>
            <View style={styles.userDetails}>
              <Text style={styles.details}>
                {this.state.shortText? this.state.text.substr(0, 80) : this.state.text}
              </Text>
          </View>
          <FontAwesome
                    name={this.state.shortText? "angle-double-down" : "angle-double-up"}
                    style={styles.arrow}
                    onPress={this.handlePress}
                  />
            </View>
          <View style={styles.smallContainer}>
            <View style={{flexDirection: "row", alignSelf: "center"}}>
              <Text style={styles.sectionName}>Komentari</Text>
              {
                !this.state.showComments &&
                <FontAwesome
                name="angle-double-down"
                style={styles.arrowSmall}
                onPress={this.toggleComments}
              />
              }
            </View>

            {
              this.state.showComments
              &&
              <View>
              <View style={styles.userDetails}>
                <Text style={styles.commentTitle}>Casovi iz pythona</Text>
                <View style={{flexDirection: "row", marginTop: hp("0.25%"), marginLeft: wp("1%")}}>
                  <SimpleLineIcons name="like" style={styles.like} />
                  <Text style={styles.commentUser}>Fedor96</Text>
                  <Text style={styles.commentTime}>30 Jul 2020 - 30 Avg 2020</Text>
                </View>
                <Text style={styles.commentText}>"Bilo je zadovoljstvo raditi sa ovim covekom. Sve pohvale"</Text>
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.commentTitle}>Casovi iz pythona</Text>
                <View style={{flexDirection: "row", marginTop: hp("0.25%"), marginLeft: wp("1%")}}>
                  <SimpleLineIcons name="like" style={styles.like} />
                  <Text style={styles.commentUser}>Fedor96</Text>
                  <Text style={styles.commentTime}>30 Jul 2020 - 30 Avg 2020</Text>
                </View>
                <Text style={styles.commentText}>"Bilo je zadovoljstvo raditi sa ovim covekom. Sve pohvale"</Text>
              </View>
              <FontAwesome
                    name="angle-double-up"
                    style={styles.arrow}
                    onPress={this.toggleComments}
                  />
            </View> 
            }
          </View>
          <View style={styles.smallContainer}>
            <View style={{flexDirection: "row", alignSelf: "center"}}>
              <Text style={styles.sectionName}>Oglasi</Text>
              {
                !this.state.showAds
                &&
                <FontAwesome
                name="angle-double-down"
                style={styles.arrowSmall}
                onPress={this.toggleAds}
              />
              }
            </View>
            {
              this.state.showAds
              &&
              <View>
              <View style={adsStyles.smallAdContainer}>
               <SmallAd title="CASOVI GITARE" />
              </View>
              <View style={adsStyles.smallAdContainer}>
               <SmallAd title="CASOVI GITARE" />
              </View>
              <FontAwesome
                    name="angle-double-up"
                    style={styles.arrow}
                    onPress={this.toggleAds}
                  />
            </View> 
            }
          </View>
        </View>
        </ScrollView>
      </ImageBackground>
    );
    
      }
      else{
        return <ActivityIndicator size="large" />;
      }
     
  }
}

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
  editButton: {
    height: hp("5%"),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: "center",
    backgroundColor: "#03d5ff",
    borderColor: "#ededed"
  },
  editButtonText: {
    marginTop: hp("1%"),
    color: "black",
    fontSize: hp("2%"),
    fontWeight: "bold"
  },
  basicUserInfo: {
    maxHeight: hp("50%"),
    marginBottom: wp("1%"),
    backgroundColor: "#ededed",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#606060"
  },
  profileImageHeight: {
    alignSelf: "center",
    marginTop: hp("1.5%"),
    width: hp("15%"),
    height: hp("15%"),
  },
  profileImageWidth:{
    alignSelf: "center",
    marginTop: wp("3%"),
    width: wp("30%"),
    height: wp("30%"),
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
    color: "black",
    fontFamily: "Roboto-Bold"
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
    fontFamily: "Roboto-Light",
    marginBottom: hp("0.5%"),
  },
  userOntact: {
    flexDirection: "row",
    alignSelf: "center",
    fontFamily: "Roboto-Light",
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
    backgroundColor: "#ededed",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#606060",
  },
  smallContainer: {
    marginBottom: hp("0.5%"),
    backgroundColor: "#ededed",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#606060",
  },
  sectionName: {
    left: wp("2%"),
    marginTop: hp("1.5%"),
    marginBottom: hp("1.5%"),
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    fontSize: hp("2.5%"),
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    color: "black",
  },
  dashContainer: {
    marginLeft: wp("0.3%"),
    flexDirection: "row",
  },
  line: {
    textAlignVertical: "center",
    fontSize: hp("3%"),
    color: "black",
  },
  userDetails: {
    paddingHorizontal: hp("1.25%"),
    paddingVertical: wp("2%"),
    marginHorizontal: wp("1.5%"),
    marginVertical: hp("0.5%"),
    borderRadius: 10,
    backgroundColor: "white",
  },
  details: {
    fontSize: hp("2%"),
    fontFamily: "Roboto-Light",
    color: "black",
  },
  commentTitle:{
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: "black",
  },
  commentUser:{
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginTop: hp("0.5%"),
    marginLeft: wp("2%"),
    color: "black",
  },
  commentTime:{
    fontSize: hp("2%"),
    marginTop: hp("0.5%"),
    marginLeft: wp("1%"),
    color: "black",
  },
  commentText:{
    fontSize: hp("2%"),
    marginTop: hp("1%"),
    color: "black",
  },
  arrow: {
    alignSelf: "center",
    fontSize: hp("3%"),
    color: "black",
  },
  arrowSmall: {
    alignSelf: "center",
    marginTop: hp("0.5%"),
    fontSize: hp("3%"),
    color: "black",
  }
});
