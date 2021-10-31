import React from "react";
import "../../css/ui/TextArea.css";
import { isEmpty } from "lodash";
var classNames = require("classnames");

export default class TextArea extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<textarea
				type={this.props.type ? this.props.type : null}
				name={this.props.name ? this.props.name : null}
				placeholder={this.props.placeholder ? this.props.placeholder : null}
				rows={this.props.rows ? this.props.rows : null}
				className={classNames("form-control", "input-field", this.props.classes)}
				onChange={this.props.onChange ? this.props.onChange : null}
				onBlur={this.props.onBlur ? this.props.onBlur : null}
				value={this.props.value ? this.props.value : ""}
			/>
		);
	}
}
