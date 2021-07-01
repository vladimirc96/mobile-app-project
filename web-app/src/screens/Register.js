import React from "react";
import "../css/Register.css";
import TextInput from "../components/ui/TextInput";
import { Formik } from "formik";
import * as yup from "yup";
import { isInError } from "../validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { login } from "../store/actions/authentication/authenticationActions";
import { registerUser } from "../store/actions/user/userActions";
import { Link } from "react-router-dom";

library.add(faUserCircle);

const registerSchema = yup.object({
  username: yup.string().required("Korisničko ime je obavezno."),
  password: yup
    .string()
    .required("Šifra je obavezna.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      `Mora da sadrži 8 karaktera, jedno veliko slovo,
      jedno malo slovo, jednu cifru i jedan specijalni karakter.`
    ),
  email: yup
    .string()
    .required("Email je obavezan.")
    .email("Email nije validan."),
  phoneNumber: yup.string().required("Broj telefona je obavezan."),
});

export default class Register extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column register-section">
        <div className="d-flex flex-column justify-content-center upper-part">
          <p className="p-2 header"> Kreirajte profil </p>
          <p className="p-2 sub-header">
            Već imate profil?
            <Link to="/">
              <a href="#" style={{ color: "#d1ad75", fontWeight: "650" }}>
                Prijavite se
              </a>
            </Link>
          </p>
        </div>
        <div className="d-flex flex-row justify-content-center form-section">
          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              phoneNumber: "",
              image: null,
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={registerSchema}
          >
            {(formikProps) => (
              <div className="fields column h-100">
                <div className="form-group">
                  <div className="d-flex justify-content-center">
                    {!formikProps.values.image ? (
                      <FontAwesomeIcon icon="user-circle" size="8x" />
                    ) : (
                      <img
                        className="picked-image"
                        src={URL.createObjectURL(formikProps.values.image)}
                      ></img>
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      style={{ marginTop: "5px" }}
                      type="file"
                      onChange={(event) =>
                        formikProps.setFieldValue(
                          "image",
                          event.target.files[0]
                        )
                      }
                    />
                  </div>
                </div>
                <div className="form-group">
                  <TextInput
                    name="username"
                    type="text"
                    placeholder="Korisničko ime"
                    value={formikProps.values.username}
                    onChange={formikProps.handleChange("username")}
                    onBlur={formikProps.handleBlur("username")}
                    classes={isInError(formikProps, "username")}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    name="password"
                    type="password"
                    placeholder="Lozinka"
                    value={formikProps.values.password}
                    onChange={formikProps.handleChange("password")}
                    onBlur={formikProps.handleBlur("password")}
                    classes={isInError(formikProps, "password")}
                  />
                  {formikProps.errors.password !== "Šifra je obavezna." ? (
                    <span style={{ fontSize: "13px" }}>
                      {formikProps.errors.password}
                    </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <TextInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formikProps.values.email}
                    onChange={formikProps.handleChange("email")}
                    onBlur={formikProps.handleBlur("email")}
                    classes={isInError(formikProps, "email")}
                  />
                </div>
                <div className="form-group">
                  <TextInput
                    name="phoneNumber"
                    type="text"
                    placeholder="Broj telefona"
                    value={formikProps.values.phoneNumber}
                    onChange={formikProps.handleChange("phoneNumber")}
                    onBlur={formikProps.handleBlur("phoneNumber")}
                    classes={isInError(formikProps, "phoneNumber")}
                  />
                </div>
                <div className="d-flex justify-content-center form-group">
                  <button
                    type="button"
                    className="btn gold-btn"
                    onClick={formikProps.handleSubmit}
                  >
                    REGISTRUJ SE
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
