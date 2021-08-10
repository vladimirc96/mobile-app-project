import React, { Component } from "react";
import "../../css/ui/SelectInput.css";

var classNames = require("classnames");

export class SelectInput extends Component {
	constructor(props) {
		super(props);
	}

	prepareItems = () => {
		let items = [];
		if (this.props.items) {
			this.props.items.forEach((item) => {
				const option = (
					<option key={item.id} value={item.id}>
						{item.value ? item.value : item.name}
					</option>
				);
				items.push(option);
			});
		}
		return items;
	};

	render() {
		return (
			<div className="styleSelect">
				<select
					name={this.props.name ? this.props.name : null}
					className={classNames("form-control", "select-input-field", this.props.classes)}
					onChange={this.props.onChange ? this.props.onChange : null}
					onBlur={this.props.onBlur ? this.props.onBlur : null}
					value={this.props.value && this.props.value.id ? this.props.value.id : ""}
				>
					{this.prepareItems()}
				</select>
			</div>
		);
	}
}

export default SelectInput;
