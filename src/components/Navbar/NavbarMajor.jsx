import { useLocation, useNavigate } from "react-router";
import ImgLogo from "../../assets/images/img-logo-hijau.png";
import { useState } from "react";
import "./Navbar.css";
import { Login } from "../../pages/Login/Login";

function NavbarMajor() {
  const [modalLogin, setmodalLogin] = useState(false);
  const navigate = useNavigate();
  function handleClick(route) {
    navigate(route);
  }
  const location = useLocation();
  const hash = location.hash;

  return (
    <nav className="navbar navbar-major navbar-expand-lg ">
      <div className="container-fluid fixed">
        <img
          src={ImgLogo}
          style={{ maxWidth: "200px", width: "100%" }}
          alt="Logo"
        />
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
            <li>
              <a className="major-page active" onClick={() => handleClick("")}>
                Bidang Keahlian
              </a>
            </li>
            <li>
              <a onClick={() => setmodalLogin(true)}>Pendaftaran</a>
            </li>
          </ul>
          {modalLogin && <Login title={"Sebelum lanjut, login dulu yuk !"} />}
        </div>
      </div>
    </nav>
  );
}
export default NavbarMajor;
