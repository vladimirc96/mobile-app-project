import React, { useEffect, useState } from "react";
import { signupStyles } from "../../shared/Styles";
import { Formik } from "formik";
import { TouchableOpacity, Text, TextInput, View, Image } from "react-native";
import { SignUpButton } from "../Buttons";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";

export default function SignUpForm() {
  const cameraIcon = require("../../assets/images/camera_icon.png");

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={signupStyles.mainContainer}>
      <Formik
        initialValues={{
          username: "",
          password: "",
          name: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          location: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <ScrollView>
            <View style={signupStyles.imageContainer}>
              <TouchableOpacity onPress={pickImage}>
                <Image style={signupStyles.inputImage} source={cameraIcon} />
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={signupStyles.inputContainer}>
              <TextInput
                style={signupStyles.inputField}
                placeholder="Korisničko ime"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("username")}
                value={props.values.username}
              />
              <TextInput
                style={signupStyles.inputField}
                placeholder="Lozinka"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <TextInput
                style={signupStyles.inputField}
                placeholder="Ime"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("name")}
                value={props.values.name}
              />
              <TextInput
                style={signupStyles.inputField}
                placeholder="Prezime"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("lastName")}
                value={props.values.lastName}
              />
              <TextInput
                style={signupStyles.inputField}
                placeholder="Email"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
              <TextInput
                style={signupStyles.inputField}
                placeholder="Broj telefona"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("phoneNumber")}
                value={props.values.phoneNumber}
              />
              <TextInput
                style={signupStyles.inputField}
                placeholder="Lokacija"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("location")}
                value={props.values.location}
              />
            </View>
            <View style={signupStyles.buttonContainer}>
              <SignUpButton
                onPress={props.handleSubmit}
                title={"Registrujte se"}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}
