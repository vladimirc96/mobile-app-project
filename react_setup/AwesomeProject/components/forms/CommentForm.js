import React, { useState } from "react";
import { modalStyles } from "../../shared/modalStyles";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { AntDesign } from "@expo/vector-icons";

export default function CommentForm(props) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const handleChangePositive = async (formikProps, value) => {
    if (value) {
      setLike(true);
      setDislike(false);
    }
    if (!value) {
      setDislike(true);
      setLike(false);
    }
    await formikProps.setFieldValue("positive", value);
  };

  return (
    <ScrollView>
      <Formik
        initialValues={{
          userId: props.userId,
          username: "",
          comment: "",
          positive: null,
        }}
        onSubmit={(values) => {
          props.submitRating(values);
        }}
      >
        {(formikProps) => (
          <View style={modalStyles.modalInnerWrapComment}>
            <View style={modalStyles.closeButtonContainer}>
              <View></View>
              <Ionicons
                name="md-close"
                size={26}
                onPress={() => props.toggleModal()}
                style={modalStyles.closeButton}
                color="black"
              />
            </View>
            <View style={modalStyles.centeredWrap}>
              <View style={modalStyles.reviewTitle}>
                <Text style={modalStyles.reviewTitleText}>Oceni korisnika</Text>
              </View>
              <View style={modalStyles.ratingContainer}>
                <TouchableOpacity
                  onPress={() => handleChangePositive(formikProps, true)}
                >
                  {like ? (
                    <AntDesign name="like1" size={50} color="green" />
                  ) : (
                    <AntDesign name="like2" size={50} color="green" />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleChangePositive(formikProps, false)}
                >
                  {dislike ? (
                    <AntDesign name="dislike1" size={50} color="red" />
                  ) : (
                    <AntDesign name="dislike2" size={50} color="red" />
                  )}
                </TouchableOpacity>
              </View>
              <View style={modalStyles.commentHeadingContainer}>
                <View>
                  <Text style={modalStyles.commentHeading}>Vaše ime: </Text>
                </View>
                <View>
                  <Text style={modalStyles.innerText}>
                    {" "}
                    (ukoliko ne želite da ostanete anonimni){" "}
                  </Text>
                </View>
              </View>
              <TextInput
                style={modalStyles.nickname}
                onChangeText={formikProps.handleChange("username")}
                onBlur={formikProps.handleBlur("username")}
                value={formikProps.values.username}
              ></TextInput>
              <View style={modalStyles.commentHeadingContainer}>
                <Text style={modalStyles.commentHeading}>
                  Ostavite komentar:
                </Text>
              </View>
              <TextInput
                multiline={true}
                numberOfLines={6}
                textAlignVertical="top"
                style={modalStyles.textInput}
                onChangeText={formikProps.handleChange("comment")}
                onBlur={formikProps.handleBlur("comment")}
                value={formikProps.values.comment}
              ></TextInput>
              <TouchableOpacity onPress={formikProps.handleSubmit}>
                <View style={modalStyles.button}>
                  <Text style={modalStyles.buttonText}> Posalji </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
