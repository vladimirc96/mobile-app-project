import React, { Component } from "react";
import SelectInput from "../ui/SelectInput";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
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

library.add(faUserCircle);

const editProfilerSchema = yup.object({
	location: yup.object({
		id: yup.number().required(),
		value: yup.string(),
	}),
});

export class EditProfileForm extends Component {
	constructor() {
		super();
		this.state = {
			locations: [],
			image: null,
		};
	}

	getLocations = async () => {
		try {
			const data = await getAll();
			await this.setState({ locations: data });
		} catch (err) {
			alert(err);
		}
	};

	handleLocationChange = async (event, formikProps) => {
		const location = this.state.locations.find((item) => item.id == event.target.value);
		await formikProps.setFieldValue("location", location);
	};

	isModified = (formikProps) => {
		return !isEqual(formikProps.values, this.props.user);
	};

	componentDidMount() {
		this.getLocations();
		console.log("USER ", this.props.user);
	}

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
					validationSchema={editProfilerSchema}
					validateOnMount
				>
					{(formikProps) => (
						<div className="fields-edit-profile column h-100">
							<div className="d-flex flex-column h-100 justify-content-center">
								<div className="form-group  d-flex justify-content-center">
									<div className="col">
										{!formikProps.values.imageBytes ? (
											<FontAwesomeIcon icon="user-circle" size="5x" />
										) : (
											<img
												alt="profilna"
												className="picked-image"
												src={
													formikProps.values.imageBytes.indexOf("data") === -1
														? `data:image/jpg;base64,${formikProps.values.imageBytes}`
														: formikProps.values.imageBytes
												}
											></img>
										)}
									</div>
									<div className="d-flex align-items-center col-9">
										<label className="btn btn-primary btn-file upload-btn">
											DODAJ FOTOGRAFIJU
											<input
												style={{ marginTop: "5px" }}
												type="file"
												onChange={async (event) => {
													formikProps.setFieldValue(
														"imageBytes",
														await toBase64(event.target.files[0])
													);
													this.setState({ image: event.target.files[0] });
												}}
												style={{ display: "none" }}
											/>
										</label>
									</div>
								</div>
								<div className="row">
									<div className="form-group col">
										<label className="label">Ime</label>
										<TextInput
											name="firstName"
											type="text"
											value={formikProps.values.firstName}
											onChange={formikProps.handleChange("firstName")}
											onBlur={formikProps.handleBlur("firstName")}
										/>
									</div>
									<div className="form-group col">
										<label className="label">Prezime</label>
										<TextInput
											name="lastName"
											type="text"
											value={formikProps.values.lastName}
											onChange={formikProps.handleChange("lastName")}
											onBlur={formikProps.handleBlur("lastName")}
										/>
									</div>
								</div>
								<div className="row">
									<div className="form-group col">
										<label className="label">Korisničko ime</label>
										<TextInput
											name="username"
											type="text"
											value={formikProps.values.username}
											onChange={formikProps.handleChange("username")}
											onBlur={formikProps.handleBlur("username")}
										/>
									</div>
									<div className="form-group col">
										<label className="label">Email</label>
										<TextInput
											name="email"
											type="text"
											value={formikProps.values.email}
											onChange={formikProps.handleChange("email")}
											onBlur={formikProps.handleBlur("email")}
										/>
									</div>
								</div>
								<div className="row">
									<div className="form-group col">
										<label className="label">Lokacija</label>
										<SelectInput
											name="location"
											type="text"
											items={this.state.locations}
											value={formikProps.values.location}
											onChange={(event) => this.handleLocationChange(event, formikProps)}
											onBlur={formikProps.handleBlur("location")}
											classes={[isInError(formikProps, "location")]}
										/>
									</div>
									<div className="form-group col">
										<label className="label">Broj telefona</label>
										<TextInput
											name="phoneNumber"
											type="text"
											value={formikProps.values.phoneNumber}
											onChange={formikProps.handleChange("phoneNumber")}
											onBlur={formikProps.handleBlur("phoneNumber")}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="label">Detalji</label>
									<TextArea
										name="details"
										type="text"
										rows="3"
										value={formikProps.values.details}
										onChange={formikProps.handleChange("details")}
										onBlur={formikProps.handleBlur("details")}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
