import React from "react";
import "./footer.css";
import Logo from "../../../assets/images/logo.png";
import Facebook from "../../../assets/images/facebook.png";
import Twitter from "../../../assets/images/twitter.png";
import { pageurl } from "../../../utils/constants";

const Footer = () => {
  return (
    <div className="footer px-lg-5">
      {/* FOOTER FOR SMALLER SCREENS */}
      <div className="row px-3 pt-3 d-md-none">
        <div className="col-6">
          <div className="quick-links">
            <p className="footer-heading">Quick Links</p>
            <nav className="nav flex-column">
              <a className="nav-link pl-0 pb-1" href={pageurl.HOME}>
                Home
              </a>
              <a className="nav-link pl-0 pb-1" href={pageurl.CURRICULUM}>
                Curriculum
              </a>
              <a className="nav-link pl-0 pb-1" href={pageurl.PREVIOUSTECHIES}>
                Previous Techies
              </a>
              <a className="nav-link pl-0 pb-1" href={pageurl.FAQ}>
                FAQ
              </a>
              <a
                className="nav-link pl-0 pb-1"
                href={pageurl.REQUESTCERTIFICATE}
              >
                Request Certificates
              </a>
              <a className="nav-link pl-0 pb-1" href={pageurl.TERMSCONDITIONS}>
                Terms and Conditions
              </a>
            </nav>
          </div>
          <div className="brand-logo mt-4">
            <img src={Logo} alt="brand logo"></img>
          </div>
        </div>
        <div className="col-6">
          <div className="footer-contact">
            <p className="footer-heading">Contact Us</p>
            <p>hello@start.ng</p>
          </div>
          <div className="footer-address">
            <p className="footer-heading">Office Address</p>
            <p>92 Wolverine Avenue, Ikeja,</p>
            <p>Lagos State, Nigeria.</p>
          </div>
          <div className="footer-follow mt-5">
            <p className="footer-heading">Follow Us</p>
            <div className="social-icons d-flex">
              <a href="/">
                <img src={Facebook} alt="facebook icon" className="mr-4"></img>
              </a>
              <a href="/">
                <img src={Twitter} alt="twitter icon"></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER FOR MEDIUM SCREENS */}
      <div className="row d-none d-md-flex pt-3 px-md-3 px-lg-5">
        <div className="col-md-2 pl-lg-4 pl-xl-5">
          <img src={Logo} alt="brand logo"></img>
        </div>
        <div className="col-md-3">
          <div className="quick-links">
            <p className="footer-heading">Quick Links</p>
            <nav className="nav flex-column">
              <a className="nav-link pl-0 pb-1" href={pageurl.HOME}>
                Home
              </a>
              <a className="nav-link pl-0 pb-1" href={pageurl.CURRICULUM}>
                Curriculum
              </a>
              <a className="nav-link pl-0 pb-1" href={pageurl.PREVIOUSTECHIES}>
                Previous Techies
              </a>
              <a className="nav-link pl-0 pb-1" href={pageurl.FAQ}>
                FAQ
              </a>
              <a
                className="nav-link pl-0 pb-1"
                href={pageurl.REQUESTCERTIFICATE}
              >
                Request Certificates
              </a>
              <a className="nav-link pl-0 pb-1" href={pageurl.TERMSCONDITIONS}>
                Terms and Conditions
              </a>
            </nav>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-contact">
            <p className="footer-heading">Contact Us</p>
            <p>hello@hng.ng</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-address">
            <p className="footer-heading">Office Address</p>
            <p>92 Wolverine Avenue, Ikeja,</p>
            <p>Lagos State, Nigeria.</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-follow">
            <p className="footer-heading">Follow Us</p>
            <div className="social-icons d-flex">
              <a href="/">
                <img src={Facebook} alt="facebook icon" className="mr-4"></img>
              </a>
              <a href="/">
                <img src={Twitter} alt="twitter icon"></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT CORNER FOR SMALL SCREENS */}
      <div className="col-12 px-3 mt-5 d-md-none">
        <footer className="footer-copyright border-top py-3">
          <p className="copyright text-center">
            &copy; 2020 StartNG. All Right Reserved
          </p>
        </footer>
      </div>

      {/* COPYRIGHT CORNER FOR MEDIUM TO LARGE SCREENS */}
      <div className="col-12 px-md-5 mt-5 d-none d-md-block">
        <footer className="footer-copyright border-top py-3">
          <p className="copyright text-center font-weight-bold">
            &copy; 2020 HNG.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
