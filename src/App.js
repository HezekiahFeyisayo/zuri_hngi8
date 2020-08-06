import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navigation/nav";
import Footer from "./components/navigation/Footer/footer";
import Contact from "./components/contact/contact";

import { pageurl } from "./utils/constants";
import FAQ from "./components/FAQ/FAQ";
import Landing from './components/landing/Landing'
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={pageurl.CONTACT} component={Contact}/>
        <Route exact path="/" component={Landing} />
        <Route exact path={pageurl.FAQ} component={FAQ}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
