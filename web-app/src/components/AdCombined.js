import React from "react";
import Ad from "./Ad";
import BigAd from "./BigAd";

class AdCombined extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showBigAd: false };
	}

	hideBigAd = () => {
		this.setState({showBigAd:false})
	}

	render() {
		return <div>{this.state.showBigAd ? <BigAd ad={this.props.ad} click={this.hideBigAd} /> : <div onClick={()=>this.setState({showBigAd: true})}> <Ad ad={this.props.ad} /> </div>}</div>;
	}
}

export default AdCombined;
