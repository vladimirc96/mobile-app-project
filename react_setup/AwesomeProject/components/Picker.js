import React, { useState, useEffect } from "react";
import { Modal, FlatList, View, Text, TouchableOpacity } from "react-native";
import { pickerStyle } from "../shared/pickerStyle";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Picker(props) {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={[pickerStyle.fieldWrapper, props.fieldWrapperStyle]}>
          <View style={[pickerStyle.field, props.fieldStyle]}>
            <Text style={[pickerStyle.fieldText, props.fieldTextStyle]}>
              {props.items.find((item) => item.id === props.selectedValue.id)
                ? props.items
                    .find((item) => item.id === props.selectedValue.id)
                    .name.replace(/(\r\n|\n|\r)/gm, " ")
                : ""}
            </Text>
            <AntDesign name="downcircleo" style={pickerStyle.caretIcon} />
          </View>
        </View>
      </TouchableOpacity>
      <Modal transparent={true} visible={visible} animationType="slide">
        <View style={pickerStyle.centeredView}>
          <View style={pickerStyle.modalView}>
            <Ionicons
              name="md-close"
              size={wp("6.75%")}
              onPress={() => setVisible(false)}
              style={pickerStyle.closeIcon}
              color="black"
            />
            <FlatList
              data={props.items}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      props.handleChangeValue(item);
                      setVisible(false);
                    }}
                  >
                    <Text style={pickerStyle.textStyle}>
                      {item.name.replace(/\n/g, " ")}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
            ></FlatList>
          </View>
        </View>
      </Modal>
    </View>
  );
}
