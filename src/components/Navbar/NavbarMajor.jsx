import { useNavigate } from "react-router";
import ImgLogo from "../../assets/images/img-logo-hijau.png";

function NavbarMajor() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/landingPage");
  };

  return (
    <nav className="navbar navbar-major navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            <img src={ImgLogo} alt="" />
          </div>
          <ul className="menu-items-desktop-v2 navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="title-navbar menu-home-desktop-v2 active"
                aria-current="page"
                onClick={(e) => handleClick(e)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="title-navbar menu-bidang-keahlian-desktop-v2"
                href="#"
              >
                Bidang Keahlian
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="title-navbar menu-pendaftaran-v2 w-button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Pendaftaran
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavbarMajor;
