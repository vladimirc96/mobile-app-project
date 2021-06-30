import React, { Component } from 'react';

export default class StartingBanner extends Component {
render() {
    return (
        <div class="layout_padding banner_section">
            <div class="container">
                <div class="row">
                    <div style={{width: "50%", marginTop: "2%"}}>
                        <p class="banner_taital" style={{textAlign: "left", paddingLeft: "2%", fontSize: "44px", fontWeight: "600" ,color: "#000000", lineHeight: "34px",
}}>Postanite deo </p>
                        <p class="banner_taital" style={{textAlign: "left", paddingLeft: "2%", fontSize: "44px", fontWeight: "600" , fontStyle: "italic", color: "#000000", lineHeight: "34px"}}>najveće baze usluga</p>
                        <p class="browse_text" style={{textAlign: "left", paddingLeft: "2%", fontSize: "44px", fontWeight: "600", color: "#ffffff",  lineHeight: "44px"}}>u Novom Sadu</p>
                        <div class="row" style={{width: "60%", marginLeft: "2%", marginTop: "5%"}}> 
                            <div class="banner_bt_set_ad" style={{width: "38%", marginLeft: "1%"}}>
                                <button class="read_bt" style={{width: "100%", height: "30px", fontSize: "16px", borderRadius: "14px", backgroundColor: "#2f2f2f", color: "#ffffff"}}>Postavi oglas</button>
                            </div>
                            <div class="banner_bt_find_ad" style={{width: "38%", marginLeft: "2%",}}>
                                <button class="read_bt" style={{width: "100%", height: "30px", fontSize: "16px", borderWidth: "2px", borderColor: "#ffffff", borderRadius: "14px", backgroundColor: "#565656", opacity: "50%", color: "#ffffff"}}>Pronađi oglas</button>
                            </div>
                        </div>
                    </div>
                    <div class="image_section"></div>
                </div>
            </div>
        </div>
    );
}
}