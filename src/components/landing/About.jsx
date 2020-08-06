import React from "react";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";

import rightRow from "../../assets/images/icons/rightRow.svg";

const About = () => (
  <section className="about my-4 py-5">
    <div className="container">
      <h3 className="text-uppercase mt-2"> about zuri internship </h3>
      <h2 className="mb-lg-5 mb-0 ">
        What do you gain by enrolling in this internship?
      </h2>
      {/* row  */}
      <div className="row pt-5 pb-lg-5 pb-0 ">
        <div className="col-12 col-lg-6 mr-auto text-center text-lg-left ">
          <img src={about1} className="img-fluid " alt="illustrative image" />
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-end">
          <div>
            <h4 className="mb-4 mt-4 mt-lg-0">
              Become an intern and learn remotely
            </h4>
            <p>
              Our aim is to help everyone willing to kick-start a career in tech
              without distance being a barrier. Join one of the best remote
              learning opportunities in tech by signing up with us. Expand your
              knowledge with new challenging tasks and kick-start your career in
              tech. This is also a chance to connect with valuable and efficient
              teammates across the globe from the comfort of your home.
            </p>
            <div className="about__link  mt-1 mt-lg-5">
              <a href="#">
                Learn More <img src={rightRow} alt="row" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* row  */}
      {/* row  */}
      <div className="row pt-5 pb-lg-5 pb-0 ">
        <div className="col-12 col-lg-6 d-flex align-items-end order-2 order-lg-1">
          <div>
            <h4 className="mb-4 mt-4 mt-lg-0">
              Onboard And Connect With Teammates
            </h4>
            <p className="pr-0 pr-lg-5">
              Start.ng gives room for effective teamwork while interns work on
              real-life projects. You get the chance to collaborate with other
              creatives from different parts of the world, which prepares you
              for future team collaborations outside the internship. A
              well-planned, coordinated event where young talented folks from
              across the globe participated remotely and were involved in
              learning key skills needed to becoming the best globally
            </p>
            <div className="about__link  mt-1 mt-lg-5">
              <a href="#">
                Learn More <img src={rightRow} alt="row" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 mr-auto text-lg-left text-center order-1 order-lg-2 ">
          <img src={about2} className="img-fluid " alt="illustrative image" />
        </div>
      </div>
      {/* row  */}

      {/* row  */}
      <div className="row pt-5 pb-5 ">
        <div className="col-12 col-lg-6 mr-auto text-lg-left text-center">
          <img src={about3} className="img-fluid " alt="illustrative image" />
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-end">
          <div>
            <h4 className="mb-4 mt-4 mt-lg-0">
              Build Scalable Products & Grow your portfolio
            </h4>
            <p>
              Throughout the internship, you will work on scalable products.
              This will give you an insight into real-world projects and prepare
              you for more challenging tasks as you take on real-time jobs after
              the internship. During the course of the internship, you will be
              introduced to different projects to work on. These projects could
              be added to your portfolio as quality samples to put you ahead of
              the competition when job hunting.
            </p>
            <div className="about__link  mt-1 mt-lg-5">
              <a href="#">
                Learn More <img src={rightRow} alt="row" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* row  */}
    </div>
  </section>
);

export default About;
