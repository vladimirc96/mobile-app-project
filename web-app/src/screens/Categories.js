import React, { Component } from 'react';
import categoryIcon from './../assets/images/kat_ikonice_krug/dizajn.png';

export default class Categories extends Component {
render() {
    return (
        <div className="row justify-content-center">
            <div className="categories-box">
                <div className="categories-title">
                    <p className="categories-title-text"> Izaberite kategoriju</p>
                </div>
                <div className="row categories-row">
                    <div className="single-category">
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div className="single-category">
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div className="single-category">
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div className="single-category">
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                </div>
                <div className="row categories-row">
                    <div className="single-category">
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div className="single-category">
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div className="single-category">
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div className="single-category">
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                </div>
                <div className="row categories-row">
                    <div style={{height: "220px", width: "20%", marginLeft: "4%", borderWidth: "1px", borderColor: "#ededed", borderRadius: "20px", boxShadow: "0px 0px 2px 1px #bdbdbd"}}>
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div style={{height: "220px", width: "20%", marginLeft: "4%", borderWidth: "1px", borderColor: "#ededed", borderRadius: "20px", boxShadow: "0px 0px 2px 1px #bdbdbd"}}>
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div style={{height: "220px", width: "20%", marginLeft: "4%", borderWidth: "1px", borderColor: "#ededed", borderRadius: "20px", boxShadow: "0px 0px 2px 1px #bdbdbd"}}>
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                    <div style={{height: "220px", width: "20%", marginLeft: "4%", borderWidth: "1px", borderColor: "#ededed", borderRadius: "20px", boxShadow: "0px 0px 2px 1px #bdbdbd"}}>
                        <img src={categoryIcon} style={{marginTop: "5%",marginLeft: "15%", width: "70%", height: "auto"}}/>
                        <p className="category-title"> Dizajn</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
}