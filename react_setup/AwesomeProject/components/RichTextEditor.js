import React from "react";
import {
  actions,
  getContentCSS,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  StyleSheet,
  Modal,
  ScrollView,
  Text,
  View,
  Button,
} from "react-native";
import { showPopup, confirmButton, rejectButton } from "../shared/AlertPopup";
import { CONFIRM_CHANGES_MESSAGE } from "../constants/AlertPopup";

export default class RichTextEditor extends React.Component {
  handleChangeHtml = (html) => {
    this.props.handleChangeRichText(this.props.formikProps, html);
  };

  handleConfirm = () => {
    this.props.handleChangeVisible(false, this.props.formikProps);
    this.props.handleChangeRichText(this.props.formikProps, "");
  };

  handleReject = () => {};

  onCancel = () => {
    const buttons = [
      confirmButton(this.handleConfirm),
      rejectButton(this.handleReject),
    ];
    if (this.props.html !== "") {
      showPopup("", CONFIRM_CHANGES_MESSAGE, buttons);
    } else {
      this.props.handleChangeVisible(false, this.props.formikProps);
    }
  };

  onSave = () => {
    this.props.handleChangeRichText(this.props.formikProps, this.props.html);
    this.props.handleChangeVisible(false, this.props.formikProps);
  };

  richText = React.createRef();

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.visible}
        style={styles.modal}
      >
        <View style={styles.mainContainer}>
          <ScrollView style={styles.container}>
            <Text style={styles.text}>Opis oglasa</Text>
            <RichEditor
              disabled={false}
              containerStyle={styles.editor}
              ref={this.richText}
              style={styles.rich}
              initialContentHTML={this.props.html}
              placeholder={"Unesite opis ovde"}
              onChange={this.handleChangeHtml}
            />
            <RichToolbar
              style={[styles.richBar]}
              editor={this.richText}
              disabled={false}
              iconTint={"black"}
              selectedIconTint={"pink"}
              disabledIconTint={"purple"}
              iconSize={40}
              actions={[
                actions.setBold,
                actions.setItalic,
                actions.insertBulletsList,
                actions.insertOrderedList,
                actions.keyboard,
                actions.setStrikethrough,
                actions.setUnderline,
                actions.removeFormat,
                actions.undo,
                actions.redo,
              ]}
            />
            <View style={styles.footer}>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button title="Sačuvaj" onPress={this.onSave}></Button>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={styles.button}>
                  <Button title="Izađi" onPress={this.onCancel}></Button>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  /********************************/
  /* styles for html tags */
  a: {
    fontWeight: "bold",
    color: "purple",
  },
  div: {
    fontFamily: "monospace",
  },
  p: {
    fontSize: 30,
  },
  /*******************************/
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    height: hp("100%"),
  },
  editor: {
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
  },
  rich: {
    minHeight: hp("82%"),
    flex: 1,
  },
  richBar: {
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tib: {
    textAlign: "center",
    color: "#515156",
  },
  mainContainer: {
    alignSelf: "center",
    width: wp("100%"),
    height: hp("100%"),
  },
  modal: {
    height: hp("100%"),
  },
  footer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "black",
    width: wp("100%"),
  },
  buttonContainer: {
    width: wp("60%"),
    marginTop: hp("1.5%"),
    flexDirection: "row",
    alignSelf: "center",
  },
  button: {
    flex: 10,
  },
});
