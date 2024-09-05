import React from "react";

import "./panel.css";
export default function Panel() {
  return (
    <div className="footer-area mt-">
      <div className="container">
        <div className="cta d-flex rounded-3 align-items-center justify-content-between px-5 py-3">
          <div className="cta-text">
            <h6 className="text-dark">Ada pertanyaan? Hubungi kami!</h6>
          </div>
          <div className="cta-button">
            <a
              href="https://wa.me/qr/GZM5NPTLZP7BA1"
              className="btn btn-dark rounded-3 "
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
