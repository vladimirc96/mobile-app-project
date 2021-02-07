import React from "react";
import { Text } from "react-native";
import { errorMessageStyles } from "../shared/Styles";

export default function ErrorMessage({ touched, errorMessage }) {
  return <Text style={errorMessageStyles.errorText}> {touched && errorMessage} </Text>;
}
