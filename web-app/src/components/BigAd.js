import React from 'react'
import ad from "./../assets/images/ad.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faMapMarkerAlt, faPhoneAlt, faEnvelope, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faMapMarkerAlt, faPhoneAlt, faEnvelope, faThumbsUp, faThumbsDown);

class BigAd extends React.Component{


    render(){
        return(
            <div className="ad-container">
                <div class="row" style={{justifyContent: 'space-around', marginBottom: "25px", height:"35px" }}>
                    <div style={{width: "40%", textAlign:"center"}}>
                        <h3> Individualni treninzi kosarke </h3>
                    </div>
                </div>
                <div className="row" style={{width: "60%", marginTop: "4%", marginLeft: "20%", borderRadius: "10px", boxShadow: "0px 0px 4px 2px #bdbdbd"}}>
                    <div style={{width: "35%", marginLeft: "2%", marginTop: "2%", marginBottom: "2%" }}>
                        <img src={ad} alt="" style={{width:"100%", height:"100%"}} />
                    </div>
                    <div style={{marginLeft:"2%", marginBottom:"2%", marginTop:"2%", width: "60%"}}>
                        <p style={{fontSize: "20px", fontWeight: "600", marginBottom:"5%", paddingLeft: "10%"}}>
                            <FontAwesomeIcon icon="user" style={{marginRight:"10px"}} />
                            Korisnik: Slobodan Sarenac
                        </p>
                        <p style={{fontSize: "20px", fontWeight: "600",marginBottom:"5%", paddingLeft: "10%"}}>
                            <FontAwesomeIcon icon="map-marker-alt" style={{marginRight:"10px"}} />
                            Lokacija: Novo Naselje
                        </p>
                        <p style={{fontSize: "20px", fontWeight: "600",marginBottom:"5%", paddingLeft: "10%"}}>
                            <FontAwesomeIcon icon="envelope" style={{marginRight:"10px"}} />
                            E Mail: test@gmail.com
                        </p>
                        <p style={{fontSize: "20px", fontWeight: "600",marginBottom:"5%", paddingLeft: "10%"}}>
                            <FontAwesomeIcon icon="phone-alt" style={{marginRight:"10px"}} />
                            Broj Telefona: 062 489 22 47
                        </p>
                        <p style={{paddingLeft: "10%"}}>
                            <FontAwesomeIcon icon="thumbs-up" style={{marginRight:"10px"}} />
                            <span style={{marginRight:"2%", fontSize: "20px",  fontWeight: "600"}}>100</span>
                            <FontAwesomeIcon icon="thumbs-down" style={{marginRight:"5%"}} />
                            <span style={{fontSize: "20px",  fontWeight: "600"}}>20</span>
                        </p>
                    </div>
                </div>
                <div style={{alignSelf: "center", marginTop: "2%", marginLeft:"40%", width: "20%", height:"4%", backgroundColor:"#5fd2ff", textAlign: "center", borderRadius:"24px"}}>
                    <p style={{color:"#ffffff", fontSize: "22px", fontWeight: "500"}}>1000 RSD</p>
                </div>
                <div className="row" style={{marginLeft: "3%", width: "94%", marginTop:"2%", borderRadius: "10px", boxShadow: "0px 0px 4px 2px #bdbdbd"}}>
                    <div className="col-sm-12">
                        <h5 style={{marginTop: "1%", marginLeft:"20px", lineHeight: "30px"}}>
                            Nullam metus mi, ultricies eu est id, bibendum vestibulum felis. Integer id ipsum vulputate, faucibus ipsum at, pretium ipsum. Morbi in tristique odio, molestie sodales mi. Vestibulum pulvinar magna massa, in ultricies ipsum faucibus eget. Sed eleifend feugiat tellus, quis sollicitudin risus ullamcorper ut. Nunc egestas, sem eget varius accumsan, ligula turpis porttitor dolor, vel molestie augue velit sed enim. Praesent ultrices finibus purus, et semper nulla ultricies a. Ut eleifend enim libero, eu pharetra lorem elementum efficitur. Vivamus quis efficitur sem.
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default BigAd