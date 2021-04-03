import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import RadioButton from "../components/RadioButton";
import * as ImagePicker from "expo-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EditProfileButton } from "../components/Buttons";
import { contactUsStyles } from "./../shared/Styles";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};
export default class ContactUs extends React.Component {
  state = {
    fontsLoaded: false,
    selectedCategory: "category_id_1",
    selectedSubcategory: "subcategory_id_1",
    checkedPrice: "price_id_1",
    image: null,
    selectedType: "adType_id_2",
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    (async () => {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();

    this._loadFontsAsync();
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const backgroundImage = require("./../assets/images/background_bright.jpg");
    const cameraIcon = require("./../assets/images/camera_icon.png");
    const hamburger = require("./../assets/images/hamburger.png");
    const avatar = require("./../assets/images/avatar.png");

    if(this.state.fontsLoaded){
      return (
        <ImageBackground
          style={contactUsStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <View style={contactUsStyles.mainContainer}>
            <View style={contactUsStyles.backForwardContainer}></View>
            <View style={contactUsStyles.inputFieldContainer}>
              <Text style={contactUsStyles.fieldNameBold}>Imate pitanje, sugestiju ili želite da postanete deo tima? 
                  Pošaljite nam poruku!
              </Text>
              <Text style={contactUsStyles.fieldName}> Naslov poruke </Text>
              <TextInput
                style={contactUsStyles.adNameField}
                placeholder="Max. 50 karaktera."
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={contactUsStyles.inputFieldContainer}>
              <Text style={contactUsStyles.fieldName}>Vaša poruka</Text>
              <TextInput
                multiline={true}
                numberOfLines={6}
                style={contactUsStyles.adDescriptionField}
                placeholder="Max. 1000 karaktera."
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={contactUsStyles.inputFieldContainerWithMargin}>
            <Text style={contactUsStyles.fieldNameBold}>Naišli ste na grešku?
              Okačite screenshoot, kako bi naš tim mogao da je popravi
            </Text>
              <Text style={contactUsStyles.fieldName}>Fotografija</Text>
              <TouchableOpacity onPress={this.pickImage}>
                <View style={contactUsStyles.pickImageContainer}>
                  <View style={contactUsStyles.pickImageAdditional}>
                    <Text style={contactUsStyles.pickingImage}> Izaberi sliku</Text>
                    <AntDesign name="pluscircleo" style={contactUsStyles.plusIcon} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={contactUsStyles.inputFieldContainerWithMargin}>
              <Text style={contactUsStyles.fieldName}> Vaši podaci </Text>
              <TextInput
                style={contactUsStyles.adNameField}
                placeholder="Ime"
                placeholderTextColor="#ededed"
              />
              <TextInput
                style={contactUsStyles.adNameField}
                placeholder="E-mail adresa"
                placeholderTextColor="#ededed"
              />
            </View>
            <EditProfileButton title={"Posalji"} />
          </View>
        </ImageBackground>
      );
    }
    else{
      return <ActivityIndicator size="large" />;
    }
  }
}
