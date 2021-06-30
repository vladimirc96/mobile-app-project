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
                <div class="row" style={{justifyContent: 'space-between'}}>
                    <div style={{width:"20%", height:"100%", margin: "2px 10px 0px 10px"}}>
                        <img src={ad} alt="" style={{width:"100%", height:"100%"}} />
                    </div>
                    <div style={{width:"55%", height:"100%"}}>
                        <p style={{lineHeight:"0.9", marginLeft:"-10px", fontSize: "28px", fontWeight: "bold"}}>Individualni treninzi kosarke</p>
                        <div className="row" style={{ marginTop: "14px", width:"100%", paddingTop:"10px", paddingLeft:"5px", borderRadius: "10px", boxShadow: "0px 0px 4px 2px #bdbdbd" }}>
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit.Pellentesque sapien lacus,interdum vitae massa nec,laoreet tempus tellus. Proin aliquet nibh quam, ac efficitur felis maximus ac. Phasellus pellentesque urna et ante commodo, gravida luctus eros viverra. Nullam mollis erat diam. Fusce venenatis gravida mi ac condimentum. Nulla eu pulvinar neque. Proin rutrum dui sed ligula congue, id facilisis odio blandit. Cras non metus posuere, mattis justo sit amet, ornare orci.</p>
                        </div>
                        <div className="row">
                            <h5 style={{fontSize: "14pt", position: "absolute", bottom: "10px"}}>Vlasnik: Slobodan Sarenac</h5>
                        </div>
                    </div>
                    <div style={{width:"20%", height:"100%", textAlign: "center"}}>
                        <div className="col-sm-12" style={{alignSelf: 'center', width: "80%", height: "35px", backgroundColor:"#5fd2ff", paddingTop:"5px", marginBottom:"15px", borderRadius:"24px"}}>
                            <p style={{color:"#ffffff", fontSize: "18px", fontWeight: "500"}}>1000 RSD</p>
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
            </div>
        )
    }
}

export default Ad