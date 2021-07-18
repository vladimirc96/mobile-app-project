import React, { Component } from "react";

export default class SearchForAd extends Component {
	render() {
		return (
			<div className="row justify-content-center">
				<div className="col-sm-8">
					<div class="search_box">
						<div class="row">
							<div class="col-sm-6">
								<p class="picker_text">Kategorija:</p>
							</div>
							<div class="col-sm6" style={{ marginLeft: "14px" }}>
								<p class="picker_text">Potkategorija:</p>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<div class="form-select">
										<select className="form-control">
											<option value="0">Select car:</option>
											<option value="1">Audi</option>
											<option value="2">BMW</option>
											<option value="3">Citroen</option>
											<option value="4">Ford</option>
											<option value="5">Honda</option>
											<option value="6">Jaguar</option>
											<option value="7">Land Rover</option>
											<option value="8">Mercedes</option>
											<option value="9">Mini</option>
											<option value="10">Nissan</option>
											<option value="11">Toyota</option>
											<option value="12">Volvo</option>
										</select>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<div class="form-select">
										<select className="form-control">
											<option value="0">Select car:</option>
											<option value="1">Audi</option>
											<option value="2">BMW</option>
											<option value="3">Citroen</option>
											<option value="4">Ford</option>
											<option value="5">Honda</option>
											<option value="6">Jaguar</option>
											<option value="7">Land Rover</option>
											<option value="8">Mercedes</option>
											<option value="9">Mini</option>
											<option value="10">Nissan</option>
											<option value="11">Toyota</option>
											<option value="12">Volvo</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
