import React from 'react';
import BrandLogo from '../../../assets/images/zuriLogo.png';
import { pageurl } from '../../../utils/constants';
import { NavLink } from 'react-router-dom';
import Menu from '../../../assets/images/icons8-menu-24.png';

import './nav.css';

const Navbar = () => {
  return (
    <div className="navigation">
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light px-2">
            <a className="navbar-brand" href={pageurl.HOME}>
              <img src={BrandLogo} alt="brand logo" className="brand-logo" />
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDropdown"
              aria-controls="NavbarDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={Menu} alt="dropdown menu"></img>
            </button>
            <div className="collapse navbar-collapse" id="navbarDropdown">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    exact
                    to={pageurl.HOME}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.CURRICULUM}
                  >
                    Curriculum
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.PREVIOUSTECHIES}
                  >
                    Previous Techies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.MENTORS}
                  >
                    Mentors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ml-lg-3"
                    activeClassName="activeLink"
                    to={pageurl.CONTACT}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn mt-3 mt-lg-0 h-btn px-4 text-white"
                    href={pageurl.ENROLLMENT}
                  >
                    Join HNGi8
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
