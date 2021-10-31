import React from "react";
import AdCombined from "../components/AdCombined";
import SideBanner from "../layout/SideBanner";
import SearchForAd from "../components/SearchForAd.js";
import { connect } from "react-redux";
import { getAllBySubcategoryId } from "../services/AdService";

class Ads extends React.Component {
	state = {
		ads: [],
		subcategory: ""
      };

	async getAllBySubCategoryId(id) {
		try {
		  const data = await getAllBySubcategoryId(
			id
		  );
		  console.log(data)
		  this.setState({ ads: data, subcategory: id });
		} catch (err) {
		  this.setState({ ads: [], subcategory: id });
		  console.log(err.message);
		}
	  }

	componentDidMount(){
		this.getAllBySubCategoryId(this.props.subcategory);
	}

	componentDidUpdate(){
		if(this.state.subcategory !== this.props.subcategory){
			this.getAllBySubCategoryId(this.props.subcategory);
		}
	}

	render() {
		const adsList = this.state.ads.map((ad) => (
			<AdCombined key={ad.id} ad={ad} />
		));
		return (
			<div className="container-fluid">
				<SearchForAd category={this.props.match.params.category} />
				<div class="row" style={{ marginTop: "125px" }}>
					<SideBanner />
					<div class="col-sm-8">
						{adsList}
						<div class="pagination">
                        <a href="/">1</a>
                        <a href="/">2</a>
                        <a href="/">3</a>
                        <a href="/" class="tacke">...</a>
                        <a href="/">7</a>
                    </div>
					</div>
					<SideBanner />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		subcategory: state.subcategoryReducer.selectedSubcategory
	};
};

export default connect(mapStateToProps)(Ads);
