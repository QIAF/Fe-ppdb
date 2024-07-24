import React, { useState } from "react";
import { Input } from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";

function StudentFileData(error) {
  const [formData, setFormData] = useState();

  function handleFilePdf(e) {
    setFormData(e.target.files[0]);
    console.log(e.target.files);
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="studentDocument" className="form-label">
          Default file input example
        </label>
        <Input
          type={"file"}
          id="studentDocument"
          name="studentDocument"
          className={"form-control"}
          onChange={handleFilePdf}
          accept=".pdf"
          multiple={false}
        />
        <ErrMsg msg={error.studentDocument} />
      </div>
    </div>
  );
}

export default StudentFileData;
