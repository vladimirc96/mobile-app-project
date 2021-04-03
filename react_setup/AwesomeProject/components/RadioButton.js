import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Dimensions } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
        <View style={styles.priceValueContainer}>
          <TextInput
            style={styles.priceInputField}
            placeholder="Upišite iznos..."
            placeholderTextColor="#ededed"
          />
          <View style={styles.priceCurrency}>
            <Text style={styles.radioText}>{prices[0].text}</Text>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                this.setState({
                  value: prices[0].key,
                });
              }}
            >
              {value === prices[0].key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <Text style={styles.radioText}>{prices[1].text}</Text>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                this.setState({
                  value: prices[1].key,
                });
              }}
            >
              {value === prices[1].key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.priceAgreementContainer}>
          <Text style={styles.agreementText}>{prices[2].text}</Text>
          <TouchableOpacity
            style={styles.radioCircle}
            onPress={() => {
              this.setState({
                value: prices[2].key,
              });
            }}
          >
            {value === prices[2].key && <View style={styles.selectedRb} />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  priceValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("0.25%"),
    alignSelf: "center",
    width: wp("75%"),
    borderBottomWidth: 1,
    borderColor: "white",
    backgroundColor: "#1e1c24",
    height: hp("4%"),
  },
  priceInputField: {
    alignSelf: "center",
    width: wp("40%"),
    paddingLeft: wp("1.5%"),
    fontSize: hp("2%"),
    fontFamily: "Roboto-Light",
    fontStyle: "italic",
    opacity: 0.8,
  },
  priceCurrency: {
    flexDirection: "row",
  },
  radioText: {
    marginLeft: wp("3%"),
    paddingTop: hp("0.5%"),
    width: wp("8%"),
    fontSize: hp("1.75%"),
    fontFamily: "Roboto-Bold",
    opacity: 0.8,
    color: "#ededed",
  },
  radioCircle: {
    height: hp("2%"),
    width: hp("2%"),
    marginTop: hp("0.75%"),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#87cefa",
    alignItems: "center",
    justifyContent: "center",
  },
  priceAgreementContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("0.25%"),
    alignSelf: "center",
    width: wp("75%"),
    backgroundColor: "#1e1c24",
    height: hp("4%"),
  },
  agreementText: {
    marginLeft: wp("1.5%"),
    paddingTop: hp("0.5%"),
    width: wp("20%"),
    fontSize: hp("1.9%"),
    fontWeight: "bold",
    color: "#ededed",
  },
  selectedRb: {
    width: hp("1.25%"),
    height: hp("1.25%"),
    borderRadius: 50,
    backgroundColor: "#87cefa",
  },
});
