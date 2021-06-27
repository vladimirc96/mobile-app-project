import React from 'react';
import '../css/Register.css';
import TextInput from '../components/ui/TextInput';
import {Formik} from 'formik';
import * as yup from "yup";
import { isInError } from '../validation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faUserCircle)


const registerSchema = yup.object({
    username: yup.string().required("Korisničko ime je obavezno."),
    password: yup
      .string()
      .required("Šifra je obavezna.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    email: yup
      .string()
      .required("Email je obavezan.")
      .email("Email nije validan."),
    phoneNumber: yup.string().required("Broj telefona je obavezan."),
  });

export default class Login extends React.Component {
    render(){
        return (
            <div className="d-flex flex-column register-section">
                <div className="d-flex flex-column justify-content-center upper-part">
                        <p className="p-2 header"> Kreirajte profil </p>
                        <p className="p-2 sub-header"> Već imate profil? Prijavite se </p>
                </div>
                <div className="d-flex flex-row justify-content-center form-section">
                    <div className="column h-100 justify-content-center">
                        <Formik
                            initialValues={{
                                username: "",
                                password: "",
                                email: "",
                                phoneNumber: "",
                            }}
                            onSubmit={(values) => {
                            }}
                            validationSchema={registerSchema}
                        >
                           {(formikProps) => (
                                <div>
                                    <div className="d-flex justify-content-center form-group">
                                        <FontAwesomeIcon icon="user-circle" size="8x"/>
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
                                            type="text"
                                            placeholder="Lozinka"
                                            value={formikProps.values.password} 
                                            onChange={formikProps.handleChange("password")}
                                            onBlur={formikProps.handleBlur("password")}
                                            classes={isInError(formikProps, "password")}
                                        />
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
                                        <button type="button" className="btn gold-btn">REGISTRUJ SE</button>
                                    </div>
                                </div>)}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    }

}