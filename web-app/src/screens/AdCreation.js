import React, { Component } from "react";
import "../css/AdCreation.css";
import SelectInput from "../components/ui/SelectInput";
import TextInput from "../components/ui/TextInput";
import TextArea from "../components/ui/TextArea";
import PriceInput from "../components/ui/PriceInput";
import AdTypeInput from "../components/ui/AdTypeInput";
import AdTypeModal from "../components/ui/AdTypeModal";
import CommentModal from "../components/ui/CommentModal";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { isInError } from "../validation";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { login } from "../store/actions/authentication/authenticationActions";
import { connect } from "react-redux";
import { getAll } from "../services/LocationService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEye);
library.add(faEyeSlash);

const registerSchema = yup.object({
	username: yup.string().required("Korisničko ime je obavezno."),
	password: yup.string().required("Šifra je obavezna."),
});

export default class AdCreation extends Component {
	constructor() {
		super();
		this.state = {
			adCategory: [],
			show: false,
		};
	}

	getAdCategory = async () => {
		try {
			const data = await getAll();
			await this.setState({ adCategory: data });
		} catch (err) {
			alert(err);
		}
	};

	handleLocationChange = async (event, formikProps) => {
		const adCategory = this.state.adCategory.find((item) => item.id == event.target.value);
		await formikProps.setFieldValue("adCategory", adCategory);
	};

	componentDidMount() {
		this.getAdCategory();
	}
	render() {
		return (
			<div className="d-flex flex-column ad-creation-section">
				<div className="d-flex flex-column justify-content-center upper-part">
					<p className="p-2 header"> Postavi oglas </p>
				</div>
				<div className="d-flex flex-row justify-content-center form-section">
					<Formik
						initialValues={{
							adTitle: "",
							adDescription: "",
							adCategory: "",
							adSubcategory: "",
							adPrice: "",
							adType: "",
						}}
						onSubmit={(values) => {
							console.log(values);
						}}
					>
						{(formikProps) => (
							<div className="fields column h-100">
								<div className="d-flex flex-column h-100 justify-content-center">
									<div className="form-group">
										<label className="label">Naslov oglasa</label>
										<TextInput
											name="adTitle"
											type="text"
											placeholder="npr. Časovi nemačkog jezika"
											value={formikProps.values.adTitle}
											onChange={formikProps.handleChange("adTitle")}
											onBlur={formikProps.handleBlur("adTitle")}
										/>
									</div>
									<div className="form-group">
										<label className="label">Opis oglasa</label>
										<TextArea
											name="adDescription"
											type="text"
											rows="3"
											placeholder="Max. 500 karaktera"
											value={formikProps.values.adDescription}
											onChange={formikProps.handleChange("adDescription")}
											onBlur={formikProps.handleBlur("adDescription")}
										/>
									</div>
									<div className="form-group">
										<label className="label">Kategorija</label>
										<SelectInput
											name="adCategory"
											type="text"
											value={formikProps.values.adCategory}
											onChange={(event) => this.handleLocationChange(event, formikProps)}
											onBlur={formikProps.handleBlur("adCategory")}
										/>
										<SelectInput
											name="adSubcategory"
											type="text"
											value={formikProps.values.adSubcategory}
											onChange={(event) => this.handleLocationChange(event, formikProps)}
											onBlur={formikProps.handleBlur("adSubcategory")}
										/>
									</div>
									<div className="form-group">
										<label className="label">Cena</label>
										<PriceInput
											name="adPrice"
											type="text"
											placeholder="Iznos"
											value={formikProps.values.adPrice}
											onChange={formikProps.handleChange("adPrice")}
											onBlur={formikProps.handleBlur("adPrice")}
										/>
									</div>
									<div className="form-group">
										<button
											onClick={() => this.setState({ show: true })}
											data-toggle="modal"
											data-target="#typeModal"
										>
											Show Modal
										</button>
										<CommentModal
											onClose={() => this.setState({ show: false })}
											show={this.state.show}
										/>
										<label className="row label" style={{ marginLeft: "3px" }}>
											Tip oglasa{" "}
											<FontAwesomeIcon
												icon={faQuestionCircle}
												style={{ color: "black", marginLeft: "3px", marginTop: "5px" }}
											/>
										</label>
										<AdTypeInput
											name="adTypeCode"
											type="text"
											placeholder="Unesite kod iz SMS-a"
											value={formikProps.values.adTypeCode}
											onChange={formikProps.handleChange("adTypeCode")}
											onBlur={formikProps.handleBlur("adTypeCode")}
										/>
									</div>
									<div className="d-flex justify-content-center form-group">
										<button type="button" className="btn gold-btn">
											POSTAVI OGLAS
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
