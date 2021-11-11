import React, { Component } from "react";
import { CategoriesArray } from "./../components/Categories";
import StartingBanner from "../components/StartingBanner";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {width: props.width}
	}

	componentWillMount(){
		this.setState({width: window.innerWidth});
	}

	render() {
		const categoryList = CategoriesArray.map((category) => (
			<div className="single-category" key={category.id}>
				<Link to={"ads/".concat(category.id)}
						style={{textDecoration: "none"}}>
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
		console.log(this.state.width);
		if(this.state.width > '900') {
			for (var i = 0; i < categoryList.length; i += 4) {
				rows.push(
					<div className="row categories-row" key={i}>
						{categoryList.slice(i, i + 4)}
					</div>
				);
			}
		}
		else {
			for (var i = 0; i < categoryList.length; i += 3) {
				rows.push(
					<div className="row categories-row" key={i}>
						{categoryList.slice(i, i + 3)}
					</div>
				);
			}
		}
		
		
		return (
			<div>
				< StartingBanner />
				<div className="row justify-content-center">
					<div className="categories-box">
						<div className="categories-title">
							<p className="categories-title-text"> Izaberite kategoriju</p>
						</div>
						{rows}
					</div>
				</div>
			</div>

		);
	}
}

Categories.propTypes = {
	width:PropTypes.string
};
   
Categories.defaultProps = {
	width:'500'
};
