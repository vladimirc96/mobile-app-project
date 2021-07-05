import React, { Component } from 'react';
import slika from './../assets/images/slika_telefon.png';

export default class ContactUs extends Component {
render() {
    return (
        <div style={{backgroundColor: "#F8F8F8"}}>
            <div style={{paddingLeft: "257px", paddingRight: "260px"}}>
            <div style={{height: "382.5px", borderBottom: "1px solid #D9D9D9"}}>
                <div style={{paddingTop: "73.5px", display: "flex"}}>
                    <div style={{width: "442px", marginRight: "132px"}}>
                            <h4 style={{fontWeight: 700, fontSize: "40px", lineHeight: "52px", fontFamily :"Montserrat"}}>Da li postoji mobilna verzija?</h4>
                    </div>
                    <div style={{width:"829px"}}>
                            <p style={{fontWeight: 400, fontSize: "21px", marginBottom: "54px", fontFamily :"Montserrat"}}>
                                Da! “Pronađi sam” je prvobitno nastao kao mobilna aplikacija, ali je prerastao u veb stranicu. Zarad lakšeg korišćenja i punog doživljaj preporučujemo Vam da je preuzmete putem sledećeg linka.
                            </p>
                            <button style={{width: "343px", height: "74px", borderRadius: "59px", backgroundColor: "#000000", color: "#FFFFFF", fontWeight: 700, fontSize: "21px", fontFamily :"Montserrat"}}>MOBILNA APLIKACIJA {">"}</button>
                    </div>
                </div>
            </div>
            <div style={{height: "382.5px", borderBottom: "1px solid #D9D9D9"}}>
                <div style={{paddingTop: "73.5px", display: "flex"}}>
                    <div style={{width: "442px", marginRight: "132px"}}>
                            <h4 style={{fontWeight: 700, fontSize: "40px", lineHeight: "52px", fontFamily :"Montserrat"}}>Kako postaviti premium oglas?</h4>
                    </div>
                    <div style={{width:"829px"}}>
                            <p style={{fontWeight: 400, fontSize: "21px", marginBottom: "54px", fontFamily :"Montserrat"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button style={{width: "407px", height: "74px", borderRadius: "59px", backgroundColor: "#000000", color: "#FFFFFF", fontWeight: 700, fontSize: "21px", fontFamily :"Montserrat"}}>POSTAVI PREMIUM OGLAS {">"}</button>
                    </div>
                </div>
            </div>
            <div style={{height: "381px"}}>
                <div style={{paddingTop: "73.5px", display: "flex"}}>
                    <div style={{width: "442px", marginRight: "132px"}}>
                            <h4 style={{fontWeight: 700, fontSize: "40px", lineHeight: "52px", fontFamily :"Montserrat"}}>Razlika između Gold i Silver oglasa?</h4>
                    </div>
                    <div style={{width:"829px"}}>
                            <p style={{fontWeight: 400, fontSize: "21px", marginBottom: "54px", fontFamily :"Montserrat"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                    </div>
                </div>
            </div>
            <h1 style={{textAlign: "center", fontSize: "56px", lineHeight: "56px", fontFamily :"Montserrat"}}>Naša misija</h1>
            <div style={{display: "flex", height: "224px", borderBottom: "1px solid #D9D9D9"}}>
                <div style={{backgroundColor: "#D1AD75", height: "74px", width: "74px", borderRadius: "246px", marginTop: "102px", marginLeft:"63px", textAlign: "center", verticalAlign: "middle"}}>
                    <span style={{fontSize: "56px", lineHeight: "70px", color: "#FFFFFF"}}>1</span>
                </div>
                <div style={{marginRight: "91px", marginLeft:"65px", marginTop: "107px", width :"1200px"}}>
                        <p style={{fontSize: "21px", lineHeight: "34.65px", fontWeight: "400", fontFamily :"Montserrat"}}>Da vredni ljudi, koji nude svoje znanje i veštine iz svih delatnosti budu lako dostupni onima koji su u potrazi za njima.</p>
                </div>
            </div>
            <div style={{display: "flex", height: "178px", borderBottom: "1px solid #D9D9D9"}}>
                <div style={{backgroundColor: "#D1AD75", height: "74px", width: "74px", borderRadius: "246px", marginTop: "49px", marginLeft:"63px", textAlign: "center", verticalAlign: "middle"}}>
                    <span style={{fontSize: "56px", lineHeight: "70px", color: "#FFFFFF"}}>2</span>
                </div>
                <div style={{marginRight: "91px", marginLeft:"65px", marginTop: "54px", width :"1200px"}}>
                        <p style={{fontSize: "21px", lineHeight: "34.65px", fontWeight: "400", fontFamily :"Montserrat"}}>Da što više korisnih usluga možete pronaći pomakom prsta, na jednom mestu, baš na Vašem mobilnom uređaju.</p>
                </div>
            </div>
            <div style={{display: "flex", height: "209px"}}>
                <div style={{backgroundColor: "#D1AD75", height: "74px", width: "74px", borderRadius: "246px", marginTop: "49px", marginLeft:"63px", textAlign: "center", verticalAlign: "middle"}}>
                    <span style={{fontSize: "56px", lineHeight: "70px", color: "#FFFFFF"}}>3</span>
                </div>
                <div style={{marginRight: "91px", marginLeft:"65px", marginTop: "54px", width :"1200px"}}>
                        <p style={{fontSize: "21px", lineHeight: "34.65px", fontWeight: "400", fontFamily :"Montserrat"}}>Da što više korisnih usluga možete pronaći pomakom prsta, na jednom mestu, baš na Vašem mobilnom uređaju.</p>
                </div>
            </div>
            <div style={{marginBottom: "115px"}}>
                <img src={slika} alt="slika" />
            </div>
        </div>
        <div style={{height: "242px", backgroundColor: "#D1AD75"}}>
            <div style={{paddingTop:"65px", textAlign: "center"}}>
                <p style={{fontSize: "21px", lineHeight: "34.65px", fontWeight: "700", fontFamily: "Montserrat", color: "#FFFFFF", marginBottom: "8px"}}>Preuzmite mobilnu aplikaciju besplatno</p>
                <button style={{width: "309px", height: "74px", borderRadius: "59px", backgroundColor: "#FFFFFF", color: "#000000", fontWeight: 700, fontSize: "21px", fontFamily :"Montserrat"}}>PREUZMI {">"}</button>
            </div>
        </div>
        </div>
    );
}
}

/* <div class="container">
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
            <button class="contact_us_send_bt"><a href="/"><span class="doctor"></span>Pošalji</a></button>
        </div>
    </div>
</div>
</div>            */