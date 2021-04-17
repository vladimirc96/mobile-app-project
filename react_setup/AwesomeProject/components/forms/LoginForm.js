import React from "react";
import { Formik } from "formik";
import { TouchableOpacity, TextInput, View, Text } from "react-native";
import * as yup from "yup";
import { loginStyles } from "../../shared/Styles";
import { LogInButton } from "../Buttons";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authentication/authenticationActions";
import {
  getErrorStyle,
  getErrorPlaceholder,
} from "../../shared/ValidationUtil";

const loginSchema = yup.object({
  username: yup.string().required("Korisničko ime je obavezno."),
  password: yup.string().required("Šifra je obavezna."),
});

export default function LoginForm({ navigation }) {
  const dispatch = useDispatch();

  const loginUser = (credentials) => dispatch(login(credentials));

  const handleLogin = (credentials, navigation) => {
    return new Promise((resolve, reject) => {
      loginUser(credentials, navigation);
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
          await handleLogin(
            {
              username: values.username,
              password: values.password,
            },
            navigation
          );
          // navigation.navigate("Home");
        }}
        validationSchema={loginSchema}
      >
        {(formikProps) => (
          <View>
            <View style={loginStyles.inputContainer}>
              <TextInput
                style={[
                  loginStyles.inputField,
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
                autoCapitalize="none"
              />
              <TextInput
                style={[
                  loginStyles.inputField,
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
                autoCapitalize="none"
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
              <LogInButton
                onPress={formikProps.handleSubmit}
                title={"Ulogujte se"}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
