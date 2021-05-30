import './App.css';
import Header from "./Header.js"
import SearchForAd from "./SearchForAd.js"
import StartingBanner from "./StartingBanner.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./store/store";
import Ads from './Ads';

function App() {
  return (
        <Provider store={persistedStore.store}>
          <PersistGate loading={null} persistor={persistedStore.persistor}>
            <Router>
              <Header/>
              <StartingBanner/>
                <SearchForAd/>
                <Switch>
                  <Route path="/">
                    <Ads />
                    {/* <AdPage /> */}
                  </Route>
                </Switch>
            </Router>
          </PersistGate>
        </Provider>
  );
}

export default App;
