import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { EditProfileButton } from "../Buttons";
import { AntDesign } from "@expo/vector-icons";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { contactUsStyles } from "../../shared/Styles";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  getErrorStyle,
  getErrorPlaceholder,
} from "../../shared/ValidationUtil";
import * as ImagePicker from "expo-image-picker";
import PermissionService from "../../services/PermissionService";
import { Dimensions } from "react-native";

const TITLE_MAX_LENGTH = 50;
const MESSAGE_MAX_LENGTH = 1000;

const windowHeight = Dimensions.get("window").height;

const contactSchema = yup.object({
  title: yup.string().required("Naslov je obavezan.").max(TITLE_MAX_LENGTH),
  message: yup.string().required().max(MESSAGE_MAX_LENGTH),
  senderName: yup.string().required(),
  senderEmail: yup.string().required().email(),
});

export default function ContactUsForm(props) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const permissionGranted =
      await PermissionService.requestMediaLibraryPermission();
    if (!permissionGranted) {
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="position">
        <Formik
          initialValues={{
            title: "",
            message: "",
            senderName: "",
            senderEmail: "",
          }}
          onSubmit={(values) => {
            props.handleSubmit({ ...values, image });
          }}
          validationSchema={contactSchema}
        >
          {(formikProps) => (
            <View style={contactUsStyles.mainContainer}>
              <View style={contactUsStyles.backForwardContainer}></View>
              <View style={contactUsStyles.inputFieldContainer}>
                <Text style={contactUsStyles.fieldNameBold}>
                  Imate pitanje, sugestiju ili želite da postanete deo tima?
                  Pošaljite nam poruku!
                </Text>
                <Text style={contactUsStyles.fieldName}> Naslov poruke </Text>
                <TextInput
                  style={[
                    contactUsStyles.adNameField,
                    getErrorStyle(
                      formikProps.errors.title,
                      formikProps.touched.title
                    ),
                  ]}
                  placeholder="Max. 50 karaktera."
                  placeholderTextColor={getErrorPlaceholder(
                    formikProps.errors.title,
                    formikProps.touched.title
                  )}
                  onChangeText={formikProps.handleChange("title")}
                  onBlur={formikProps.handleBlur("title")}
                  value={formikProps.values.title}
                  maxLength={TITLE_MAX_LENGTH}
                />
              </View>
              <View style={contactUsStyles.inputFieldContainer}>
                <Text style={contactUsStyles.fieldName}>Vaša poruka</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={6}
                  style={[
                    contactUsStyles.adDescriptionField,
                    getErrorStyle(
                      formikProps.errors.message,
                      formikProps.touched.message
                    ),
                  ]}
                  placeholder="Max. 1000 karaktera."
                  placeholderTextColor={getErrorPlaceholder(
                    formikProps.errors.message,
                    formikProps.touched.message
                  )}
                  textAlignVertical="top"
                  onChangeText={formikProps.handleChange("message")}
                  onBlur={formikProps.handleBlur("message")}
                  value={formikProps.values.message}
                  maxLength={MESSAGE_MAX_LENGTH}
                />
              </View>
              <View style={contactUsStyles.inputFieldContainerWithMargin}>
                <Text style={contactUsStyles.fieldNameBold}>
                  Naišli ste na grešku? Okačite screenshoot, kako bi naš tim
                  mogao da je popravi
                </Text>
                <Text style={contactUsStyles.fieldName}>Fotografija</Text>
                {!image ? (
                  <TouchableOpacity onPress={pickImage}>
                    <View style={contactUsStyles.pickImageContainer}>
                      <View style={contactUsStyles.pickImageAdditional}>
                        <Text style={contactUsStyles.pickingImage}>
                          Izaberi sliku
                        </Text>
                        <AntDesign
                          name="pluscircleo"
                          style={contactUsStyles.plusIcon}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={contactUsStyles.pickImageContainer}>
                    <View style={contactUsStyles.pickImageAdditional}>
                      <Text style={contactUsStyles.pickingImage}>
                        Slika uspešno sačuvana
                      </Text>
                    </View>
                  </View>
                )}
              </View>
              <View style={contactUsStyles.inputFieldContainerWithMargin}>
                <Text style={contactUsStyles.fieldName}> Vaši podaci </Text>
                <TextInput
                  style={[
                    contactUsStyles.adNameField,
                    getErrorStyle(
                      formikProps.errors.senderName,
                      formikProps.touched.senderName
                    ),
                  ]}
                  placeholder="Ime i prezime"
                  placeholderTextColor={getErrorPlaceholder(
                    formikProps.errors.senderName,
                    formikProps.touched.senderName
                  )}
                  onChangeText={formikProps.handleChange("senderName")}
                  onBlur={formikProps.handleBlur("senderName")}
                  value={formikProps.values.senderName}
                />
                <TextInput
                  style={[
                    contactUsStyles.adNameField,
                    getErrorStyle(
                      formikProps.errors.senderEmail,
                      formikProps.touched.senderEmail
                    ),
                  ]}
                  placeholder="E-mail adresa"
                  placeholderTextColor={getErrorPlaceholder(
                    formikProps.errors.senderEmail,
                    formikProps.touched.senderEmail
                  )}
                  onChangeText={formikProps.handleChange("senderEmail")}
                  onBlur={formikProps.handleBlur("senderEmail")}
                  value={formikProps.values.senderEmail}
                  autoCapitalize="none"
                />
              </View>

              <EditProfileButton
                title={"Pošalji"}
                onPress={formikProps.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
