import React, { Component } from "react";
import "../css/EditProfile.css";
import SelectInput from "../components/ui/SelectInput";
import TextInput from "../components/ui/TextInput";
import TextArea from "./ui/TextArea";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { isInError } from "../validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { login } from "../store/actions/authentication/authenticationActions";
import { connect } from "react-redux";
import { getAll } from "../services/LocationService";
import { saveUser } from "../services/UserService";
import { base64ToFile, toBase64 } from "../ImageUtil";
import Swal from "sweetalert2";
import { isEqual } from "lodash";

library.add(faUserCircle);

const registerSchema = yup.object({
	username: yup.string().required("Korisničko ime je obavezno."),
	password: yup.string().required("Šifra je obavezna."),
});

export class EditProfile extends Component {
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

	saveUser = async (user) => {
		try {
			const formData = new FormData();
			Object.keys(user).forEach((key) => {
				if (key === "imageBytes") {
					return;
				}
				if (key === "location") {
					formData.append(key, JSON.stringify(user[key]));
					return;
				}
				formData.append(key, user[key]);
			});
			if (!this.state.image) {
				const image = await base64ToFile(user["imageBytes"]);
				formData.append("image", image);
			} else {
				formData.append("image", this.state.image);
			}
			await saveUser(formData);
			console.log(user);
			this.props.setUserInfo(user);
			Swal.fire({
				text: "Uspešno ste izmenili podatke!",
				confirmButtonText: "Ok",
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	isModified = (formikProps) => {
		return isEqual(formikProps.values, this.props.user);
	};

	componentDidMount() {
		console.log(this.props.user);
		this.getLocations();
	}

	render() {
		return (
			<div className="d-flex flex-column edit-profile-section">
				<div className="d-flex flex-column justify-content-center upper-part">
					<p className="p-2 header"> Izmena profila </p>
				</div>
				<div className="d-flex flex-row justify-content-center form-section">
					<Formik
						initialValues={{
							id: this.props.user && this.props.user.id ? this.props.user.id : "",
							username: this.props.user && this.props.user.username ? this.props.user.username : "",
							password: this.props.user && this.props.user.password ? this.props.user.password : "",
							firstName: this.props.user && this.props.user.firstName ? this.props.user.firstName : "",
							lastName: this.props.user && this.props.user.lastName ? this.props.user.lastName : "",
							phoneNumber:
								this.props.user && this.props.user.phoneNumber ? this.props.user.phoneNumber : "",
							email: this.props.user && this.props.user.email ? this.props.user.email : "",
							details: this.props.user && this.props.user.details ? this.props.user.details : "",
							location: this.props.user && this.props.user.location ? this.props.user.location : "",
							image: this.props.user && this.props.user.image ? this.props.user.image : null,
							imageBytes:
								this.props.user && this.props.user.imageBytes ? this.props.user.imageBytes : null,
						}}
						onSubmit={(values) => {
							console.log(values);
							this.saveUser(values);
						}}
					>
						{(formikProps) => (
							<div className="fields column h-100">
								<div className="d-flex flex-column h-100 justify-content-center">
									<div className="form-group form-row d-flex justify-content-center">
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
									<div className="form-group">
										<label className="label">Ime</label>
										<TextInput
											name="firstName"
											type="text"
											value={formikProps.values.firstName}
											onChange={formikProps.handleChange("firstName")}
											onBlur={formikProps.handleBlur("firstName")}
										/>
									</div>
									<div className="form-group">
										<label className="label">Prezime</label>
										<TextInput
											name="lastName"
											type="text"
											value={formikProps.values.lastName}
											onChange={formikProps.handleChange("lastName")}
											onBlur={formikProps.handleBlur("lastName")}
										/>
									</div>
									<div className="form-group">
										<label className="label">Lokacija</label>
										<SelectInput
											name="location"
											type="text"
											items={this.state.locations}
											value={formikProps.values.location}
											onChange={(event) => this.handleLocationChange(event, formikProps)}
											onBlur={formikProps.handleBlur("location")}
										/>
									</div>
									<div className="form-group">
										<label className="label">Broj telefona</label>
										<TextInput
											name="phoneNumber"
											type="text"
											value={formikProps.values.phoneNumber}
											onChange={formikProps.handleChange("phoneNumber")}
											onBlur={formikProps.handleBlur("phoneNumber")}
										/>
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
											disabled={this.isModified(formikProps)}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
