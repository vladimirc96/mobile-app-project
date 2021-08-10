import React from "react";
import "../../css/ui/PriceInput.css";
import { isEmpty } from "lodash";
var classNames = require("classnames");

export default class PriceInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
		};
	}

	onChangeValue = (event) => {
		const value = event.target.value;
		this.setState({ name: event.target.value });
		if (value === "Dogovor") {
			this.props.onChangeCurrency("");
			this.props.onChangeAgreement(true);
		} else if (value === "RSD") {
			this.props.onChangeCurrency(value);
			this.props.onChangeAgreement(false);
		} else if (value === "EUR") {
			this.props.onChangeCurrency(value);
			this.props.onChangeAgreement(false);
		}
	};

	render() {
		return (
			<div>
				<div className="row ad-price-wrapper" onChange={this.onChangeValue}>
					<label className="ad-price-container">
						RSD
						<input type="radio" value="RSD" name="priceType" />
						<span className="checkmark-price"></span>
					</label>

					<label className="ad-price-container">
						EUR
						<input type="radio" value="EUR" name="priceType" />
						<span className="checkmark-price"></span>
					</label>

					<label className="ad-price-container">
						Dogovor
						<input type="radio" value="Dogovor" name="priceType" />
						<span className="checkmark-price"></span>
					</label>
				</div>

				<input
					type={this.props.type ? this.props.type : null}
					name={this.props.name ? this.props.name : null}
					placeholder={this.props.placeholder ? this.props.placeholder : null}
					className={classNames(
						"form-control",
						this.state.name === "Dogovor" ? "price-input-field-disabled" : "price-input-field",
						this.props.classes
					)}
					onChange={this.props.onChangePrice ? this.props.onChangePrice : null}
					onBlur={this.props.onBlur ? this.props.onBlur : null}
					value={this.props.value ? this.props.value : ""}
					disabled={this.state.name === "Dogovor" ? true : false}
				/>
			</div>
		);
	}
}
