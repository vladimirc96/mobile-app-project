import React, { useEffect, useState } from "react";
import { signupStyles } from "../../shared/Styles";
import { Formik } from "formik";
import { TouchableOpacity, TextInput, View, Image } from "react-native";
import { SignUpButton } from "../Buttons";
import ErrorMessage from "../ErrorMessage";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import * as yup from "yup";

const signUpSchema = yup.object({
  username: yup.string().required("Korisničko ime je obavezno."),
  password: yup.string().required("Šifra je obavezna."),
  name: yup.string().required("Ime je obavezno."),
  lastName: yup.string().required("Prezime je obavezno."),
  email: yup
    .string()
    .required("Email je obavezan.")
    .email("Email nije validan."),
  phoneNumber: yup.string().required("Broj telefona je obavezan."),
});

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
          name: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          location: { id: null, value: "" },
        }}
        onSubmit={(values) => {
          signup({ ...values, image });
        }}
        validationSchema={signUpSchema}
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
                onBlur={props.handleBlur("username")}
              />
              <ErrorMessage
                touched={props.touched.username}
                errorMessage={props.errors.username}
              />

              <TextInput
                style={signupStyles.inputField}
                placeholder="Lozinka"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
                secureTextEntry={true}
              />
              <ErrorMessage
                touched={props.touched.password}
                errorMessage={props.errors.password}
              />

              <TextInput
                style={signupStyles.inputField}
                placeholder="Ime"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("name")}
                value={props.values.name}
                onBlur={props.handleBlur("name")}
              />
              <ErrorMessage
                touched={props.touched.name}
                errorMessage={props.errors.name}
              />

              <TextInput
                style={signupStyles.inputField}
                placeholder="Prezime"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("lastName")}
                value={props.values.lastName}
                onBlur={props.handleBlur("lastName")}
              />
              <ErrorMessage
                touched={props.touched.lastName}
                errorMessage={props.errors.lastName}
              />

              <TextInput
                style={signupStyles.inputField}
                placeholder="Email"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
              />
              <ErrorMessage
                touched={props.touched.email}
                errorMessage={props.errors.email}
              />

              <TextInput
                style={signupStyles.inputField}
                placeholder="Broj telefona"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("phoneNumber")}
                value={props.values.phoneNumber}
                onBlur={props.handleBlur("phoneNumber")}
              />
              <ErrorMessage
                touched={props.touched.phoneNumber}
                errorMessage={props.errors.phoneNumber}
              />

              {/* <TextInput
                style={signupStyles.inputField}
                placeholder="Lokacija"
                placeholderTextColor="#ededed"
                onChangeText={props.handleChange("location")}
                value={props.values.location}
              />
              <ErrorMessage
                touched={props.touched.username}
                errorMessage={props.errors.username}
              /> */}
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
