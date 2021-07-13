import React, { Component } from 'react';
import categoryIcon from './../assets/images/kat_ikonice_krug/dizajn.png';


export default class AdCreation extends Component {
render() {
    return (
        <div className="ad-creation-container">
            <div className="ad-creation-screen-title">
                <p className="ad-creation-screen-title-text">Postavi oglas</p>
            </div>
            <div className="ad-creation-section-title">
                <p className="ad-creation-section-title-text"> Izaberite kategoriju</p>
            </div>
            <div className="ad-name-input">
                <p className="category-title"> Dizajn</p>
            </div>
        </div>
    );
}
}