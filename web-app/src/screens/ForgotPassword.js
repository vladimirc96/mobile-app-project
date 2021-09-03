import React, { Component } from "react";
import TextInput from "../components/ui/TextInput";
import { forgotPassword } from "../services/UserService";

export class ForgotPassword extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
		};
	}

	forgotPassword = async () => {
		try {
			await forgotPassword(this.state.email);
		} catch (err) {
			console.log(err.message);
		}
	};

	onChangeEmail = (event) => {
		const email = event.target.value;
		this.setState({ email: email });
	};
	render() {
		return (
			<div>
				<TextInput
					name="email"
					type="email"
					placeholder="Unesite email"
					value={this.state.email}
					onChange={this.onChangeEmail}
				/>
				<button type="button" className="btn btn-primary" onClick={this.forgotPassword}>
					PRIJAVI SE
				</button>
			</div>
		);
	}
}

export default ForgotPassword;
