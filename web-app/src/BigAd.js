import './App.css';
import React from 'react'
import ad from "./assets/images/ad.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faMapMarkerAlt, faPhoneAlt, faEnvelope, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faMapMarkerAlt, faPhoneAlt, faEnvelope, faThumbsUp, faThumbsDown);

class BigAd extends React.Component{


    render(){
        return(
            <div className="ad-container">
                <div className="row">
                    <div className="col-sm-12" style={{textAlign:"center", marginBottom: "25px"}}>
                        <h3> Individualni treninzi kosarke </h3>
                    </div>
                        <div className="col-sm-3">
                            <img src={ad} alt="" style={{width:"100%", height:"100%"}} />
                        </div>
                        <div className="col-sm-4" style={{marginLeft:"25px"}}>
                            <h5 style={{marginBottom:"7.5%"}}>
                                <FontAwesomeIcon icon="user" style={{marginRight:"10px"}} />
                                Korisnik: Slobodan Sarenac
                            </h5>
                            <h5 style={{marginBottom:"7.5%"}}>
                                <FontAwesomeIcon icon="map-marker-alt" style={{marginRight:"10px"}} />
                                Lokacija: Novo Naselje
                            </h5>
                            <h5 style={{marginBottom:"7.5%"}}>
                                <FontAwesomeIcon icon="envelope" style={{marginRight:"10px"}} />
                                E Mail: test@gmail.com
                            </h5>
                            <h5 style={{marginBottom:"7.5%"}}>
                                <FontAwesomeIcon icon="phone-alt" style={{marginRight:"10px"}} />
                                Broj Telefona: 062 489 22 47
                            </h5>
                            <h5>
                                <FontAwesomeIcon icon="thumbs-up" style={{marginRight:"10px"}} />
                                <span style={{marginRight:"20px"}}>100</span>
                                <FontAwesomeIcon icon="thumbs-down" style={{marginRight:"10px"}} />
                                <span>20</span>
                            </h5>
                        </div>
                        <div className="col-sm-2" style={{marginLeft:"22.5%"}}>
                            <div style={{width: "100%", height:"20%", backgroundColor: "#D6BF74", textAlign: "center", paddingTop:"7.5%"}}>
                                <h5 style={{color:"#ffffff"}}>1000 RSD</h5>
                            </div>
                        </div>
                    <div className="row" style={{marginTop:"35px"}}>
                        <div className="col-sm-12">
                            <h5 style={{marginLeft:"20px", lineHeight: "30px"}}>
                                Nullam metus mi, ultricies eu est id, bibendum vestibulum felis. Integer id ipsum vulputate, faucibus ipsum at, pretium ipsum. Morbi in tristique odio, molestie sodales mi. Vestibulum pulvinar magna massa, in ultricies ipsum faucibus eget. Sed eleifend feugiat tellus, quis sollicitudin risus ullamcorper ut. Nunc egestas, sem eget varius accumsan, ligula turpis porttitor dolor, vel molestie augue velit sed enim. Praesent ultrices finibus purus, et semper nulla ultricies a. Ut eleifend enim libero, eu pharetra lorem elementum efficitur. Vivamus quis efficitur sem.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BigAd