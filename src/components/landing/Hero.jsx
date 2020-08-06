import  React  from 'react';
import imageHero from '../../assets/images/heroImage.png';


const Hero = () => (
  <section className="hero my-5">
      <div className="container">
          <div className="row mt-5 ">
              <div className="col-12 col-lg-6 my-2 ">
                  <h1 className="pt-1 pt-xl-5  pb-4   "> We find the best talents and give them opportunity to excel. </h1>
                  <p className="pb-3"> I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
                  <div className="my-5 my-xl-5" >
                      <a href=""> Enroll Today </a>
                  </div>
              </div>
              <div className="col-12 col-lg-5 ml-auto text-center">
                  <img className="img-fluid" src={imageHero} alt="image logo" />
              </div>
          </div>
      </div>
  </section>
);

export default Hero