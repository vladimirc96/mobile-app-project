import React, { Component } from 'react';
import bullet_circle from "./assets/images/white_bullet_circle.png"
import white_log_in_icon from "./assets/images/white_login.png"
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class ContactUs extends Component {
render() {
    return (
        <div class="container">
            <div class="contact_us_section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="contact_us_taital">Naišli ste na grešku ili imate pitanje? Pišite nam bez ustručavanja</h1>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="input_main">
                                        <div class="container">
                                            <div class="form-group">
                                                <input type="text" class="email-bt" placeholder="Vaše ime" name="Name"></input>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="email-bt" placeholder="E-mail" name="Email"></input>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group contact_us_personal_info">
                                        <textarea class="massage-bt" placeholder="Vaša poruka" rows="5" id="comment" name="text"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact_button_section">
                        <button class="contact_us_send_bt"><a href="#"><span class="doctor"></span>Pošalji</a></button>
                    </div>
                </div>
            </div>
        </div>           
    );
}
}