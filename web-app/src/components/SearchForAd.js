import React, { Component } from "react";
import { CategoriesArray } from "./../components/Categories";
import { getAllByCategoryId } from "../services/SubCategoryService";
import { connect } from "react-redux";

export class SearchForAd extends Component {
	state = {
		selectedCategory: this.props.category,
		selectedSubcategory: 0,
        subCategories: [],
      };

    componentDidMount() {
        this.getAllByCategoryId(this.props.category);
    }
    
	async getAllByCategoryId(id) {
		try {
			const data = await getAllByCategoryId(
			id
			);
			this.setState({ subCategories: data });
		} catch (err) {
			console.log(err.message);
		}
	}

	handleCategoryChange = (event) => {
		this.setState({selectedCategory: event.target.value});
		this.getAllByCategoryId(event.target.value);
	}

	handleSubcategoryChange = (event) => {
		this.setState({selectedSubcategory: event.target.value});
		this.props.updateSubcategory(event.target.value);
	}

	render() {
		const categoryList = CategoriesArray.map((category) => (
			<option key={category.id} value={category.id}>{category.name}</option>
		));
		const subcategoryList = this.state.subCategories.map((sub) => (
			<option key={sub.id} value={sub.id}>{sub.name}</option>
		));
		return (
			<div className="row justify-content-center">
				<div className="col-sm-8">
					<div class="search_box">
						<div class="row">
							<div class="col-sm-6">
								<p class="picker_text">Kategorija:</p>
							</div>
							<div class="col-sm6" style={{ marginLeft: "14px" }}>
								<p class="picker_text">Potkategorija:</p>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<div class="form-select">
										<select className="form-control" onChange={this.handleCategoryChange} value={this.state.selectedCategory}>
											{categoryList}
										</select>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<div class="form-select">
										<select className="form-control" onChange={this.handleSubcategoryChange} value={this.state.selectedSubcategory}>
											<option>Odaberi potkategoriju:</option>
											{subcategoryList}
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSubcategory: (subcategory) => dispatch({ type: "UPDATE_SELECTED_SUBCATEGORY", data: subcategory }),
	};
};

export default connect(null, mapDispatchToProps)(SearchForAd);
