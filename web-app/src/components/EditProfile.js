import React, { Component } from "react";
import "../css/EditProfile.css";
import SelectInput from "../components/ui/SelectInput";
import TextInput from "../components/ui/TextInput";
import TextArea from "./ui/TextArea";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { isInError } from "../validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { login } from "../store/actions/authentication/authenticationActions";
import { connect } from "react-redux";
import { getAll } from "../services/LocationService";

library.add(faUserCircle);

const registerSchema = yup.object({
	username: yup.string().required("Korisničko ime je obavezno."),
	password: yup.string().required("Šifra je obavezna."),
});

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			locations: [],
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

	componentDidMount() {
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
							firstName: this.props.user && this.props.user.firstName ? this.props.user.firstName : "",
							lastName: this.props.user && this.props.user.lastName ? this.props.user.lastName : "",
							phoneNumber:
								this.props.user && this.props.user.phoneNumber ? this.props.user.phoneNumber : "",
							details: this.props.user && this.props.user.details ? this.props.user.details : "",
							location: this.props.user && this.props.user.location ? this.props.user.location : "",
							image: null,
						}}
						onSubmit={(values) => {
							console.log(values);
						}}
					>
						{(formikProps) => (
							<div className="fields column h-100">
								<div className="d-flex flex-column h-100 justify-content-center">
									<div className="form-group form-row d-flex justify-content-center">
										<div className="col">
											{!formikProps.values.image ? (
												<FontAwesomeIcon icon="user-circle" size="5x" />
											) : (
												<img
													alt="profilna"
													className="picked-image"
													src={URL.createObjectURL(formikProps.values.image)}
												></img>
											)}
										</div>
										<div className="d-flex align-items-center col-9">
											<label className="btn btn-primary btn-file upload-btn">
												DODAJ FOTOGRAFIJU
												<input
													style={{ marginTop: "5px" }}
													type="file"
													onChange={(event) =>
														formikProps.setFieldValue("image", event.target.files[0])
													}
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
