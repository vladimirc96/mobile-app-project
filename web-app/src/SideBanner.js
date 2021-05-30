import './App.css'
import React from 'react'
import banner from "./assets/images/banner.jpg"

class SideBanner extends React.Component{

    render(){
        return(
            <div class="col-sm-2" style={{marginTop:"-100px"}}>
                <img src={banner} alt="" style={{width:"100%"}} />
            </div>
        )
    }
}

export default SideBanner