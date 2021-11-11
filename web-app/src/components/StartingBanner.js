import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../css/StartingBanner.css";

export default class StartingBanner extends Component {
	render() {
		return (
			<div class="banner_layout_padding banner_section">
				<div class="container">
					<div class="row">
						<div className="left-banner-side-wrapper">
							<p
								class="banner-upper-text"
							>
								Postanite deo{" "}
							</p>
							<p
								class="banner-middle-text"
							>
								najveće baze usluga
							</p>
							<p
								class="banner-down-text"
							>
								u Novom Sadu
							</p>
							<div
								class="row banner-buttons-wrapper"
							>
								<div class="banner_bt_set_ad">
									<Link to="/ad-creation" style={{ textDecoration: "none" }}>
										<button
											class="set_bt"
										>
											Postavi oglas
										</button>
									</Link>
								</div>
								<div class="banner_bt_find_ad">
									<Link to="/ads" style={{ textDecoration: "none" }}>
										<button
											class="read_bt"
										>
											Pronađi oglas
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
