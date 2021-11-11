import React from "react";
import Ad from "./Ad";
import BigAd from "./BigAd";

class AdCombined extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showBigAd: false };
	}

	render() {
		return <div onClick={()=>this.setState({showBigAd: true})}>{this.state.showBigAd ? <BigAd ad={this.props.ad} /> : <Ad ad={this.props.ad} />}</div>;
	}
}

export default AdCombined;
