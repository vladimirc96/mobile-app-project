import './App.css';
import React from 'react'
import Ad from './Ad'
import BigAd from "./BigAd";

class AdCombined extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showBigAd: false};
      }

      adToggle = () => {
        this.setState(prevState => ({
            showBigAd: !prevState.showBigAd
          }));
      }

    render(){
        return(
        <div onClick={this.adToggle}>
            {this.state.showBigAd? <BigAd /> : <Ad />}
        </div>
        )
    }
}

export default AdCombined