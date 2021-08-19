import React from "react";
import ad from "./../assets/images/ad.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faUser,
	faMapMarkerAlt,
	faPhoneAlt,
	faEnvelope,
	faThumbsUp,
	faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import {stripHtml} from "../StringUtil";

library.add(faUser, faMapMarkerAlt, faPhoneAlt, faEnvelope, faThumbsUp, faThumbsDown);

class BigAd extends React.Component {
	render() {
		return (
			<div className="ad-container">
				<div className="row big-ad-title">
					<div style={{ width: "40%", textAlign: "center" }}>
						<h3> {this.props.ad.title} </h3>
					</div>
				</div>
				<div className="big-ad-details-container">
					<div className="row">
						<div className="big-ad-image">
							<img src={ad} alt="" style={{ width: "100%", height: "100%" }} />
						</div>
						<div className="big-ad-details">
							<p className="big-ad-details-text">
								<FontAwesomeIcon icon="user" style={{ marginRight: "10px" }} />
								Korisnik: {this.props.ad.user.firstName+" "+this.props.ad.user.lastName}
							</p>
							<p className="big-ad-details-text">
								<FontAwesomeIcon icon="map-marker-alt" style={{ marginRight: "10px" }} />
								Lokacija: {this.props.ad.user.location.value}
							</p>
							<p className="big-ad-details-text">
								<FontAwesomeIcon icon="envelope" style={{ marginRight: "10px" }} />E Mail:
								{this.props.ad.user.email}
							</p>
							<p className="big-ad-details-text">
								<FontAwesomeIcon icon="phone-alt" style={{ marginRight: "10px" }} />
								Broj Telefona: {this.props.ad.user.phoneNumber}
							</p>
							<p style={{ paddingLeft: "10%" }}>
								<FontAwesomeIcon icon="thumbs-up" style={{ marginRight: "10px" }} />
								<span
									style={{
										marginRight: "2%",
										fontSize: "20px",
										fontWeight: "600",
									}}
								>
									{this.props.ad.user.positiveRatings}
								</span>
								<FontAwesomeIcon icon="thumbs-down" style={{ marginRight: "5%" }} />
								<span
									style={{
										fontSize: "20px",
										fontWeight: "600",
									}}
								>
									{this.props.ad.user.negativeRatings}
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="big-ad-price-box">
					<p className="big-ad-price-text">{this.props.ad.price} RSD</p>
				</div>
				<div className="big-ad-description">
					<p className="big-ad-description-text">
						{stripHtml(this.props.ad.description)}
					</p>
				</div>
			</div>
		);
	}
}

export default BigAd;
