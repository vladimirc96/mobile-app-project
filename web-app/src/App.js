import './App.css';
import Header from "./Header.js"
import SearchForAd from "./SearchForAd.js"
import StartingBanner from "./StartingBanner.js"
import AboutUs from "./AboutUs"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ContactUs from './ContactUs';

function App() {
  return (
    <view>
      <Header/>
      <ContactUs/>
    </view>
  );
}

export default App;
