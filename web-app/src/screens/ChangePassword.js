import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextInput from "../components/ui/TextInput";
import { savePassword } from "../services/UserService";
import { isInError } from "../validation";
import Swal from "sweetalert2";

const changePasswordSchema = yup.object({
	newPassword: yup
		.string()
		.required("Lozinka je obavezna.")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			`Mora da sadrži 8 karaktera, jedno veliko slovo,
      jedno malo slovo, jednu cifru i jedan specijalni karakter.`
		),
	confirmPassword: yup
		.string()
		.required("Potvrda lozinke je obavezna.")
		.test({
			name: "Lozinka mora biti ista.",
			exclusive: false,
			params: {},
			message: "Lozinka mora biti ista.",
			// kada vratim true onda je ispunjen test i nema errore
			test: function (value) {
				if (value && value !== this.parent.newPassword) {
					return false;
				}
				return true;
			},
		}),
});

export class ChangePassword extends Component {
	savePassword = async (values) => {
		try {
			await savePassword(values);
			this.props.history.push("/login");
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
						<p className="p-2 header"> Izmena lozinke </p>
					</div>
					<div className="d-flex flex-row justify-content-center form-section">
						<Formik
							initialValues={{
								newPassword: "",
								confirmPassword: "",
							}}
							onSubmit={(values) => {
								this.savePassword({ ...values, token: this.props.match.params.token });
							}}
							validationSchema={changePasswordSchema}
							validateOnMount
						>
							{(formikProps) => (
								<div className="fields-pass column h-100 ">
									<div className="form-group">
										<TextInput
											name="newPassword"
											type="password"
											placeholder="Nova lozinka"
											classes={isInError(formikProps, "newPassword")}
											value={formikProps.values.newPassword}
											onBlur={formikProps.handleBlur("newPassword")}
											onChange={formikProps.handleChange("newPassword")}
										/>
										{formikProps.errors.newPassword !== "Lozinka je obavezna." ? (
											<span style={{ fontSize: "13px" }}>{formikProps.errors.newPassword}</span>
										) : null}
									</div>
									<div className="form-group">
										<TextInput
											name="confirmPassword"
											type="password"
											placeholder="Potvrda lozinke"
											classes={isInError(formikProps, "confirmPassword")}
											value={formikProps.values.confirmPassword}
											onBlur={formikProps.handleBlur("confirmPassword")}
											onChange={formikProps.handleChange("confirmPassword")}
										/>
										{formikProps.errors.confirmPassword !== "Potvrda lozinke je obavezna." ? (
											<span style={{ fontSize: "13px" }}>
												{formikProps.errors.confirmPassword}
											</span>
										) : null}
									</div>
									<div className="d-flex  justify-content-center form-group">
										<button
											type="button"
											className="btn gold-btn"
											disabled={!formikProps.isValid}
											onClick={formikProps.handleSubmit}
										>
											IZMENI LOZINKU
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

export default ChangePassword;
