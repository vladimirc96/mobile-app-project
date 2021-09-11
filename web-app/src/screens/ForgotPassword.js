import React, { Component } from "react";
import TextInput from "../components/ui/TextInput";
import { forgotPassword } from "../services/UserService";
import "../css/ForgotPassword.css";
import { Formik, Form } from "formik";
import * as yup from "yup";

const forgotPasswordSchema = yup.object({
	email: yup.string().required("Email je obavezan.").email("Email nije validan."),
});

export class ForgotPassword extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
		};
	}

	forgotPassword = async (email) => {
		try {
			await forgotPassword(email);
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
			<div className="auth">
				<div className="d-flex flex-column forgot-password-section">
					<div className="d-flex flex-column justify-content-center upper-part">
						<p className="p-2 header"> Zaboravili ste lozinku? </p>
						<p className="p-2 sub-header">
							Unesite email da dobijete aktivacioni link i da izmenite šifru{" "}
						</p>
					</div>
					<div className="d-flex flex-row justify-content-center form-section">
						<Formik
							initialValues={{
								email: "",
							}}
							onSubmit={(values) => {
								console.log(values.email);
								// this.handleLogin(values.email);
							}}
							validationSchema={forgotPasswordSchema}
						>
							{(formikProps) => (
								<div className="fields-pass column h-100 ">
									<div className="form-group">
										<TextInput
											name="email"
											type="email"
											placeholder="Unesite email"
											value={formikProps.values.email}
											onChange={formikProps.handleChange("email")}
										/>
									</div>
									<div className="d-flex  justify-content-center form-group">
										<button
											type="button"
											className="btn gold-btn"
											onClick={formikProps.handleSubmit}
										>
											POŠALJI LINK
										</button>
									</div>
								</div>
							)}
						</Formik>
					</div>
				</div>
			</div>
		);
	}
}

export default ForgotPassword;
