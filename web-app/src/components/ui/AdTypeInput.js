import React from "react";
import "../../css/ui/AdTypeInput.css";
import { isEmpty } from "lodash";
var classNames = require("classnames");

export default class AdTypeInput extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this)
	}

    onChangeValue(event) {
        console.log(event.target.value);
    }
	render() {
		return (
            <div>
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
                <div>
                    <input
                        type={this.props.type ? this.props.type : null}
                        name={this.props.name ? this.props.name : null}
                        placeholder={this.props.placeholder ? this.props.placeholder : null}
                        className={classNames("form-control", "ad-type-input-field", this.props.classes)}
                        onChange={this.props.onChange ? this.props.onChange : null}
                        onBlur={this.props.onBlur ? this.props.onBlur : null}
                        value={this.props.value ? this.props.value : ""}
                    />
                </div>
            </div>
		);
	}
}