import React, { Component } from "react";
import StartingBanner from "./../components/StartingBanner";
import Categories from "./Categories";
import AdCreation from "./AdCreation";
import "./../css/Categories.css";

export class Home extends Component {
  render() {
    return (
      <div>
        {/* <StartingBanner/>
        <Categories/> */}
        <AdCreation/>
      </div>
    );
  }
}

export default Home;
