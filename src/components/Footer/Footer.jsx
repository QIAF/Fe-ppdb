import ImgIcon from "../../assets/images/img-IconSMK.png";
import ImgInsta from "../../assets/images/img-instagram.png";
import ImgWa from "../../assets/icon/whatsapp.svg";
import ImgFacebook from "../../assets/images/img-facebook.png";
import ImgLink from "../../assets/images/img-linkedin.png";
import ImgLogo from "../../assets/images/img-logo-smk.png";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer-lp">
        <div className="container text-center text-lg-start">
          <footer className="row py-5  ">
            <div className="col-md-6">
              <div className="row d-flex justify-space-between align-items-center ">
                <div className="col-3">
                  <img src={ImgLogo} alt="" className="img-logo-smk d-flex" />
                </div>
              </div>
              <div className="col ">
                <small>
                  <p style={{ marginLeft: 25 }}>
                    Terwujudnya tamatan yang Islami, nasionalis, profesional,
                    berbudaya industri, dan berdaya saing global
                  </p>
                </small>
              </div>
            </div>
            <div className="col">
              <h4>Lokasi</h4>
              <ul className="nav flex-column">
                <li className="">
                  Jl. Pramuka No.62, Giwangan, Kec. Umbulharjo, Kota Yogyakarta,
                  Daerah Istimewa Yogyakarta 55163
                </li>
              </ul>
            </div>
            <div className="col-md-2 mt-3 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.896263473352!2d110.40661021524456!3d-7.795678079606576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59c5c7d31f1d%3A0x4e2e6d6d4771b9!2sSMK%203%20Muhammadiyah%20Yogyakarta!5e0!3m2!1sid!2sid!4v1693768745564!5m2!1sid!2sid"
                width="100%"
                height="100"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
