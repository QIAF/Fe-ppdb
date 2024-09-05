import React from "react";
import "../pages/LandingPage/LandingPage.css";
import ImgStudy from "../assets/images/study.png";
import ImgDesign from "../assets/images/design.png";
import ImgMilenial from "../assets/images/student.png";
import Marquee from "react-fast-marquee";

function Testimonial() {
  return (
    <section id="testimonial-lp">
      <div className="title-mengapa-lp text-center">
        <h4>
          <strong>Mengapa SMK 3 Muhammadiyah ?</strong>
        </h4>
      </div>
      <Marquee
        autoFill
        className="container mx-auto d-flex items-center justify-between gap-96"
      >
        <div className="row justify-content-center gap-2">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ImgMilenial}
                  className="img-fluid rounded-start mt-4"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title mt-3">Punya misi yang keren</h5>
                  <p className="card-text">
                    Misi mencetak generasi Islam yang nasionalis, profesional,
                    dan berdaya saing global.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ImgStudy}
                  className="img-fluid rounded-start mt-4"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title  mt-3">Fasilitas</h5>
                  <p className="card-text">
                    fasilitas yang lengkap, tenaga pengajar profesional, serta
                    jaringan kerja sama dengan berbagai perusahaan dan institusi
                    memberikan nilai lebih dalam mempersiapkan siswa menghadapi
                    dunia kerja.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ImgDesign}
                  className="img-fluid rounded-start mt-5"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title mt-3">Satu-satunyaa</h5>
                  <p className="card-text">
                    Satu-satunya di DIY! SMK Muhammadiyah 3 Yogya dapat Bantuan
                    1 M untuk Pengembangan Teaching Factory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
}
export default Testimonial;
