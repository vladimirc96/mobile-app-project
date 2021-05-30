import React from 'react'
import ad from "./../assets/images/ad.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faThumbsDown);

class Ad extends React.Component{

    render(){
        return(
            <div class="ad-container">
                <div class="row">
                    <div class="col-sm-2">
                        <img src={ad} alt="" style={{width:"100%", height:"100%"}} />
                    </div>
                    <div class="col-sm-8">
                        <h2 style={{lineHeight:"0.9", marginLeft:"-10px"}}>Individualni treninzi kosarke</h2>
                        <div className="row" style={{width:"100%",borderTop:"1px solid black", paddingTop:"10px", paddingLeft:"5px"}}>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit.Pellentesque sapien lacus,interdum vitae massa nec,laoreet tempus tellus. Proin aliquet nibh quam, ac efficitur felis maximus ac. Phasellus pellentesque urna et ante commodo, gravida luctus eros viverra. Nullam mollis erat diam. Fusce venenatis gravida mi ac condimentum. Nulla eu pulvinar neque. Proin rutrum dui sed ligula congue, id facilisis odio blandit. Cras non metus posuere, mattis justo sit amet, ornare orci.</p>
                        </div>
                        <div className="row">
                            <h5 style={{lineHeight:"0.5"}}>Vlasnik: Slobodan Sarenac</h5>
                        </div>
                    </div>
                    <div class="col-sm-2" style={{textAlign: "center"}}>
                        <div className="col-sm-12" style={{backgroundColor:"#D6BF74", paddingTop:"7.5px", paddingBottom:"2.5px", marginBottom:"15px"}}>
                            <h5 style={{color:"#ffffff"}}>1000 RSD</h5>
                            </div>
                            <p style={{marginBottom:"20px"}}>postavljen: <span>8-5-2021</span></p>
                            <p style={{marginBottom:"25px"}}>Lokacija: <span>Veternik</span></p>
                        <div>
                            <span> 100 </span>
                            <FontAwesomeIcon icon="thumbs-up" style={{marginRight:"5px"}} />
                            <FontAwesomeIcon icon="thumbs-down" style={{marginLeft:"5px"}} />
                            <span> 50 </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ad