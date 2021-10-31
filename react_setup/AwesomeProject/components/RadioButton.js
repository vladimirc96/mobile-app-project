import React, { Component } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

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
  componentDidMount() {
    if (this.props.agreement) {
      this.setState({ value: prices[2].key });
    } else if (this.props.price) {
      this.setState({ value: this.props.currency });
    }
  }
  render() {
    const { value } = this.state;
    return (
      <View>
        <View style={radioButtonStyles.priceValueContainer}>
          <TextInput
            keyboardType="numeric"
            style={radioButtonStyles.priceInputField}
            placeholder="Upišite iznos..."
            placeholderTextColor="#ededed"
            editable={this.state.value !== prices[2].key}
            onChangeText={this.props.handleChangePrice}
            value={this.props.price != 0 ? this.props.price : ""}
            onBlur={this.props.formikProps.handleBlur("price")}
          />
          <View style={radioButtonStyles.priceCurrency}>
            <Text style={radioButtonStyles.radioText}>{prices[0].text}</Text>
            <TouchableOpacity
              style={radioButtonStyles.radioCircle}
              onPress={() => {
                this.setState({
                  value: prices[0].key,
                });
                this.props.handleChangeCurrency(this.state.value);
                this.props.handleChangeAgreement(false);
              }}
            >
              {value === prices[0].key && (
                <View style={radioButtonStyles.selectedRb} />
              )}
            </TouchableOpacity>
            <Text style={radioButtonStyles.radioText}>{prices[1].text}</Text>
            <TouchableOpacity
              style={radioButtonStyles.radioCircle}
              onPress={() => {
                this.setState({
                  value: prices[1].key,
                });
                this.props.handleChangeCurrency(this.state.value);
                this.props.handleChangeAgreement(false);
              }}
            >
              {value === prices[1].key && (
                <View style={radioButtonStyles.selectedRb} />
              )}
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
              this.props.handleChangeCurrency("");
              this.props.handleChangeAgreement(true);
            }}
          >
            {value === prices[2].key && (
              <View style={radioButtonStyles.selectedRb} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
