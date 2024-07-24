import { useLocation, useNavigate } from "react-router";
import Modal from "../Ui/Modal/Modal";
import { useState } from "react";
import { Login } from "../../pages/Login/Login";
import "./Navbar.css"

function Navbar() {
  const [modalLogin, setmodalLogin] = useState(false);
  const navigate = useNavigate();
  function handleClick(route) {
    if (route === "landingPage") {
      navigate("/landingPage");
    } else if (route === "MajorPage") {
      navigate("/MajorPage");
    } else {
    }
  }

  const location = useLocation();
  const hash = location.hash;
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid fixed">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
          <ul className="menu-items-desktop-v2 navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="menu-home-desktop-v2 active"
                aria-current="page"
                onClick={() => handleClick("landingPage")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu-bidang-keahlian-desktop-v2"
                onClick={() => handleClick("MajorPage")}
              >
                Bidang Keahlian
              </a>
            </li>
            <li className="nav-item">
              <a
                className="menu-alur-pendaftaran-desktop-v2"
                href="#alur-daftar"
              >
                Alur Pendaftaran
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="menu-pendaftaran-v2 w-button"onClick={() => setmodalLogin(true)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Pendaftaran
              </a>
            </li>
          </ul>
          {modalLogin && (
                  <Login title={"Sebelum lanjut, login dulu yuk !"} />
                )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
