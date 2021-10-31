import React, { Component } from 'react';
import { sendMail } from "../services/MailService";
import { Formik } from "formik";
import Swal from "sweetalert2";
import slika from './../assets/images/slika_telefon.png';

export default class ContactUs extends Component {

handleSubmit = async (mail) => {
    try {
        const formData = new FormData();
        Object.keys(mail).forEach((key) => {
        formData.append(key, mail[key]);
        });
        await sendMail(formData);
        Swal.fire({
            text: "Poruka uspesno poslata!",
            confirmButtonColor: "#d1ad75",
            confirmButtonText: "Ok",
        });
        console.log("sucess");
    } catch (err) {
        console.log(err);
    }
};

render() {
    return (
        <div className="contact-us-container">
            <Formik
                initialValues={{
                title: "",
                message: "",
                senderName: "",
                senderEmail: "",
                }}
                onSubmit={(values) => {
                this.handleSubmit({ ...values });
            }}
            >
                {(formikProps) => (
                    <div className="contact-form-wrap">
                        <div className="contact-form-flex">
                            <input className="contact-form-name"
                                placeholder="Ime"
                                name="senderName"
                                type="text"
                                value={formikProps.values.senderName}
                                onChange={formikProps.handleChange("senderName")}
                                onBlur={formikProps.handleBlur("senderName")}
                                >
                            </input>
                            <input className="contact-form-lastname"
                                placeholder="Email adresa"
                                name="senderEmail"
                                type="text"
                                value={formikProps.values.senderEmail}
                                onChange={formikProps.handleChange("senderEmail")}
                                onBlur={formikProps.handleBlur("senderEmail")}
                                >
                            </input>
                        </div>
                        <input className="contact-form-mail"
                            placeholder="Naslov"
                            name="title"
                            type="text"
                            value={formikProps.values.title}
                            onChange={formikProps.handleChange("title")}
                            onBlur={formikProps.handleBlur("title")}
                            >
                        </input>
                        <textarea className="contact-form-message"
                                placeholder="Poruka"
                                name="message"
                                type="text"
                                value={formikProps.values.message}
                                onChange={formikProps.handleChange("message")}
                                onBlur={formikProps.handleBlur("message")}
                                >
                        </textarea>
                        <div className="contact-button-container">
                            <button className="contact-button" onClick={formikProps.handleSubmit}>POSALJI PORUKU</button>
                        </div>
                    </div>
                )}
            </Formik>
            <div className="about-container">
                <div className="about-section">
                    <div className="about-section-flex">
                        <div className="about-title-container">
                            <h4 className="about-title">Da li postoji mobilna verzija?</h4>
                        </div>
                        <div className="about-description-container">
                            <p className="about-description">
                                Da! “Pronađi sam” je prvobitno nastao kao mobilna aplikacija, ali je prerastao u veb stranicu. Zarad lakšeg korišćenja i punog doživljaj preporučujemo Vam da je preuzmete putem sledećeg linka.
                            </p>
                            <button className="about-top-button">MOBILNA APLIKACIJA {">"}</button>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-section-flex">
                        <div className="about-title-container">
                            <h4 className="about-title">Kako postaviti premium oglas?</h4>
                        </div>
                        <div className="about-description-container">
                            <p className="about-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button className="about-bottom-button">POSTAVI PREMIUM OGLAS {">"}</button>
                        </div>
                    </div>
                </div>
                <div className="about-section-bottom">
                    <div className="about-section-flex">
                        <div className="about-title-container">
                                <h4 className="about-title">Razlika između Gold i Silver oglasa?</h4>
                        </div>
                        <div className="about-description-container">
                            <p className="about-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="about-heading">Naša misija</h1>
                <div className="bullet-section-first">
                    <div className="bullet-background-first">
                        <span className="bullet">1</span>
                    </div>
                    <div className="bullet-desc-container">
                        <p className="bullet-description">Da vredni ljudi, koji nude svoje znanje i veštine iz svih delatnosti budu lako dostupni onima koji su u potrazi za njima.</p>
                    </div>
                </div>
                <div className="bullet-section-second">
                    <div className="bullet-background-second">
                        <span className="bullet">2</span>
                    </div>
                    <div className="bullet-description-container">
                        <p className="bullet-description">Da što više korisnih usluga možete pronaći pomakom prsta, na jednom mestu, baš na Vašem mobilnom uređaju.</p>
                    </div>
                </div>
                <div className="bullet-section-third">
                    <div className="bullet-background-third">
                        <span className="bullet">3</span>
                    </div>
                    <div className="bullet-description-container">
                        <p className="bullet-description">Da što više korisnih usluga možete pronaći pomakom prsta, na jednom mestu, baš na Vašem mobilnom uređaju.</p>
                    </div>
                </div>
                <div className="about-image-container">
                    <img className="about-image" src={slika} alt="slika" />
                </div>
            </div>
            <div className="about-bottom-section">
                <div className="about-bottom-content">
                    <p className="about-bottom-text">Preuzmite mobilnu aplikaciju besplatno</p>
                    <button className="bottom-button">PREUZMI {">"}</button>
                </div>
            </div>
        </div>
    );
}
}
