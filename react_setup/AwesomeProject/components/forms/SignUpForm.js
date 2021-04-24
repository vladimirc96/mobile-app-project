import React, { useEffect, useState } from "react";
import { signupStyles } from "../../shared/Styles";
import { Formik } from "formik";
import { TouchableOpacity, TextInput, View, Image } from "react-native";
import { SignUpButton } from "../Buttons";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import * as yup from "yup";
import { Dimensions } from "react-native";
import {
  getErrorStyle,
  getErrorPlaceholder,
} from "../../shared/ValidationUtil";

const signUpSchema = yup.object({
  username: yup.string().required("Korisničko ime je obavezno."),
  password: yup
    .string()
    .required("Šifra je obavezna.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  email: yup
    .string()
    .required("Email je obavezan.")
    .email("Email nije validan."),
  phoneNumber: yup.string().required("Broj telefona je obavezan."),
});

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
        {(formikProps) => (
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
                style={[
                  signupStyles.inputField,
                  getErrorStyle(
                    formikProps.errors.username,
                    formikProps.touched.username
                  ),
                ]}
                placeholder="Korisničko ime"
                placeholderTextColor={getErrorPlaceholder(
                  formikProps.errors.username,
                  formikProps.touched.username
                )}
                onChangeText={formikProps.handleChange("username")}
                value={formikProps.values.username}
                onBlur={formikProps.handleBlur("username")}
              />
              <TextInput
                style={[
                  signupStyles.inputField,
                  getErrorStyle(
                    formikProps.errors.password,
                    formikProps.touched.password
                  ),
                ]}
                placeholder="Lozinka"
                placeholderTextColor={getErrorPlaceholder(
                  formikProps.errors.password,
                  formikProps.touched.password
                )}
                onChangeText={formikProps.handleChange("password")}
                value={formikProps.values.password}
                onBlur={formikProps.handleBlur("password")}
                secureTextEntry={true}
              />
              <TextInput
                style={[
                  signupStyles.inputField,
                  getErrorStyle(
                    formikProps.errors.email,
                    formikProps.touched.email
                  ),
                ]}
                placeholder="Email"
                placeholderTextColor={getErrorPlaceholder(
                  formikProps.errors.email,
                  formikProps.touched.email
                )}
                onChangeText={formikProps.handleChange("email")}
                value={formikProps.values.email}
                onBlur={formikProps.handleBlur("email")}
              />
              <TextInput
                style={[
                  signupStyles.inputField,
                  getErrorStyle(
                    formikProps.errors.phoneNumber,
                    formikProps.touched.phoneNumber
                  ),
                ]}
                placeholder="Broj telefona"
                placeholderTextColor={getErrorPlaceholder(
                  formikProps.errors.phoneNumber,
                  formikProps.touched.phoneNumber
                )}
                onChangeText={formikProps.handleChange("phoneNumber")}
                value={formikProps.values.phoneNumber}
                onBlur={formikProps.handleBlur("phoneNumber")}
                keyboardType="numeric"
              />
            </View>
            <View style={signupStyles.buttonContainer}>
              <SignUpButton
                onPress={formikProps.handleSubmit}
                title={"Registrujte se"}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}
