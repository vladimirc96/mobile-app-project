import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import {Picker} from "@react-native-picker/picker";
import RadioButton from './../components/RadioButton';
import * as ImagePicker from "expo-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EditProfileButton } from "./../components/Buttons";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class AdCreation extends React.Component {

    state = {
      selectedCategory: "category_id_1",
      selectedSubcategory: "subcategory_id_1",
      checkedPrice: "price_id_1",
      image: null
    };

    componentDidMount() {
      (async () => {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      })();
    };
  
    pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({image: result.uri});
      }
    };

    render() {
      const backgroundImage = require("./../assets/images/logInBackground.jpg");
      const cameraIcon = require("./../assets/images/camera_icon.png");
      const hamburger = require("./../assets/images/hamburger.png");
      const avatar = require("./../assets/images/avatar.png");

      return (
        <ImageBackground
          style={styles.backgroundImageContainer}
          source={backgroundImage}
        >
          <View style={styles.mainContainer}>
              <View style={styles.backForwardContainer}>
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Naziv oglasa</Text>
                <TextInput
                  style={styles.adNameField}
                  placeholder="Max. 50 karaktera."
                  placeholderTextColor="#ededed"
                />
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Opis oglasa</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.adDescriptionField}
                    placeholder="Max. 500 karaktera."
                    placeholderTextColor="#ededed"
                />
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Izaberi kategoriju i potkategoriju</Text>
                <View style={styles.dropDownCatSubContainer}>
                  <View style={styles.dropDownCatContainer}>
                    <Picker
                      selectedCategory={this.state.selectedCategory}
                      style={{fontSize: hp("2%"), backgroundColor: "#1e1c24", color: "white", borderColor: 'transparent', paddingTop: hp("0.5%")}}
                      onValueChange={(itemValue, itemIndex) => this.setState({selectedCategory: itemValue})}
                    >
                      <Picker.Item label= 'Majstori i zanati' value= 'category_id_1'/>
                      <Picker.Item label= 'Dizajn' value= 'category_id_2' />
                      <Picker.Item label= 'Muzika' value= 'category_id_3' />
                    </Picker>
                  </View>
                  <View style={styles.dropDownSubContainer}>
                    <Picker
                      selectedSubcategory={this.state.selectedSubcategory}
                      style={{fontSize: hp("2%"), backgroundColor: "#1e1c24", color: "white", borderColor: 'transparent', paddingTop: hp("0.75%")}}
                      onValueChange={(itemValue, itemIndex) => this.setState({selectedSubcategory: itemValue})}
                    >
                      <Picker.Item label= 'Majstori i zanati' value= 'subcategory_id_1' />
                      <Picker.Item label= 'Dizajn' value= 'subcategory_id_2' />
                      <Picker.Item label= 'Muzika' value= 'subcategory_id_3' />
                    </Picker>
                  </View>
                </View>
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Izaberi cenu</Text>
                <View style={styles.priceRBContainer}>
                  <RadioButton/>
                </View>
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Fotografija</Text>
                <TouchableOpacity onPress={this.pickImage}>
                  <View style={styles.pickImageContainer}>
                    <View style={styles.pickImageAdditional}>
                      <Text style={styles.pickingImage}> Izaberi sliku</Text>
                      <AntDesign name="pluscircleo" style={styles.plusIcon}/>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.inputFieldContainer}>
                <Text style={styles.fieldName}>Izaberi tip oglasa</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Ženski"
                  placeholderTextColor="#ededed"
                />
              </View>
            <EditProfileButton title={"Postavi"} />
          </View>
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
        resizeMode: "cover",
    },
    mainContainer: {
        alignSelf: "center",
        marginTop: hp("2%"),
        width: wp("90%"),
        minHeight: hp("80%"),
        borderRadius: 10,
        backgroundColor: "#2d2d2d",
    },
    backForwardContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: hp("4%"),
        backgroundColor: "#1e1c24",
      },
    inputFieldContainer: {
        alignSelf: 'center',
        marginLeft: wp("1%"),
        width: wp('82%'),
    },
    fieldName: {
        marginLeft: wp("1%"),
        marginTop: hp("1.25%"),
        fontSize: hp("1.55%"),
        color: "#ededed",
    },
    adNameField: {
      marginTop: hp("0.75%"),
      width: wp("82%"),
      height: hp("4.5%"),
      paddingLeft: wp("1.5%"),
      fontSize: hp("1.9%"),
      fontStyle: 'italic',
      opacity: 0.8,
      backgroundColor: "#1e1c24",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "white",
  },
  adDescriptionField: {
      width: wp("82%"),
      marginTop: hp("0.75%"),
      paddingLeft: wp("1.5%"),
      fontSize: hp("1.9%"),
      fontStyle: 'italic',
      opacity: 0.8,
      backgroundColor: "#1e1c24",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "white",
  },
    dropDownCatSubContainer: {
      marginTop: hp("0.75%"),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "#1e1c24",
      height: hp("9%"),
    },
    dropDownCatContainer: {
      marginTop: hp("0.25%"),
      alignSelf: 'center',
      width: wp('75%'),
      borderBottomWidth: 1,
      borderColor: "white",
      backgroundColor: "#1e1c24",
      height: hp("4%"),
    },
    dropDownSubContainer: {
      alignSelf: 'center',
      width: wp('75%'),
      backgroundColor: "#1e1c24",
      height: hp("4%"),
    },
    priceRBContainer:{
      marginTop: hp("0.75%"),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "#1e1c24",
      height: hp("9%"),
    },
    pickImageContainer: {
      alignSelf: 'center',
      marginTop: hp("0.75%"),
      width: wp("82%"),
      borderRadius: 9,
      borderWidth: 1,
      borderColor: "white",
      backgroundColor: "#1e1c24",
      height: hp("4.5%"),
    },
    pickImageAdditional: {
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp("75%"),
    },
    pickingImage: {
      paddingTop: hp("0.55%"), 
      fontSize: hp("1.9%"),
      fontWeight: 'bold',
      color: "#ededed",
    },
    plusIcon: {
      fontSize: hp("2.25%"),
      color: "#ededed",
      paddingTop: hp("0.55%") 
    }
  });