import React from "react";
import '../../css/ui/TextInput.css';
import {isEmpty} from 'lodash';
var classNames = require("classnames");

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        className={classNames("form-control", "input-field", this.props.classes)}
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
        value={this.props.value}
      />
    );
  }
}

