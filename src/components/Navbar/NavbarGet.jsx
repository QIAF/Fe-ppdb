import React, { useState } from "react";
import ImgLogo from "../../assets/images/img-logo-hijau.png";
import { useLocation, useNavigate } from "react-router";
import ImgLogout from "../../assets/icon/icon-logout.svg";
import { Button } from "../Ui/Button/Button";
import Transparent from "../Ui/Transparent/Transparent";
import CustomModal from "../Ui/Modal/CustomModal";
import Cookies from "js-cookie";
export default function NavbarGet() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("formData");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-major navbar-expand-lg ">
      <div className="container-fluid fixed">
        <img
          src={ImgLogo}
          style={{ maxWidth: "180px", width: "100%" }}
          alt="SMK Muhammadiyah 3 Yogyakarta"
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
              <Button onClick={() => setModal(true)}>
                <img src={ImgLogout} alt="Logout" />
              </Button>
            </li>
            {modal && (
              <Transparent disabled={true} className="min-vw-100">
                <CustomModal
                  icon={""}
                  title={"Keluar?"}
                  confirmAction={handleLogout}
                  cancelAction={() => setModal(false)}
                />
              </Transparent>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
