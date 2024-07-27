import React from "react";
import "./Box.css"

function Box({title, children,}) {
  return (
    <div>
      <div className="box-content">
        <div><h4 className="title-student-data py-3 px-5"><strong>{title}</strong></h4></div>
        <div className="d-flex flex-row justify-content-center">
          <div className="d-flex flex-row flex-wrap gap-2 align-items-start mb-4">
            {children}
          </div>
          <div className="footer d-grid gap-2 d-md-flex justify-content-md-end"></div>
        </div>
      </div>
    </div>
  );
}

export default Box;
