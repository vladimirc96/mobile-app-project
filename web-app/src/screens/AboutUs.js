import React, { Component } from "react";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AboutUs extends Component {
	render() {
		return (
			<div class="layout_padding about_section">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<h1 class="about_taital">O nama i uslugama koje mi pružamo</h1>
							<p class="about_text_first_pt">
								Pronađi sam je aplikacija koju je razvio tim mladih ljudi, entuzijasta, sa ciljem da uz
								pomoć te aplikacije, oni koji traže određenu uslugu lako i brzo nađu one koji tu uslugu
								pružaju.
							</p>
							<p class="about_text_second_pt">Sebi smo postavili tri izazova:</p>
							<div class="row">
								<div class="col-sm-1 about_text_cirle_section">
									<FontAwesomeIcon icon={faCircle} style={{ color: "white" }} />
								</div>
								<div class="col-sm-11 about_text_section">
									<p class="about_text">
										da vredni ljudi, koji nude svoje znanje i veštine, budu lako dostupni onima koji
										to traže
									</p>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-1 about_text_cirle_section">
									<FontAwesomeIcon icon={faCircle} style={{ color: "white" }} />
								</div>
								<div class="col-sm-11 about_text_section">
									<p class="about_text">
										da što više korisnih usluga imate na jednom mestu i to na Vašem mobilnom uređaju
									</p>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-1 about_text_cirle_section">
									<FontAwesomeIcon icon={faCircle} style={{ color: "white" }} />
								</div>
								<div class="col-sm-11 about_text_section">
									<p class="about_text">
										da iskoristimo tehnologiju na pravi način, jer je brža od tradicionalnog
										oglašavanja (novinski oglasi, lepljenje letaka po autobuskim stanicama...)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="banner_bt">
					<p class="contact_us_text"> Imate li pitanja ili sugestiju?</p>
					<button class="contact_us_bt">
						<a href="/">
							<span class="doctor">
								<FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
							</span>
							Kontaktirajte nas
						</a>
					</button>
				</div>
			</div>
		);
	}
}
