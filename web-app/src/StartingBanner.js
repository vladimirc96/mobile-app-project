import React, { Component } from 'react';
import logo_naziv from "./assets/images/logo_naziv.png"
import log_in_icon from "./assets/images/doctor-icon.png"

export default class StartingBanner extends Component {
render() {
    return (
        <div class="layout_padding banner_section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="banner_taital">Najveća baza svih potrebnih usluga u Novom Sadu</h1>
                        <p class="browse_text">Ukoliko i Vi imate oglas koji želite da postavite</p>
                        <div class="banner_bt">
                            <button class="read_bt">Kliknite ovde</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}