import React from "react";
import ad from "./../assets/images/ad.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import {stripHtml} from "../StringUtil";

library.add(faThumbsUp, faThumbsDown);

class Ad extends React.Component {
	render() {
		return (
			<div className="row ad-container" style={{ justifyContent: "space-between" }}>
				<div className="ad-image-container">
					<img src={ad} alt="" style={{ width: "100%", height: "100%" }} />
				</div>
				<div className="ad-description-container">
					<p className="ad-title-text">{this.props.ad.title}</p>
					<div className="row ad-description-text">
						<p className="text">
							{stripHtml(this.props.ad.description)}
						</p>
					</div>
					<div className="row">
						<p className="ad-owner-text">Vlasnik: {this.props.ad.user.firstName+" "+this.props.ad.user.lastName}</p>
					</div>
				</div>
				<div className="ad-details-container">
					<div className="col-sm-12 ad-price-box">
						<p className="ad-price-text">{this.props.ad.price} RSD</p>
					</div>
					<div style={{ alignSelf: "center", width: "80%" }}>
						<p style={{ marginTop: "-4px" }}>postavljen:</p>
						<p style={{ marginTop: "-12px", fontWeight: "bold" }}>{this.props.ad.creationDate}</p>
						<p style={{ marginTop: "-4px" }}>Lokacija:</p>
						<p style={{ marginTop: "-12px", fontWeight: "bold" }}>{this.props.ad.user.location.value}</p>
					</div>
					<div style={{ alignSelf: "center", width: "80%" }}>
						<span style={{ fontSize: "14pt" }}> {this.props.ad.user.positiveRatings} </span>
						<FontAwesomeIcon icon="thumbs-up" style={{ marginRight: "5px", fontSize: "14pt" }} />
						<FontAwesomeIcon icon="thumbs-down" style={{ marginLeft: "5px", fontSize: "14pt" }} />
						<span style={{ fontSize: "14pt" }}> {this.props.ad.user.negativeRatings} </span>
					</div>
				</div>
			</div>
		);
	}
}

export default Ad;
