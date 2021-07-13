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
                <div className="row big-ad-title">
                    <div style={{width: "40%", textAlign:"center"}}>
                        <h3> Individualni treninzi kosarke </h3>
                    </div>
                </div>
                <div className="big-ad-details-container">
                    <div className="row">
                        <div className="big-ad-image">
                            <img src={ad} alt="" style={{width:"100%", height:"100%"}} />
                        </div>
                        <div className="big-ad-details">
                            <p className="big-ad-details-text">
                                <FontAwesomeIcon icon="user" style={{marginRight:"10px"}} />
                                Korisnik: Slobodan Sarenac
                            </p>
                            <p className="big-ad-details-text">
                                <FontAwesomeIcon icon="map-marker-alt" style={{marginRight:"10px"}} />
                                Lokacija: Novo Naselje
                            </p>
                            <p className="big-ad-details-text">
                                <FontAwesomeIcon icon="envelope" style={{marginRight:"10px"}} />
                                E Mail: test@gmail.com
                            </p>
                            <p className="big-ad-details-text">
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
                </div>
                <div className="big-ad-price-box">
                    <p className="big-ad-price-text">1000 RSD</p>
                </div>
                <div className="big-ad-description">
                    <p className="big-ad-description-text">
                        Nullam metus mi, ultricies eu est id, bibendum vestibulum felis. Integer id ipsum vulputate, faucibus ipsum at, pretium ipsum. Morbi in tristique odio, molestie sodales mi. Vestibulum pulvinar magna massa, in ultricies ipsum faucibus eget. Sed eleifend feugiat tellus, quis sollicitudin risus ullamcorper ut. Nunc egestas, sem eget varius accumsan, ligula turpis porttitor dolor, vel molestie augue velit sed enim. Praesent ultrices finibus purus, et semper nulla ultricies a. Ut eleifend enim libero, eu pharetra lorem elementum efficitur. Vivamus quis efficitur sem.
                    </p>
                </div>
            </div>
        )
    }
}

export default BigAd