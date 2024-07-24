import React from "react";
import "../pages/LandingPage/LandingPage.css";
import ImgMilenial from "../assets/images/img-milenial.png";
import Marquee from "react-fast-marquee";

function Testimonial(){
    return(
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
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
        </section>

    )
}
export default Testimonial