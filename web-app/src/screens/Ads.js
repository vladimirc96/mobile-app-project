import React from "react";
import AdCombined from "../components/AdCombined";
import SideBanner from "../layout/SideBanner";
import SearchForAd from "../components/SearchForAd.js";

class Ads extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<SearchForAd />
				<div class="row" style={{ marginTop: "125px" }}>
					<SideBanner />
					<div class="col-sm-8">
						<AdCombined />
						<AdCombined />
						<AdCombined />
					</div>
					<SideBanner />
				</div>
			</div>
		);
	}
}

export default Ads;
