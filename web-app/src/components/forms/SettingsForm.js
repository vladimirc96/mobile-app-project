import React, { Component } from "react";
import TextInput from "../ui/TextInput";
import { Formik } from "formik";
import * as yup from "yup";
import { isInError } from "../../validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { login } from "../../store/actions/authentication/authenticationActions";
import { connect } from "react-redux";
import { getAll } from "../../services/LocationService";
import { saveUser } from "../../services/UserService";
import { base64ToFile, toBase64 } from "../../ImageUtil";
import Swal from "sweetalert2";
import { isEqual } from "lodash";
import { formatDate } from "../../DateUtil";

export class SettingsForm extends Component {
	isModified = (formikProps) => {
		return !isEqual(formikProps.values, this.props.user);
	};

	render() {
		return (
			<div>
				<Formik
					initialValues={{
						id: this.props.user && this.props.user.id ? this.props.user.id : null,
						username: this.props.user && this.props.user.username ? this.props.user.username : null,
						password: this.props.user && this.props.user.password ? this.props.user.password : null,
						firstName: this.props.user && this.props.user.firstName ? this.props.user.firstName : null,
						lastName: this.props.user && this.props.user.lastName ? this.props.user.lastName : null,
						phoneNumber:
							this.props.user && this.props.user.phoneNumber ? this.props.user.phoneNumber : null,
						email: this.props.user && this.props.user.email ? this.props.user.email : null,
						details: this.props.user && this.props.user.details ? this.props.user.details : null,
						location: this.props.user && this.props.user.location ? this.props.user.location : null,
						image: this.props.user && this.props.user.image ? this.props.user.image : null,
						imageBytes: this.props.user && this.props.user.imageBytes ? this.props.user.imageBytes : null,
						entryDate:
							this.props.user && this.props.user.entryDate ? formatDate(this.props.user.entryDate) : null,
						positiveRatings:
							this.props.user && this.props.user.positiveRatings ? this.props.user.positiveRatings : 0,
						negativeRatings:
							this.props.user && this.props.user.negativeRatings ? this.props.user.negativeRatings : 0,
					}}
					onSubmit={(values) => {
						this.props.handleSaveUser(values);
					}}
				>
					{(formikProps) => (
						<div className="fields column h-100">
							<div className="d-flex flex-column h-100 justify-content-center">
								<div className="form-group">
									<label className="label">Korisničko ime</label>
									<TextInput
										name="username"
										type="text"
										value={formikProps.values.username}
										onChange={formikProps.handleChange("username")}
										onBlur={formikProps.handleBlur("username")}
									/>
								</div>
								<div className="form-group">
									<label className="label">Email</label>
									<TextInput
										name="email"
										type="text"
										value={formikProps.values.email}
										onChange={formikProps.handleChange("email")}
										onBlur={formikProps.handleBlur("email")}
									/>
								</div>
								<div className="d-flex justify-content-center form-group">
									<button
										disabled={!this.isModified(formikProps) || !formikProps.isValid}
										type="button"
										className="btn gold-btn"
										onClick={formikProps.handleSubmit}
									>
										SAČUVAJ IZMENE
									</button>
								</div>
							</div>
						</div>
					)}
				</Formik>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
		token: state.authenticationReducer.token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (credentials) => dispatch(login(credentials)),
		setUserInfo: (user) => dispatch({ type: "SET_USER_INFO", data: user }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
