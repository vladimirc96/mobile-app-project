import React from "react";
import "../../css/ui/PriceInput.css";
import { isEmpty } from "lodash";
var classNames = require("classnames");

export default class PriceInput extends React.Component {
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
                <div className="row ad-price-wrapper" onChange = {this.onChangeValue}>
                    <label className="ad-price-container">RSD
                        <input type="radio" value="RSD" name="priceType"/>
                        <span className="checkmark-price"></span>
                    </label>

                    <label className="ad-price-container">EUR
                        <input type="radio" value="EUR" name="priceType"/>
                        <span className="checkmark-price"></span>
                    </label>

                    <label className="ad-price-container">Dogovor
                        <input type="radio" value="Dogovor" name="priceType"/>
                        <span className="checkmark-price"></span>
                    </label>
                </div>

                {(this.onChange == "Dogovor") ? (
                    <input
                    type={this.props.type ? this.props.type : null}
                    name={this.props.name ? this.props.name : null}
                    placeholder={this.props.placeholder ? this.props.placeholder : null}
                    className={classNames("form-control", "price-input-field-disabled", this.props.classes)}
                    onChange={this.props.onChange ? this.props.onChange : null}
                    onBlur={this.props.onBlur ? this.props.onBlur : null}
                    value={this.props.value ? this.props.value : ""}
                    disabled = {true}
                />
                ) : (
                    <input
                        type={this.props.type ? this.props.type : null}
                        name={this.props.name ? this.props.name : null}
                        placeholder={this.props.placeholder ? this.props.placeholder : null}
                        className={classNames("form-control", "price-input-field", this.props.classes)}
                        onChange={this.props.onChange ? this.props.onChange : null}
                        onBlur={this.props.onBlur ? this.props.onBlur : null}
                        value={this.props.value ? this.props.value : ""}
                    />
                )}
            
            </div>
		);
	}
}
