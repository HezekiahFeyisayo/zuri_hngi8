import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/fonts/Averta-Bold.woff";
import "../../assets/fonts/Averta-Semibold.woff";
import "../../assets/fonts/Averta.woff";
import "./landing.css";
import Hero from "./Hero";
import About from "./About";
import Scope from "./Scope";
import Banner from './Banner';

const Landing = () => (
  <div>
    <Hero />
    <About />
    <Scope />
    <Banner />
  </div>
);

export default Landing;
