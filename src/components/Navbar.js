import React from "react";
import logo from "../logo resized again.png";
//React fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-navbar" style={{ backgroundColor: "#f49ac2" }}>

    <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PORTFOLIO
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                SERVICES
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
