import React from 'react'
import ad from "./../assets/images/ad.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faThumbsDown);

class Ad extends React.Component{

    render(){
        return(
            <div className="row ad-container" style={{justifyContent: 'space-between'}}>
                <div className="ad-image-container">
                    <img src={ad} alt="" style={{width:"100%", height:"100%"}} />
                </div>
                <div className="ad-description-container">
                    <p className="ad-title-text">Individualni treninzi kosarke</p>
                    <div className="row ad-description-text">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit.Pellentesque sapien lacus,interdum vitae massa nec,laoreet tempus tellus. Proin aliquet nibh quam, ac efficitur felis maximus ac. Phasellus pellentesque urna et ante commodo, gravida luctus eros viverra. Nullam mollis erat diam. Fusce venenatis gravida mi ac condimentum. Nulla eu pulvinar neque. Proin rutrum dui sed ligula congue, id facilisis odio blandit. Cras non metus posuere, mattis justo sit amet, ornare orci.</p>
                    </div>
                    <div className="row">
                        <p className="ad-owner-text">Vlasnik: Slobodan Sarenac</p>
                    </div>
                </div>
                <div className="ad-details-container">
                    <div className="col-sm-12 ad-price-box">
                        <p className="ad-price-text">1000 RSD</p>
                    </div >
                    <div style={{alignSelf: 'center', width: "80%"}} >
                        <p style={{marginTop: "-4px"}}>postavljen:</p>
                        <p style={{marginTop: "-12px", fontWeight: 'bold'}}>8-5-2021</p>
                        <p style={{marginTop: "-4px"}}>Lokacija:</p>
                        <p style={{marginTop: "-12px", fontWeight: 'bold'}}>Veternik</p>
                    </div>
                    <div style={{alignSelf: 'center',  width: "80%"}} >
                        <span style={{fontSize: "14pt"}}> 100 </span>
                        <FontAwesomeIcon icon="thumbs-up" style={{marginRight:"5px", fontSize: "14pt"}} />
                        <FontAwesomeIcon icon="thumbs-down" style={{marginLeft:"5px", fontSize: "14pt"}} />
                        <span style={{fontSize: "14pt"}}> 50 </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ad