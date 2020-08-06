import React from "react";
import "./contact.css";

import MapImage2 from "../../assets/images/contact/map-2.png";

const Contact = () => {
  return (
    <div className="contact">
      {/*--CONTACT US HEADER */}
      <div className="text-center contact-title">
        <h1 className="contact-heading font-weight-bold">Contact Us</h1>
        <p className="contact-heading-2">
          Get in touch with us. We’d love to hear from you
        </p>
      </div>

      {/*--CONTACT US CONTAINER */}
      <div className="container px-4 py-5 px-md-5 mw-100 mb-5">
        <div className="row px-lg-5">
          {/*--CONTACT US FORM */}
          <div className="col-12 col-md-6 col-xl-4 px-md-5 pr-xl-0">
            <h5 className="contact-form-title font-weight-bold">
              Send us a message
            </h5>
            <form className="contact-form">
              <div className="form-group mb-xl-0">
                <label for="inputFullName" className="mb-0">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="inputFullName"
                ></input>
              </div>
              <div className="form-group mb-xl-0">
                <label for="inputEmailAddress" className="mb-0">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="inputEmailAddress"
                ></input>
              </div>
              <div className="form-group d-md-none d-xl-block">
                <label for="inputMessage" className="mb-0">
                  Message
                </label>
                <textarea
                  className="form-control rounded-0"
                  rows="7"
                  id="inputMessage"
                ></textarea>
              </div>
              <div className="form-group d-none d-md-block d-xl-none">
              <label for="inputMessage" className="mb-0">
              Message
            </label>
            <textarea
              className="form-control rounded-0"
              rows="5"
              id="inputMessage"
            ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn rounded-0 px-5 py-2 mt-xl-2 send-message"
              >
                Send Message
              </button>
            </form>
          </div>

          {/*--CONTACT US MAP */}
          <div className="col-12 d-md-none mt-5 mt-md-0 px-md-5">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0987275624757!2d3.3773159140940234!3d6.509186125137082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf61c9c63c5%3A0x466a0e854a8645cb!2sStart.Ng!5e0!3m2!1sen!2sng!4v1596577599715!5m2!1sen!2sng"
          title='map'
           width="100%"
           height="450"
          frameBorder="0"
           aria-hidden="false"
           tabIndex="0">
           </iframe>
          </div>

          <div className="d-none d-md-flex col-md-6 col-xl-4 mt-5 mt-md-0 px-md-5">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0987275624757!2d3.3773159140940234!3d6.509186125137082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf61c9c63c5%3A0x466a0e854a8645cb!2sStart.Ng!5e0!3m2!1sen!2sng!4v1596577599715!5m2!1sen!2sng"
          title='map'
           width="100%"
           height="100%"
          frameBorder="0"
           aria-hidden="false"
           tabIndex="0">
           </iframe>
          </div>

          {/*--CONTACT US INFO */}
          <div className="col-12 col-xl-4 mt-5 mt-xl-0 px-3 px-md-5 py-5 py-xl-0 pl-xl-0">
            <div className="container px-5 py-5 contact-info h-100">
              <h1 className="contact-info-title mb-5">Contact Information</h1>
              <div className="row">
                <div className="col-2">
                  <i className="fa fa-home info-icon" aria-hidden="true"></i>
                </div>
                <div className="col-10">
                  <p className="contact-info-address">
                    92 Wolverine Avenue, Ikeja, Lagos State, Nigeria.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <i
                    className="fa fa-envelope info-icon"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="col-10">
                  <p className="contact-info-address">Starthr@hotmail.com.</p>
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <i class="fa fa-phone info-icon" aria-hidden="true"></i>
                </div>
                <div className="col-10">
                  <p className="contact-info-address">+234876549881</p>
                </div>
              </div>

              <div className="d-flex mt-5">
                <i class="fa fa-instagram mr-4" aria-hidden="true"></i>
                <i class="fa fa-facebook-official mr-4" aria-hidden="true"></i>
                <i class="fa fa-twitter mr-4" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
