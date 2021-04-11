import React from "react";
import {
  ImageBackground,
  ActivityIndicator,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { contactUsStyles } from "./../shared/Styles";
import { ScrollView } from "react-native-gesture-handler";
import ContactUsForm from "../components/forms/ContactUsForm";
import { EditProfileButton } from "../components/Buttons";
import { AntDesign } from "@expo/vector-icons";

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
    image: null,
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
    console.log(this.state.fontsLoaded);
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          style={contactUsStyles.backgroundImageContainer}
          source={backgroundImage}
        >
            {/* <View style={contactUsStyles.mainContainer}>
              <View style={contactUsStyles.backForwardContainer}></View>
              <View style={contactUsStyles.inputFieldContainer}>
                <Text style={contactUsStyles.fieldNameBold}>
                  Imate pitanje, sugestiju ili želite da postanete deo tima?
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
                <Text style={contactUsStyles.fieldNameBold}>
                  Naišli ste na grešku? Okačite screenshoot, kako bi naš tim
                  mogao da je popravi
                </Text>
                <Text style={contactUsStyles.fieldName}>Fotografija</Text>
                <TouchableOpacity onPress={this.pickImage}>
                  <View style={contactUsStyles.pickImageContainer}>
                    <View style={contactUsStyles.pickImageAdditional}>
                      <Text style={contactUsStyles.pickingImage}>
                        {" "}
                        Izaberi sliku
                      </Text>
                      <AntDesign
                        name="pluscircleo"
                        style={contactUsStyles.plusIcon}
                      />
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
            </View> */}
            <ContactUsForm />
        </ImageBackground>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
