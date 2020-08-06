import React from 'react';

import './registration.css';

const Registration = () => {

  return (
    <div className='registration-wrapper'>
      <div className='registration-header text-center'>
        <div className='container'>
          <div className='d-md-block mx-auto col-md-8 registration-header-body'>
            <p className='registration-header-title'>APPLICATION FOR iNTERNSHIP</p>
            <h2 className='registration-header-text font-weight-bold'>
              Welcome to the internship of 
              great opportunities and learning
            </h2>
          </div>
        </div>
      </div>

      <div className='registration-body pt-5 pb-3 pb-lg-4'>
        <div className='container'>
          <div className='col-md-8 pl-0'>
            <h3 className='registration-body-header py-3'>
              You are a minute away from being a part of 
              our team, kindly fill in your information below:
            </h3>
          </div>
          <form>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor='firstName'>First Name</label>
                  <input id='firstName' type='text' className='form-control registration-form-input' placeholder='John' required />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor='lastName'>Last Name</label>
                  <input id='lastName' type='text' className='form-control registration-form-input' placeholder='Doe' required />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6 py-2'>
                <div className='form-group'>
                  <label htmlFor='enail'>Email</label>
                  <input id='email' type='email' className='form-control registration-form-input' required/>
                </div>
              </div>
              <div className='col-lg-6 py-2'>
                <div className='form-group'>
                  <label htmlFor="gender">Gender</label>
                  <select name="gender" id="gender" className='form-control registration-form-select'>
                    <option></option>
                    <option value="female" className='registration-form-option'>Female</option>
                    <option value="male" className='registration-form-option'>Male</option>
                    <option value="others" className='registration-form-option'>Others</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <p>Upload Image</p>
                  <input id='uploadImage' type='file' className='form-control registration-input-file' accept='image/*' required/>
                  <label htmlFor='uploadImage' className='registration-label form-control pb-3 pt-4' ></label>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <p>Upload CV</p>
                  <input id='uploadCV' type='file' className='form-control registration-input-file' accept='.pdf' required/>
                  <label htmlFor='uploadCV' className='registration-label form-control pb-3 pt-4 mb-1' ></label>
                  <p className='registration-small-text'>PDF Only</p>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor="country">Country</label>
                  <select name="country" id="country" className='form-control registration-form-select'>
                    <option></option>
                    <option value="america">America</option>
                    <option value="canadia">Canada</option>
                    <option value="india">India</option>
                    <option value="italia">Italy</option>
                    <option value="nigeria">Nigeria</option>
                  </select>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor="nationality">Nationality</label>
                  <select name="nationality" id="nationality" className='form-control registration-form-select'>
                    <option></option>
                    <option value="american">American</option>
                    <option value="canadian">Canadian</option>
                    <option value="indian">Indian</option>
                    <option value="italian">Italian</option>
                    <option value="nigerian">Nigerian</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor='addressOne'>Address 1</label>
                  <input id='addressOne' type='text' className='form-control registration-form-input' placeholder='Enter address here' required />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor='addressTwo'>Address 2</label>
                  <input id='addressTwo' type='text' className='form-control registration-form-input' placeholder='Enter address here' required />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor="state">State</label>
                  <select name="state" id="state" className='form-control registration-form-select'>
                    <option></option>
                    <option value="newyork">New York</option>
                    <option value="toronto">Toronto</option>
                    <option value="dehli">Dehli</option>
                    <option value="rome">Rome</option>
                    <option value="lagos">Lagos</option>
                  </select>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor="city">City</label>
                  <select name="city" id="city" className='form-control registration-form-select'>
                    <option></option>
                    <option value="newyork">New York</option>
                    <option value="toronto">Toronto</option>
                    <option value="dehli">Dehli</option>
                    <option value="rome">Rome</option>
                    <option value="lagos">Lagos</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor='zipcode'>Zipcode</label>
                  <input id='zipcode' type='text' className='form-control registration-form-input' placeholder='Enter Zipcode' required />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='form-group py-2'>
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input id='phoneNumber' type='text' className='form-control registration-form-input' placeholder='Enter phone number' required />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <div className='form-group py-2'>
                <label htmlFor='message'>Tell us about yourself and why you want to work with us?</label>
                <textarea rows='10' id='message' className='form-control registration-form-input' placeholder='Write here...' ></textarea>
                </div>
              </div>
            </div>

            <div className='d-flex'>
              <div className="form-check pr-4 pr-md-3 pl-0">
                <input className="form-check-input registration-form-check" type="checkbox" id="regCheck" />
                <label className="form-check-label registration-form-check-label" htmlFor="regCheck"> </label>
              </div>
              <p>By checking the box, you agree to the terms and condition of this site</p>
            </div>

            <div className='text-center py-4'>
              <button className='btn registration-button px-3 py-2'>Submit</button>
            </div>

          </form>

          <div className='registration-farewell text-left'>
            <p className='registration-great-choice mb-1'>Great Choice!!!</p>
            <p className='pt-1'>You will be part of our team in no time.</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Registration;
