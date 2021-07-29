import React from "react";
import "../../css/ui/AdTypeInput.css";
import { isEmpty } from "lodash";
var classNames = require("classnames");

export default class AdTypeInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="ad-type-wrapper">
                <div className="row ad-type-container-wrapper-upper">
                    <p className="ad-type-text">Basic</p>
                    <label className="ad-type-container">
                        <input type="radio" value="Basic" name="adType"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="row ad-type-container-wrapper-middle">
                    <p className="ad-type-text">Silver</p>
                    <label className="ad-type-container">
                        <input type="radio" value="Silver" name="adType"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="row ad-type-container-wrapper-down">
                    <p className="ad-type-text">VIP</p>
                    <label className="ad-type-container">
                        <input type="radio" value="VIP" name="adType"/>
                        <span className="checkmark"></span>
                    </label>
                </div>

            </div>
		);
	}
}