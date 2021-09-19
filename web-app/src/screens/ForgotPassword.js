import React, { Component } from "react";
import TextInput from "../components/ui/TextInput";
import { forgotPassword } from "../services/UserService";
import "../css/ForgotPassword.css";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";

const forgotPasswordSchema = yup.object({
	email: yup.string().required("Email je obavezan.").email("Email nije validan."),
});

export class ForgotPassword extends Component {
	forgotPassword = async (email) => {
		try {
			await forgotPassword(email);
			Swal.fire({
				text: "Aktivacioni link uspešno poslat!",
				confirmButtonColor: "#d1ad75",
				confirmButtonText: "Ok",
			});
		} catch (err) {
			Swal.fire({
				icon: "error",
				text: err.message,
				confirmButtonColor: "#d1ad75",
				confirmButtonText: "Ok",
			});
		}
	};

	render() {
		return (
			<div className="auth">
				<div className="d-flex flex-column forgot-password-section">
					<div className="d-flex flex-column justify-content-center upper-part">
						<p className="p-2 header"> Zaboravili ste lozinku? </p>
						<p className="p-2 sub-header">Unesite email da dobijete aktivacioni link i da izmenite šifru</p>
					</div>
					<div className="d-flex flex-row justify-content-center form-section">
						<Formik
							initialValues={{
								email: "",
							}}
							onSubmit={(values) => {
								this.forgotPassword(values.email);
							}}
							validationSchema={forgotPasswordSchema}
							validateOnMount
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
											disabled={!formikProps.isValid}
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
