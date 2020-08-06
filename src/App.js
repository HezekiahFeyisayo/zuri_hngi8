import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navigation/nav";
import Footer from "./components/navigation/Footer/footer";
import FAQ from "./components/FAQ/FAQ";

import { pageurl } from "./utils/constants";
import Landing from './components/landing/Landing'
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path={pageurl.FAQ} component={FAQ}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
