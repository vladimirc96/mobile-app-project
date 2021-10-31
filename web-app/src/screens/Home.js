import React, { Component } from "react";
import StartingBanner from "./../components/StartingBanner";
import Categories from "./Categories";
import AdCreation from "./AdCreation";
import "../css/Categories.css";
import "../css/App.css";
import "../css/Ad.css";
import "../css/Layout.css";
import "../css/ContactUs.css";
import Header from "../layout/Header.js";
import Footer from "../layout/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import EditProfile from "../components/EditProfile";
import Ads from "./Ads";
import Profile from "./Profile";
import ProfileAds from "./ProfileAds";

export class Home extends Component {
	render() {
		return (
			<div>
				<div className="header-section">
					<Header />
				</div>
				<div className="middle-section">
					<Switch>
						<Route exact path="/" component={Categories}></Route>
						<Route exact path="/ads" component={AdCreation}></Route>
						<Route path="/user/:id/edit-profile" component={EditProfile} />
						<Route path="/contact-us" component={ContactUs} />
						<Route path="/categories" component={Categories} />
						<Route path="/ads/:category" component={Ads} />
						<Route path="/profile/:username" component={Profile} />
						<Route path="/profile-ads/:username" component={ProfileAds} />
					</Switch>
				</div>
				<div className="footer-section">
					<Footer />
				</div>
			</div>
		);
	}
}

export default Home;
