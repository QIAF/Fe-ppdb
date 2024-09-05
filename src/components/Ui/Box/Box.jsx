import React from "react";
import "./Box.css";

function Box({ title, children }) {
  return (
    <div>
      <div className="box-content">
        <div>
          <h4 className="title-student-data py-3 px-5">
            <strong>{title}</strong>
          </h4>
        </div>
        {children}
        <div className="footer d-grid gap-2 d-md-flex justify-content-md-end"></div>
      </div>
    </div>
  );
}

export default Box;
