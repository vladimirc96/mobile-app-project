import React from "react";
import { Formik } from "formik";
import { TouchableOpacity, TextInput, View, Text } from "react-native";
import * as yup from "yup";
import { loginStyles } from "../../shared/Styles";
import { LogInButton } from "../Buttons";

const loginSchema = yup.object({
  username: yup.string().required("Korisničko ime je obavezno."),
  password: yup.string().required("Šifra je obavezna."),
});

export default function LoginForm({ login, navigation }) {
  return (
    <View>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          login(values);
        }}
        validationSchema={loginSchema}
      >
        {(props) => (
          <View style={loginStyles.mainContainer}>
            <View style={loginStyles.welcomeTextContainer}>
              <Text style={loginStyles.firstText}>Dobrodošli</Text>
              <Text style={loginStyles.secondText}>Ulogujte se.</Text>
            </View>
            <View style={loginStyles.inputContainer}>
              <TextInput
                style={
                  props.errors.username && props.touched.username
                    ? loginStyles.inputErrorField
                    : loginStyles.inputField
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
                    ? loginStyles.inputErrorField
                    : loginStyles.inputField
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
            </View>
            <View style={loginStyles.footerContainer}>
              <View style={loginStyles.footerSmallContainer}>
                <Text style={loginStyles.footerText}> Nemate profil? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <Text style={loginStyles.boldText}>Registruj se</Text>
                </TouchableOpacity>
              </View>
              <LogInButton onPress={props.handleSubmit} title={"Ulogujte se"} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
