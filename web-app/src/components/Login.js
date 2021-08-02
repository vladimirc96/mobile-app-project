import React, { Component } from "react";
import "../css/Login.css";
import TextInput from "../components/ui/TextInput";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { isInError } from "../validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { login } from "../store/actions/authentication/authenticationActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
library.add(faEye);
library.add(faEyeSlash);

const registerSchema = yup.object({
	username: yup.string().required("Korisničko ime je obavezno."),
	password: yup.string().required("Šifra je obavezna."),
});

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			passwordVisible: true,
		};
	}

	toggleVisible = () => {
		this.setState((prevState) => {
			return {
				passwordVisible: !prevState.passwordVisible,
			};
		});
	};

	handleLogin = async (user) => {
		try {
			setTimeout(async () => {
				await this.props.loginUser(user);
				this.props.history.push("/");
			}, 500);
		} catch (err) {
			console.log(err);
		}
	};

	componentDidMount() {
		console.log(this.props.user);
	}

	render() {
		return (
			<div className="d-flex flex-column login-section">
				<div className="d-flex flex-column justify-content-center upper-part">
					<p className="p-2 header"> Prijavite se </p>
					<p className="p-2 sub-header">
						Još uvek niste član?
						<Link to="/register" style={{ color: "#d1ad75", fontWeight: "650" }}>
							Napravite profil
						</Link>
					</p>
				</div>
				<div className="d-flex flex-row justify-content-center form-section">
					<Formik
						initialValues={{
							username: "",
							password: "",
						}}
						onSubmit={(values) => {
							this.handleLogin(values);
						}}
						validationSchema={registerSchema}
					>
						{(formikProps) => (
							<div className="fields column h-100">
								<div className="d-flex flex-column h-100 justify-content-center">
									<div className="form-group">
										<TextInput
											name="username"
											type="text"
											placeholder="Korisničko ime"
											value={formikProps.values.username}
											onChange={formikProps.handleChange("username")}
											onBlur={formikProps.handleBlur("username")}
											classes={isInError(formikProps, "username")}
										/>
									</div>
									<div className="form-group input-group">
										<TextInput
											name="password"
											type={this.state.passwordVisible ? "password" : "text"}
											placeholder="Lozinka"
											value={formikProps.values.password}
											onChange={formikProps.handleChange("password")}
											onBlur={formikProps.handleBlur("password")}
											classes={[isInError(formikProps, "password"), "password-input"]}
										/>
										<div className="input-group-append">
											<button
												type="button"
												className="btn btn-outline-secondary show-hide"
												onClick={this.toggleVisible}
											>
												{this.state.passwordVisible ? (
													<FontAwesomeIcon icon="eye" />
												) : (
													<FontAwesomeIcon icon="eye-slash" />
												)}
											</button>
										</div>
									</div>
									<div className="d-flex justify-content-center form-group">
										<button
											type="button"
											className="btn gold-btn"
											onClick={formikProps.handleSubmit}
										>
											PRIJAVI SE
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
