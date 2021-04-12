import React from "react";
import {
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import {
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
import { adsStyles, profileStyles } from "../shared/Styles";
import { Dimensions } from "react-native";
import SmallAd from "../components/SmallAd";
import * as Font from "expo-font";
import { connect } from "react-redux";
import { AdvButton } from "./../components/Buttons";
import AdModalProfile from "./AdModalProfile";
import CommentModal from "./CommentModal";
import Comment from "./../components/Comment";
import { getByUsername } from "../services/AdService";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
      shortText: true,
      showComments: false,
      showAds: false,
      user: null,
      showModal: false,
      showAdModal: false,
      ads: [],
      chosenAd: null
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  async getByUsername() {
    try {
      const data = await getByUsername(
        this.state.user.username
      );
      this.setState({ ads: data});
    } catch (err) {
      console.log(err.message);
    }
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
    if(this.props.navigation.state.params.toggleModal.length){
      this.props.navigation.state.params.toggleModal()
    }
    this._loadFontsAsync();
  }

  handlePress = () => {
    this.setState((prevState) => ({
      shortText: !prevState.shortText,
    }));
  };

  toggleComments = () => {
    this.setState((prevState) => ({
      showComments: !prevState.showComments,
    }));
  };

  toggleAds = () => {
    if(!this.state.ads.length){
      this.getByUsername();
    }
    this.setState((prevState) => ({
      showAds: !prevState.showAds,
    }));
  };

  updateUser = async (user) => {
    try {
      const data = await saveUser(user);
      this.setState({ user: data });
      alert("Uspesno ste sacuvali izmene");
    } catch (err) {
      console.log(err);
    }
  };

  toggleModal = () => {
    this.setState((prevState) => ({showModal: !prevState.showModal}));
  };

  toggleAdModal = (ad) => {
    this.setState((prevState) => ({showAdModal: !prevState.showAdModal, chosenAd: ad}));
  };

  render() {
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    const avatar = require("./../assets/images/avatar.png");
    const adsList = this.state.ads.map((ad) => (
      <View key={ad.id} style={adsStyles.smallAdContainer}>
        <SmallAd ad={ad}
        onPress={() => this.toggleAdModal(ad)}
        />
      </View>
    ));
    if (!this.state.user) {
      return <View></View>;
    }

    if (this.state.fontsLoaded) {
      if(this.state.showAdModal){
        return (
          <ImageBackground
            style={profileStyles.backgroundImageContainer}
            source={backgroundImage}
          >
          <AdModalProfile toggleModal={this.toggleAdModal} ad={this.state.chosenAd} user={this.state.user} />
        </ImageBackground>
        )
      }else{
        return (
          <ImageBackground
            style={profileStyles.backgroundImageContainer}
            source={backgroundImage}
          >
            {this.state.showModal ? (
              <CommentModal toggleModal={this.toggleModal} />
            ) : (
              <ScrollView>
                <View style={profileStyles.mainContainer}>
                  <View style={profileStyles.basicUserInfo}>
                    <Image
                      style={
                        windowHeight * 0.37 < windowWidth * 0.7
                          ? profileStyles.profileImageHeight
                          : profileStyles.profileImageWidth
                      }
                      source={avatar}
                    />
                    <Text style={profileStyles.profileName}>
                      {this.state.user.firstName + " " + this.state.user.lastName}
                    </Text>
                    <View style={profileStyles.userLocation}>
                      <SimpleLineIcons
                        name="location-pin"
                        size={hp("2.5%")}
                        color="black"
                      />
                      <Text style={profileStyles.location}>
                        {this.state.user.location.value + ", Novi Sad"}
                      </Text>
                    </View>
                    <View style={profileStyles.userMail}>
                      <Fontisto name="email" size={hp("2.5%")} color="black" />
                      <Text style={profileStyles.location}>
                        {this.state.user.email}
                      </Text>
                    </View>
                    <View style={profileStyles.userOntact}>
                      <Feather name="phone" size={hp("2.5%")} color="black" />
                      <Text style={profileStyles.location}>
                        {this.state.user.phoneNumber}
                      </Text>
                    </View>
                    <View style={profileStyles.userRating}>
                      <TouchableOpacity style={profileStyles.likeComponent}>
                        <SimpleLineIcons name="like" style={profileStyles.like} />
                      </TouchableOpacity>
                      <Text style={profileStyles.ratingText}>{this.state.user.positiveRatings}</Text>
                      <TouchableOpacity style={profileStyles.dislikeComponent}>
                        <SimpleLineIcons
                          name="dislike"
                          style={profileStyles.dislike}
                        />
                      </TouchableOpacity>
                      <Text style={profileStyles.ratingText}>{this.state.user.negativeRatings}</Text>
                    </View>
                    <View style={profileStyles.editButton}>
                      <Text
                        style={profileStyles.editButtonText}
                        onPress={
                          this.props.token
                            ? () =>
                                this.props.navigation.navigate("EditProfile", {
                                  user: this.state.user,
                                  updateUser: this.updateUser,
                                })
                            : () => this.toggleModal()
                        }
                      >
                        {this.props.token ? "Izmeni Profil" : "Oceni korisnika"}
                      </Text>
                    </View>
                  </View>
                  {this.state.user.details &&
                  <TouchableOpacity onPress={this.handlePress}>
                    <View style={profileStyles.aboutUser}>
                      <Text style={profileStyles.sectionName}>
                        Detalji o korisniku
                      </Text>
                      <View style={profileStyles.userDetails}>
                        <Text numberOfLines={this.state.shortText && 3} style={profileStyles.details}>
                          {this.state.user.details}
                        </Text>
                      </View>
                      <FontAwesome
                        name={
                          this.state.shortText
                            ? "angle-double-down"
                            : "angle-double-up"
                        }
                        style={profileStyles.arrow}
                      />
                    </View>
                  </TouchableOpacity>
                  }
                  <View style={profileStyles.smallContainer}>
                    <TouchableOpacity onPress={this.toggleComments}>
                      <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Text style={profileStyles.sectionName}>Komentari </Text>
                        {!this.state.showComments && (
                          <FontAwesome
                            name="angle-double-down"
                            style={profileStyles.arrowSmall}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    {this.state.showComments && (
                      <View>
                        <Comment />
                        <Comment />
                        <TouchableOpacity onPress={this.toggleComments}>
                          <FontAwesome
                            name="angle-double-up"
                            style={profileStyles.arrow}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                  <View style={profileStyles.smallContainer}>
                    <TouchableOpacity onPress={this.toggleAds}>
                      <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Text style={profileStyles.sectionName}>Oglasi </Text>
                        {!this.state.showAds && (
                          <FontAwesome
                            name="angle-double-down"
                            style={profileStyles.arrowSmall}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    {this.state.showAds && (
                      <View>
                        {adsList}
                        <TouchableOpacity onPress={this.toggleAds}>
                          <FontAwesome
                            name="angle-double-up"
                            style={profileStyles.arrow}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                  {this.props.token && (
                    <AdvButton
                      profile={true}
                      title={"Postavite oglas"}
                      onPress={() => this.props.navigation.navigate("AdCreation")}
                    />
                  )}
                </View>
              </ScrollView>
            )}
          </ImageBackground>
        );
      }
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

export default connect(mapStateToProps)(Profile);
