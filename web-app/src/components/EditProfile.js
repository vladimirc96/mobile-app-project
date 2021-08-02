import React, { Component } from "react";
import "../css/EditProfile.css";
import SelectInput from "../components/ui/SelectInput";
import TextInput from "../components/ui/TextInput";
import TextArea from "./ui/TextArea";
import { Formik } from "formik";
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
import { formatDate } from "../DateUtil";
import { Switch, Route, Link } from "react-router-dom";
import EditProfileForm from "./forms/EditProfileForm";
import SettingsForm from "./forms/SettingsForm";

library.add(faUserCircle);

export class EditProfile extends Component {
	constructor() {
		super();
		this.state = {
			image: null,
		};
	}

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
			this.props.setUserInfo(user);
			Swal.fire({
				text: "Uspešno ste izmenili podatke!",
				confirmButtonColor: "#d1ad75",
				confirmButtonText: "Ok",
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	getTitle = () => {
		if (this.props.location.pathname.includes("settings")) {
			return "Podešavanja";
		}
		return "Izmena profila";
	};

	render() {
		return (
			<div className="d-flex flex-column edit-profile-section">
				<div className="d-flex flex-column justify-content-center upper-part">
					<p className="p-2 header"> {this.getTitle()} </p>
				</div>
				<div className="wrapper row w-100">
					<div className="d-flex flex-column col-2 align-content-center side-links">
						<ul>
							<li className="edit-link">
								<Link to={`/user/${this.props.user.id}/edit-profile`}>Izmeni profil </Link>
							</li>
							<li className="edit-link">
								<Link to={`/user/${this.props.user.id}/edit-profile/settings`}> Podešavanja </Link>
							</li>
							<li className="edit-link">
								<Link to="/"> Lozinka </Link>
							</li>
						</ul>
					</div>
					<div className="d-flex flex-row justify-content-center form-section col">
						<Switch>
							<Route
								exact
								path={`/user/${this.props.user.id}/edit-profile`}
								component={() => <EditProfileForm handleSaveUser={this.saveUser} />}
							/>
							<Route
								path={`/user/${this.props.user.id}/edit-profile/settings`}
								component={() => <SettingsForm handleSaveUser={this.saveUser} />}
							/>
						</Switch>
					</div>
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
