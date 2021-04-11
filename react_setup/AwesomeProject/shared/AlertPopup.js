import React from "react";
import { Alert } from "react-native";

export const showPopup = (title, message, buttons) => {
  Alert.alert(title, message, buttons);
};

export const confirmButton = (onPress) => {
  return {
    text: "Da",
    onPress,
  };
};

export const rejectButton = (onPress) => {
  return {
    text: "Ne",
    onPress,
  };
};
