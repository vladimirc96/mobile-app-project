import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { EditProfileButton } from "../Buttons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { contactUsStyles } from "../../shared/Styles";
import { ScrollView } from "react-native-gesture-handler";

const contactSchema = yup.object({
  title: yup.string().required("Naslov je obavezan.").max(50),
  message: yup.string().required().max(1000),
  name: yup.string().required(),
  email: yup.string().required().email(),
});

export default function ContactUsForm(props) {
  return (
    <ScrollView>
      <Formik
        initialValues={{
          title: "",
          message: "",
          name: "",
          email: "",
        }}
        onSubmit={(values) => {
          props.handleSubmit(values);
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
                style={contactUsStyles.adNameField}
                placeholder="Max. 50 karaktera."
                placeholderTextColor="#ededed"
                onChangeText={formikProps.handleChange("title")}
                onBlur={formikProps.handleBlur("title")}
              />
            </View>
            <View style={contactUsStyles.inputFieldContainer}>
              <Text style={contactUsStyles.fieldName}>Vaša poruka</Text>
              <TextInput
                multiline={true}
                numberOfLines={6}
                style={contactUsStyles.adDescriptionField}
                placeholder="Max. 1000 karaktera."
                placeholderTextColor="#ededed"
              />
            </View>
            <View style={contactUsStyles.inputFieldContainerWithMargin}>
              <Text style={contactUsStyles.fieldNameBold}>
                Naišli ste na grešku? Okačite screenshoot, kako bi naš tim mogao
                da je popravi
              </Text>
              <Text style={contactUsStyles.fieldName}>Fotografija</Text>
              <TouchableOpacity onPress={() => console.log("press")}>
                <View style={contactUsStyles.pickImageContainer}>
                  <View style={contactUsStyles.pickImageAdditional}>
                    <Text style={contactUsStyles.pickingImage}>
                      {" "}
                      Izaberi sliku
                    </Text>
                    <AntDesign
                      name="pluscircleo"
                      style={contactUsStyles.plusIcon}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={contactUsStyles.inputFieldContainerWithMargin}>
              <Text style={contactUsStyles.fieldName}> Vaši podaci </Text>
              <TextInput
                style={contactUsStyles.adNameField}
                placeholder="Ime"
                placeholderTextColor="#ededed"
                onChangeText={formikProps.handleChange("email")}
                onBlur={formikProps.handleBlur("email")}
              />
              <TextInput
                style={contactUsStyles.adNameField}
                placeholder="E-mail adresa"
                placeholderTextColor="#ededed"
                onChangeText={formikProps.handleChange("email")}
                onBlur={formikProps.handleBlur("email")}
              />
            </View>
            <EditProfileButton title={"Posalji"} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
