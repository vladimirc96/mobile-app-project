import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { radioButtonStyles } from "../shared/Styles";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const prices = [
  {
    key: "RSD",
    text: "RSD",
  },
  {
    key: "EUR",
    text: "EUR",
  },
  {
    key: "Cena po dogovoru",
    text: "Dogovor",
  },
];

export default class RadioButton extends Component {
  state = {
    value: "RSD",
  };

  render() {
    const { value } = this.state;

    return (
      <View>
        <View style={radioButtonStyles.priceValueContainer}>
          <TextInput
            style={radioButtonStyles.priceInputField}
            placeholder="Upišite iznos..."
            placeholderTextColor="#ededed"
          />
          <View style={radioButtonStyles.priceCurrency}>
            <Text style={radioButtonStyles.radioText}>{prices[0].text}</Text>
            <TouchableOpacity
              style={radioButtonStyles.radioCircle}
              onPress={() => {
                this.setState({
                  value: prices[0].key,
                });
              }}
            >
              {value === prices[0].key && <View style={radioButtonStyles.selectedRb} />}
            </TouchableOpacity>
            <Text style={radioButtonStyles.radioText}>{prices[1].text}</Text>
            <TouchableOpacity
              style={radioButtonStyles.radioCircle}
              onPress={() => {
                this.setState({
                  value: prices[1].key,
                });
              }}
            >
              {value === prices[1].key && <View style={radioButtonStyles.selectedRb} />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={radioButtonStyles.priceAgreementContainer}>
          <Text style={radioButtonStyles.agreementText}>{prices[2].text}</Text>
          <TouchableOpacity
            style={radioButtonStyles.radioCircle}
            onPress={() => {
              this.setState({
                value: prices[2].key,
              });
            }}
          >
            {value === prices[2].key && <View style={radioButtonStyles.selectedRb} />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
