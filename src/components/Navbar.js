import React from "react";
import Logo from "../assets/hacktoberfest-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://github.com">
          {/* <img
            id="logo"
            src="https://cdn.pixabay.com/photo/2012/04/11/00/10/math-27248_960_720.png"
            alt="Gopher"
          /> */}
          <img
            id="logo"
            // src={require("../../public/hacktoberfest-logo.png")}
            src={Logo}
            alt="Hacktoberfest 2022 Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="http://localhost:3000/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="https://github.com/topics/hacktoberfest"
                target="_blank"
                rel="noreferrer"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="https://github.com/ch2isk4kos/hacktoberfest-2022"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="https://www.twitter.com/ch2isk4kos"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Algorithms
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tools
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Resume
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// move nav-items to right side of navbar: https://www.youtube.com/watch?v=ecuQnWfCc5o
