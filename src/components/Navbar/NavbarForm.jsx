import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./Navbar.css";
import ImgLogo from "../../assets/images/img-logo-hijau.png";

function NavbarForm() {
  const [modalLogin, setmodalLogin] = useState(false);
  const navigate = useNavigate();
  function handleClick(route) {
    if (route === "/") {
      navigate("/");
    } else if (route === "MajorPage") {
      navigate("/");
    } else {
    }
  }

  const location = useLocation();
  const hash = location.hash;
  return (
    <nav className="navbar navbar-major navbar-expand-lg ">
      <div className="container-fluid fixed">
        <img src={ImgLogo} style={{}} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            id="navbar-major"
            className="menu-items-desktop-v2 list-menu navbar-nav me-auto mb-2 mb-lg-0 "
          >
            <li>
              <a
                className="home"
                // aria-current="page"
                onClick={() => handleClick("/")}
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarForm;
