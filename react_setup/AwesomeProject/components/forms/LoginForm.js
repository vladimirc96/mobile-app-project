import React from "react";
import { Formik } from "formik";
import { TouchableOpacity, TextInput, View, Text } from "react-native";
import * as yup from "yup";
import { loginStyles } from "../../shared/Styles";
import { LogInButton } from "../Buttons";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authentication/authenticationActions";

const loginSchema = yup.object({
  username: yup.string().required("Korisničko ime je obavezno."),
  password: yup.string().required("Šifra je obavezna."),
});

export default function LoginForm({ navigation }) {
  const dispatch = useDispatch();

  const loginUser = (credentials) => dispatch(login(credentials));

  const handleLogin = (credentials) => {
    return new Promise((resolve, reject) => {
      loginUser(credentials);
      resolve();
    });
  };

  return (
    <View>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await handleLogin({
            username: values.username,
            password: values.password,
          });
          navigation.navigate("Home");
        }}
        validationSchema={loginSchema}
      >
        {(props) => (
          <View>
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
                <View>
                  <Text style={loginStyles.footerText}> Nemate profil? </Text>
                </View>
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
