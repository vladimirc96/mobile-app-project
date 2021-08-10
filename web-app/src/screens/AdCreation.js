import React, { Component } from "react";
import "../css/AdCreation.css";
import SelectInput from "../components/ui/SelectInput";
import TextInput from "../components/ui/TextInput";
import PriceInput from "../components/ui/PriceInput";
import AdTypeInput from "../components/ui/AdTypeInput";
import { Formik } from "formik";
import * as yup from "yup";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RichTextEditor from "../components/RichTextEditor";
import { isInError } from "../validation";
import { getAllByCategoryId } from "../services/SubCategoryService";
import { getCategories } from "../services/CategoryService";
import { toBase64 } from "../ImageUtil";

library.add(faImage);

const adCreationSchema = yup.object({
	title: yup.string().required(),
	description: "",
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
	price: yup.number().required(),
	type: "",
});

export default class AdCreation extends Component {
	constructor() {
		super();
		this.state = {
			categories: [],
			subCategories: [],
			image: null,
		};
	}

	generateInitalValues = () => {
		console.log({
			id: this.props.ad ? this.props.ad.id : null,
			title: this.props.ad ? this.props.ad.title : "",
			description: this.props.ad ? this.props.ad.description : "",
			category: this.props.ad ? this.props.ad.category : this.state.categories[0],
			subCategory: this.props.ad
				? {
						id: this.props.ad.subCategory.id,
						name: this.props.ad.subCategory.value,
				  }
				: this.state.subCategories[0],
			price: this.props.ad ? this.props.ad.price.toString() : "",
			agreement: this.props.ad ? this.props.ad.agreement : null,
			currency: this.props.ad && this.props.ad.currency ? this.props.ad.currency : "RSD",
			creationDate: new Date().toISOString().slice(0, 10),
			image: this.props.ad && this.props.ad.imageBytes ? this.props.ad.imageBytes : null,
		});
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
		await formikProps.setFieldValue("agreement", value !== "" ? false : true);
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
		this.generateInitalValues();
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
							title: this.props.ad ? this.props.ad.title : "",
							description: this.props.ad ? this.props.ad.description : "",
							category: this.props.ad ? this.props.ad.category : this.state.categories[0],
							subCategory: this.props.ad
								? {
										id: this.props.ad.subCategory.id,
										name: this.props.ad.subCategory.value,
								  }
								: this.state.subCategories[0],
							price: this.props.ad ? this.props.ad.price.toString() : "",
							agreement: this.props.ad ? this.props.ad.agreement : null,
							currency: this.props.ad && this.props.ad.currency ? this.props.ad.currency : "RSD",
							creationDate: new Date().toISOString().slice(0, 10),
							image: this.props.ad && this.props.ad.imageBytes ? this.props.ad.imageBytes : null,
						}}
						onSubmit={(values) => {
							console.log(values);
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
										/>
									</div>
									<div className="form-group form-row d-flex justify-content-center">
										<div className="d-flex justify-content-end col-4">
											{!formikProps.values.imageBytes ? (
												// <FontAwesomeIcon icon="image" size="5x" />
												<p>Slika ovde</p>
											) : (
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
											// onBlur={formikProps.handleBlur("price")}
											classes={isInError(formikProps, "price")}
										/>
									</div>
									{/* ODRADITI KADA SE UTVRDI SMS PLACANJE */}
									{/* <div className="form-group">
										<label className="row label" style={{ marginLeft: "3px" }}>
											Tip oglasa
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
									</div> */}
									<div className="d-flex justify-content-center form-group">
										<button
											type="button"
											className="btn gold-btn"
											onClick={formikProps.handleSubmit}
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
