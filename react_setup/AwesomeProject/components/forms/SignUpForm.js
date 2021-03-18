import React, { useEffect, useState } from "react";
import { signupStyles } from "../../shared/Styles";
import { Formik } from "formik";
import { TouchableOpacity, TextInput, View, Image } from "react-native";
import { SignUpButton } from "../Buttons";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import * as yup from "yup";
import { Dimensions } from "react-native";

const signUpSchema = yup.object({
  username: yup.string().required("Korisničko ime je obavezno."),
  password: yup.string().required("Šifra je obavezna."),
  email: yup
    .string()
    .required("Email je obavezan.")
    .email("Email nije validan."),
  phoneNumber: yup.string().required("Broj telefona je obavezan."),
});

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const customFonts = {
  "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  "Comfortaa-Light": require("../assets/fonts/Comfortaa-Light.ttf"),
};

export default function SignUpForm({ signup }) {
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
          email: "",
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          signup({ ...values, image });
        }}
        validationSchema={signUpSchema}
      >
        {(props) => (
          <ScrollView>
            <View
              style={
                windowHeight * 0.37 < windowWidth * 0.7
                  ? signupStyles.imageContainerHeight
                  : signupStyles.imageContainerWidth
              }
            >
              <TouchableOpacity onPress={pickImage}>
                <Image
                  style={
                    windowHeight * 0.37 < windowWidth * 0.7
                      ? signupStyles.inputImageHeight
                      : signupStyles.inputImageWidth
                  }
                  source={cameraIcon}
                />
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
                style={
                  props.errors.username && props.touched.username
                    ? signupStyles.inputErrorField
                    : signupStyles.inputField
                }
                placeholder="Korisničko ime"
                placeholderTextColor={
                  props.errors.username && props.touched.username
                    ? "red"
                    : "#ededed"
                }
                onChangeText={props.handleChange("username")}
                value={props.values.username}
                onBlur={props.handleBlur("username")}
              />
              <TextInput
                style={
                  props.errors.password && props.touched.password
                    ? signupStyles.inputErrorField
                    : signupStyles.inputField
                }
                placeholder="Lozinka"
                placeholderTextColor={
                  props.errors.password && props.touched.password
                    ? "red"
                    : "#ededed"
                }
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
                secureTextEntry={true}
              />
              <TextInput
                style={
                  props.errors.email && props.touched.email
                    ? signupStyles.inputErrorField
                    : signupStyles.inputField
                }
                placeholder="Email"
                placeholderTextColor={
                  props.errors.email && props.touched.email ? "red" : "#ededed"
                }
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
              />
              <TextInput
                style={
                  props.errors.phoneNumber && props.touched.phoneNumber
                    ? signupStyles.inputErrorField
                    : signupStyles.inputField
                }
                placeholder="Broj telefona"
                placeholderTextColor={
                  props.errors.phoneNumber && props.touched.phoneNumber
                    ? "red"
                    : "#ededed"
                }
                onChangeText={props.handleChange("phoneNumber")}
                value={props.values.phoneNumber}
                onBlur={props.handleBlur("phoneNumber")}
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
