import React, { Component } from "react";
import "../css/AdCreation.css";
import SelectInput from "../components/ui/SelectInput";
import TextInput from "../components/ui/TextInput";
import PriceInput from "../components/ui/PriceInput";
import AdTypeInput from "../components/ui/AdTypeInput";
import AdTypeModal from "../components/ui/AdTypeModal";
import CommentModal from "../components/ui/CommentModal";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { login } from "../store/actions/authentication/authenticationActions";
import { connect } from "react-redux";
import { getAll } from "../services/LocationService";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RichTextEditor from "../components/RichTextEditor";
import { isInError } from "../validation";
import { getAllByCategoryId } from "../services/SubCategoryService";
import { getCategories } from "../services/CategoryService";
import { toBase64, base64ToFile } from "../ImageUtil";
import { saveAd } from "../services/AdService";
import Swal from "sweetalert2";
import { formatDate } from "../DateUtil";

library.add(faImage);

const adCreationSchema = yup.object({
	title: yup.string().required(),
	description: yup.string().required(),
	category: yup
		.object({
			id: yup.number().required(),
			value: yup.string(),
		})
		.required(),
	subCategory: yup
		.object({
			id: yup.number().required(),
			value: yup.string(),
		})
		.required(),
	price: yup
		.number()
		.nullable()
		.test({
			name: "Price required",
			exclusive: false,
			params: {},
			message: "Price is required",
			// kada vratim true onda je ispunjen test i nema errore
			test: function (value) {
				console.log(this.parent);
				if (value) {
					return true;
				}
				if (!value && this.parent.agreement === null) {
					return false;
				}
				if (!value && this.parent.agreement) {
					return true;
				}
				return false;
			},
		}),
	agreement: yup
		.boolean()
		.nullable()
		.test({
			name: "Agreement required",
			exclusive: false,
			params: {},
			message: "Agreement is required",
			test: function (value) {
				if (value || !value) {
					return true;
				}
				return false;
			},
		}),
});

export default class AdCreation extends Component {
	constructor() {
		super();
		this.state = {
			adCategory: [],
			show: false,
			categories: [],
			subCategories: [],
			image: null,
		};
	}

	handleSubmit = async (ad) => {
		try {
			const formData = new FormData();
			Object.keys(ad).forEach((key) => {
				if (key === "category" || key === "image" || key === "imageBytes") {
					return;
				}
				if (key === "subCategory") {
					formData.append(key, JSON.stringify({ id: ad[key].id, value: ad[key].name }));
					return;
				}
				formData.append(key, ad[key]);
			});
			if (ad.imageBytes) {
				const image = await base64ToFile(ad["imageBytes"]);
				formData.append("image", image);
			}
			await saveAd(formData);
			Swal.fire({
				text: "Uspešno ste sačuvali oglas!",
				confirmButtonColor: "#d1ad75",
				confirmButtonText: "Ok",
			});
		} catch (err) {
			console.log(err);
		}
	};

	getAdCategory = async () => {
		try {
			const data = await getCategories();
			await this.setState({ categories: data });
		} catch (err) {
			alert(err);
		}
	};

	handleCategoryChange = async (event, formikProps) => {
		const category = this.state.categories.find((item) => item.id == event.target.value);
		formikProps.setFieldValue("category", category);
		formikProps.setFieldValue("subCategory", {
			id: null,
			name: "",
		});
		console.log(category);
		await this.getSubCategories(category.id);
	};

	handleSubCategoryChange = async (event, formikProps) => {
		const subCategory = this.state.subCategories.find((item) => item.id == event.target.value);
		formikProps.setFieldValue("subCategory", subCategory);
	};

	handleChangeRichText = (formikProps, html) => {
		formikProps.setFieldValue("description", html);
	};

	handleChangeAgreement = async (formikProps, value) => {
		await formikProps.setFieldValue("agreement", value);
		await formikProps.setFieldTouched("agreement", value);
		await formikProps.setFieldValue("price", null);
		await formikProps.setFieldTouched("price", false);
	};

	handleChangePrice = async (formikProps, text) => {
		await formikProps.setFieldValue("price", text);
		await formikProps.setFieldTouched("price", true);
		await formikProps.setFieldValue("agreement", false);
		await formikProps.setFieldTouched("agreement", false);
	};

	handleChangeCurrency = async (formikProps, value) => {
		await formikProps.setFieldValue("currency", value);
		await formikProps.setFieldValue("agreement", value !== "" ? null : true);
	};

	getSubCategories = async (categoryId) => {
		try {
			const data = await getAllByCategoryId(categoryId);
			await this.setState({ subCategories: data });
		} catch (err) {
			console.log(err.message);
		}
	};

	async componentDidMount() {
		await this.getAdCategory();
		await this.getSubCategories(this.state.categories[0].id);
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
							id: this.props.ad ? this.props.ad.id : null,
							title: this.props.ad ? this.props.ad.title : null,
							description: this.props.ad ? this.props.ad.description : null,
							category: this.props.ad ? this.props.ad.category : null,
							subCategory: this.props.ad
								? {
										id: this.props.ad.subCategory.id,
										name: this.props.ad.subCategory.value,
								  }
								: null,
							price: this.props.ad ? this.props.ad.price.toString() : null,
							agreement: this.props.ad ? this.props.ad.agreement : null,
							currency: this.props.ad && this.props.ad.currency ? this.props.ad.currency : null,
							creationDate: formatDate(new Date()),
							image: this.props.ad && this.props.ad.image ? this.props.ad.image : null,
							imageBytes: this.props.ad && this.props.ad.imageBytes ? this.props.ad.imageBytes : null,
						}}
						onSubmit={(values) => {
							this.handleSubmit(values);
						}}
						validationSchema={adCreationSchema}
					>
						{(formikProps) => (
							<div className="fields-ad-creation column h-100">
								<div className="d-flex flex-column h-100 justify-content-center">
									<div className="form-group">
										<label className="label">Naslov oglasa</label>
										<TextInput
											name="title"
											type="text"
											placeholder="npr. Časovi nemačkog jezika"
											value={formikProps.values.title}
											onChange={formikProps.handleChange("title")}
											onBlur={formikProps.handleBlur("title")}
											classes={isInError(formikProps, "title")}
										/>
									</div>
									<div className="form-group">
										<label className="label">Opis oglasa</label>
										<RichTextEditor
											formikProps={formikProps}
											value={formikProps.values.description}
											onChange={this.handleChangeRichText}
											onBlur={formikProps.handleBlur("description")}
											classes={isInError(formikProps, "description")}
										/>
									</div>
									<div className="form-group form-row d-flex justify-content-center">
										<div className="d-flex justify-content-end col-4">
											{!formikProps.values.imageBytes ? (
												<FontAwesomeIcon icon="image" size="5x" />
											) : (
												// <p>Slika ovde</p>
												<img
													alt="slika-oglas"
													className="picked-image"
													src={
														formikProps.values.imageBytes.indexOf("data") === -1
															? `data:image/jpg;base64,${formikProps.values.imageBytes}`
															: formikProps.values.imageBytes
													}
												></img>
											)}
										</div>
										<div className="d-flex align-items-center col">
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
										<label className="label">Kategorija</label>
										<SelectInput
											name="category"
											type="text"
											items={this.state.categories}
											value={formikProps.values.category}
											onChange={(event) => this.handleCategoryChange(event, formikProps)}
											onBlur={formikProps.handleBlur("category")}
											classes={isInError(formikProps, "category")}
										/>
										<SelectInput
											name="subCategory"
											type="text"
											items={this.state.subCategories}
											value={formikProps.values.subCategory}
											onChange={(event) => this.handleSubCategoryChange(event, formikProps)}
											onBlur={formikProps.handleBlur("subCategory")}
											classes={isInError(formikProps, "subCategory")}
										/>
									</div>
									<div className="form-group">
										<label className="label">Cena</label>
										<PriceInput
											name="price"
											type="text"
											placeholder="Iznos"
											value={formikProps.values.price}
											onChangePrice={(event) =>
												this.handleChangePrice(formikProps, event.target.value)
											}
											onChangeAgreement={(value) =>
												this.handleChangeAgreement(formikProps, value)
											}
											onChangeCurrency={(value) => this.handleChangeCurrency(formikProps, value)}
											classes={isInError(formikProps, "price")}
										/>
									</div>
									<div className="form-group">
										<AdTypeModal
											onClose={() => this.setState({ show: false })}
											show={this.state.show}
										/>
										<label className="row label" style={{ marginLeft: "3px" }}>
											Tip oglasa
											<FontAwesomeIcon
												onClick={() => this.setState({ show: true })}
												icon={faQuestionCircle}
												style={{
													color: "black",
													marginLeft: "3px",
													marginTop: "5px",
													cursor: "pointer",
												}}
												data-toggle="modal"
												data-target="#typeModal"
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
										<button
											type="button"
											className="btn gold-btn"
											onClick={() => {
												console.log(formikProps.values);
												formikProps.handleSubmit();
											}}
										>
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
