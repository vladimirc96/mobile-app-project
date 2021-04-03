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
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import RadioButton from "../components/RadioButton";
import * as ImagePicker from "expo-image-picker";
import * as Font from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EditProfileButton } from "../components/Buttons";

import { Dimensions } from "react-native";
import { adCreationStyles } from "./../shared/Styles";


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

export default class AdCreation extends React.Component {
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
    const backgroundImage = require("./../assets/images/logInBackground.jpg");
    const cameraIcon = require("./../assets/images/camera_icon.png");
    const hamburger = require("./../assets/images/hamburger.png");
    const avatar = require("./../assets/images/avatar.png");

    if(this.state.fontsLoaded){
      return (
        <ImageBackground
          style={adCreationStyles.backgroundImageContainer}
          source={backgroundImage}
        >
          <View style={adCreationStyles.mainContainer}>
            <View style={adCreationStyles.backForwardContainer}></View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Naziv oglasa</Text>
              <TextInput
                style={adCreationStyles.adNameField}
                placeholder="Max. 50 karaktera."
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Opis oglasa</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={adCreationStyles.adDescriptionField}
                placeholder="Max. 500 karaktera."
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>
                Izaberi kategoriju i potkategoriju
              </Text>
              <View style={adCreationStyles.dropDownCatSubContainer}>
                <View style={adCreationStyles.dropDownCatContainer}>
                  <Picker
                    selectedCategory={this.state.selectedCategory}
                    style={{
                      fontSize: hp("1.9%"),
                      backgroundColor: "#1e1c24",
                      fontFamily: "Roboto-Bold",
                      color: "white",
                      borderColor: "transparent",
                      paddingTop: hp("0.5%"),
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ selectedCategory: itemValue })
                    }
                  >
                    <Picker.Item
                      label="Majstori i zanati"
                      value="category_id_1"
                    />
                    <Picker.Item label="Dizajn" value="category_id_2" />
                    <Picker.Item label="Muzika" value="category_id_3" />
                  </Picker>
                </View>
                <View style={adCreationStyles.dropDownSubContainer}>
                  <Picker
                    selectedSubcategory={this.state.selectedSubcategory}
                    style={{
                      fontSize: hp("1.9%"),
                      backgroundColor: "#1e1c24",
                      fontFamily: "Roboto-Bold",
                      color: "white",
                      borderColor: "transparent",
                      paddingTop: hp("0.75%"),
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ selectedSubcategory: itemValue })
                    }
                  >
                    <Picker.Item
                      label="Majstori i zanati"
                      value="subcategory_id_1"
                    />
                    <Picker.Item label="Dizajn" value="subcategory_id_2" />
                    <Picker.Item label="Muzika" value="subcategory_id_3" />
                  </Picker>
                </View>
              </View>
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Izaberi cenu</Text>
              <View style={adCreationStyles.priceRBContainer}>
                <RadioButton />
              </View>
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <Text style={adCreationStyles.fieldName}>Fotografija</Text>
              <TouchableOpacity onPress={this.pickImage}>
                <View style={adCreationStyles.pickImageContainer}>
                  <View style={adCreationStyles.pickImageAdditional}>
                    <Text style={adCreationStyles.pickingImage}> Izaberi sliku</Text>
                    <AntDesign name="pluscircleo" style={adCreationStyles.plusIcon} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={adCreationStyles.inputFieldContainer}>
              <View style={adCreationStyles.inputFieldAdditionalContainer}>
                <Text style={adCreationStyles.fieldName}>Izaberi tip oglasa</Text>
                <FontAwesome
                  name="question-circle-o"
                  style={adCreationStyles.questionMarkIcon}
                />
              </View>
              <View style={adCreationStyles.dropDownTypeContainer}>
                <View style={adCreationStyles.dropDownSubContainer}>
                  <Picker
                    selectedSubcategory={this.state.selectedType}
                    style={{
                      fontSize: hp("1.9%"),
                      backgroundColor: "#1e1c24",
                      fontFamily: "Roboto-Bold",
                      color: "white",
                      borderColor: "transparent",
                      paddingTop: hp("0.75%"),
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ selectedType: itemValue })
                    }
                  >
                    <Picker.Item label="Basic" value="adType_id_1" />
                    <Picker.Item label="VIP" value="adType_id_2" />
                    <Picker.Item label="Gold" value="adType_id_3" />
                  </Picker>
                </View>
              </View>
              <TextInput
                style={adCreationStyles.typeCodeInput}
                placeholder="Unesite kod ovde"
                placeholderTextColor="#ededed"
              />
            </View>
            <EditProfileButton title={"Postavi"} />
          </View>
        </ImageBackground>
      );
    }
    else{
      return <ActivityIndicator size="large" />;
    }
  }
}