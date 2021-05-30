import './App.css';
import React from 'react'
import AdCombined from './AdCombined'
import SideBanner from './SideBanner'

class Ads extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                <div class="row" style={{marginTop:"-100px"}}>
                    <SideBanner />
                    <div class="col-sm-8"> 
                        <AdCombined />
                        <AdCombined />
                        <AdCombined />
                    </div>
                    <SideBanner />
                </div>
            </div>
        )
    }
}

export default Ads