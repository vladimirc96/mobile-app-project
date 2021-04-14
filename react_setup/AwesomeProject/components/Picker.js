import React, { useState } from "react";
import { Modal, FlatList, View, Text, TouchableOpacity } from "react-native";
import { pickerStyle } from "../shared/Styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Picker(props) {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Text style={pickerStyle.fieldName}>{props.label}</Text>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={pickerStyle.fieldWrapper}>
          <View style={pickerStyle.field}>
            <Text style={pickerStyle.fieldText}>
              {props.items.find((item) => item.id === props.selectedValue.id)
                ? props.items.find((item) => item.id === props.selectedValue.id)
                    .name
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
              size={26}
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
                    <Text style={pickerStyle.textStyle}>{item.name}</Text>
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
