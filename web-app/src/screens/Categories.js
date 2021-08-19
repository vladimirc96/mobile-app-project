import React, { Component } from "react";
import { CategoriesArray } from "./../components/Categories";
import { Link } from "react-router-dom";

export default class Categories extends Component {
	render() {
		const categoryList = CategoriesArray.map((category) => (
			<div className="single-category" key={category.id}>
				<Link to={"ads/".concat(category.id)}>
					<img
						src={category.imagePath}
						alt="/"
						style={{
							marginTop: "5%",
							marginLeft: "15%",
							width: "70%",
							height: "auto",
						}}
					/>
					<p className="category-title">{category.name}</p>
				</Link>
			</div>
		));
		const rows = [];
		for (var i = 0; i < categoryList.length; i += 4) {
		rows.push(
				<div className="row categories-row" key={i}>
					{categoryList.slice(i, i + 4)}
				</div>
			);
		}
		return (
			<div className="row justify-content-center">
				<div className="categories-box">
					<div className="categories-title">
						<p className="categories-title-text"> Izaberite kategoriju</p>
					</div>
					{rows}
				</div>
			</div>
		);
	}
}
