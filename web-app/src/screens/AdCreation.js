import React, { Component } from 'react';
import "../css/Register.css";
import "../css/AdCreation.css";
import TextInput from "../components/ui/TextInput";

import { Formik, Form } from "formik";
import * as yup from "yup";
import { isInError } from "../validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const registerSchema = yup.object({
    username: yup.string().required("Korisničko ime je obavezno."),
  });
export default class AdCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          passwordVisible: true,
        };
      }
      toggleVisible = () => {
        this.setState((prevState) => {
          return {
            passwordVisible: !prevState.passwordVisible,
          };
        });
      };
      handleRegister = async (user) => {
        const formData = new FormData();
        Object.keys(user).forEach((key) => formData.append(key, user[key]));
        try {
          setTimeout(async () => {
            await this.props.register(formData, {
              username: user.username,
              password: user.password,
            });
          }, 500);
          // Swal.fire({
          //   text: "Uspešno ste se registrovali!",
          //   confirmButtonText: "Ok",
          // }).then((result) => {
          //   if (result.isConfirmed) {
          //     console.log("redirect");
          //     this.props.history.push("/");
          //   }
          // });
        } catch (err) {
          console.log(err);
        }
    };
    render() {
        return (
            <div className="ad-creation-container">
                <div className="ad-creation-screen-title">
                    <p className="ad-creation-screen-title-text">Postavi oglas</p>
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
                        if (!values.image) {
                            delete values.image;
                        }
                        this.handleRegister(values);
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
                                <div className="ad-creation-section-title">
                                    <p className="ad-creation-section-title-text"> Naslov oglasa</p>
                                    <div className="form-group">
                                        <TextInput
                                            name="username"
                                            type="text"
                                            placeholder="npr. Časovi nemačkog jezika"
                                            value={formikProps.values.username}
                                            onChange={formikProps.handleChange("username")}
                                            onBlur={formikProps.handleBlur("username")}
                                            classes={isInError(formikProps, "username")}
                                        />
                                    </div>
                                </div>
                                <div className="ad-creation-section-title">
                                    <p className="ad-creation-section-title-text"> Opis oglasa</p>
                                    <TextInput
                                        name="username"
                                        type="text"
                                        placeholder="Max. 500 karaktera"
                                        value={formikProps.values.username}
                                        onChange={formikProps.handleChange("username")}
                                        onBlur={formikProps.handleBlur("username")}
                                        classes={isInError(formikProps, "username")}
                                    />
                                </div>
                                <div className="ad-creation-section-title">
                                    <p className="ad-creation-section-title-text"> Kategorija</p>
                                </div>
                                <div className="ad-creation-section-title">
                                    <p className="ad-creation-section-title-text"> Cena</p>
                                </div>
                                <div className="ad-creation-section-title">
                                    <p className="ad-creation-section-title-text"> Tip oglasa</p>
                                </div>
                                <div className="d-flex justify-content-center form-group">
                                    <button
                                        type="button"
                                        className="btn gold-btn"
                                    >
                                        POSTAVI OGLAS
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