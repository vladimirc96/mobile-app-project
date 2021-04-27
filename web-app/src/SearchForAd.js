import React, { Component } from 'react';

export default class SearchForAd extends Component {
render() {
    return (
        <div class="container">
            <div class="search_box">
                <div class="row">
                    <div class="col-sm-4">
                        <p class="picker_text">Izaberi kategoriju:</p>
                    </div>
                    <div class="col-sm-4">
                        <p class="picker_text">Izaberi potkategoriju:</p>
                    </div>
                    <div class="col-sm-4"></div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                    <div class="form-group" width="200px">
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
                    <div class="col-sm-4">
                    <div class="form-group" width="200px">
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
                    <div class="col-sm-4">
                        <div class="form-group">
                            <button class="search_bt">Pretraži oglase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
