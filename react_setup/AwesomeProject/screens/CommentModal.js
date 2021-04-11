import React from "react";
import { Text, View, ScrollView, Modal, TouchableOpacity, Image, ActivityIndicator, TextInput} from "react-native";
import { adsStyles, modalStyles } from "../shared/Styles";
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Dimensions } from "react-native";
import * as Font from "expo-font";
import { SimpleLineIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Bold.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};

export default class CommentModal extends React.Component {
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
                          <View style={modalStyles.modalInnerWrapComment}>
                            <View style={modalStyles.closeButtonContainer}>
                              <View></View>
                              <Ionicons name="md-close" size={26} onPress={() => this.props.toggleModal()} style={modalStyles.closeButton} color="black" />
                            </View>
                            <View style={modalStyles.centeredWrap}>
                              <View style={modalStyles.reviewTitle}>
                                <Text style={modalStyles.reviewTitleText}>Oceni korisnika</Text>
                              </View>
                              <View style={modalStyles.ratingContainer}>
                                <TouchableOpacity>
                                  <SimpleLineIcons name="like" size={50} style={{color:"green"}} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                  <SimpleLineIcons name="dislike" size={50} style={{color:"red"}} />
                                </TouchableOpacity>
                              </View>
                              <View style={modalStyles.commentHeadingContainer}>
                                <View>
                                  <Text style={modalStyles.commentHeading}>Vaše ime: </Text>
                                </View>
                                <View>
                                  <Text style={modalStyles.innerText}> (ukoliko ne želite da ostanete anonimni) </Text>
                                </View>
                              </View>
                              <TextInput style={modalStyles.nickname}>
                              </TextInput>
                              <View style={modalStyles.commentHeadingContainer}>
                                <Text style={modalStyles.commentHeading}>Ostavite komentar:</Text>
                              </View>
                              <TextInput style={modalStyles.textInput}>
                              </TextInput>
                              <TouchableOpacity>
                                <View style={modalStyles.button}>
                                  <Text style={modalStyles.buttonText}> Posalji </Text>
                                </View>
                              </TouchableOpacity>
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
	
