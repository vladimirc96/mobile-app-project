import './App.css';
import Header from "./Header.js"
import SearchForAd from "./SearchForAd.js"
import StartingBanner from "./StartingBanner.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <StartingBanner/>
        <Switch>
          <Route path="/">
            <SearchForAd/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
