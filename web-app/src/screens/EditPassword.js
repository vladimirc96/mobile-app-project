import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextInput from "../components/ui/TextInput";
import { updatePassword, getUserInfo } from "../services/UserService";
import { isInError } from "../validation";
import Swal from "sweetalert2";
import { connect } from "react-redux";

const changePasswordSchema = yup.object({
	oldPassword: yup.string().required(),
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

export class EditPassword extends Component {
	updatePassword = async (values) => {
		try {
			const result = await updatePassword(values);
			const data = await getUserInfo(this.props.user.username);
			await this.props.setUserInfo(data);
			Swal.fire({
				icon: "success",
				text: result,
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
			<div className="d-flex flex-column edit-profile-section">
				<div className="d-flex flex-column justify-content-center upper-part">
					<p className="p-2 header"> Izmena lozinke </p>
				</div>
				<div className="d-flex flex-row justify-content-center form-section">
					<Formik
						initialValues={{
							oldPassword: "",
							newPassword: "",
							confirmPassword: "",
						}}
						onSubmit={(values) => {
							this.updatePassword(values);
						}}
						validationSchema={changePasswordSchema}
						validateOnMount
					>
						{(formikProps) => (
							<div className="fields-pass column h-100 ">
								<div className="form-group">
									<TextInput
										name="oldPassword"
										type="password"
										placeholder="Stara lozinka"
										value={formikProps.values.oldPassword}
										onBlur={formikProps.handleBlur("oldPassword")}
										onChange={formikProps.handleChange("oldPassword")}
									/>
								</div>
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
										<span style={{ fontSize: "13px" }}>{formikProps.errors.confirmPassword}</span>
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
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserInfo: (user) => dispatch({ type: "SET_USER_INFO", data: user }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
