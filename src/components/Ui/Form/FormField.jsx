import React from "react";

const FormField = ({ label, id, type, title = "text", ...rest }) => (
  <div className="row mb-3">
    <label htmlFor={id} className="col col-form-label">
      {label}
    </label>
    <div className="col-sm-8">{ti}</div>
  </div>
);

export default FormField;
