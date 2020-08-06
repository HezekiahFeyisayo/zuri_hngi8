import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navigation/nav";
import Footer from "./components/navigation/Footer/footer";
import Landing from './components/landing/Landing'

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Landing />
        <Route exact path="/">
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
