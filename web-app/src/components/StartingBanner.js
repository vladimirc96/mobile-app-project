import React, { Component } from "react";
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
									<button
										class="set_bt"
									>
										Postavi oglas
									</button>
								</div>
								<div class="banner_bt_find_ad">
									<button
										class="read_bt"
									>
										Pronađi oglas
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
