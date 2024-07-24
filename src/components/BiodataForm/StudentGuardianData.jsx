import React from "react";
import {Input} from "../Ui/Form/Input";

function StudentGuardianData({ handleInput, formData }) {
  return (
    <div className="flex-column mx-4 justify-content-center">
      <div className="justify-content-center">
        <div className="table-responsive container ">
          <div className="center">
            <div className="header">
              <h5 style={{ color: "#816503" }}>Masukkan Data Wali</h5>
            </div>
            <br />
            <div className="body center ">
              <div className="form">
                <div></div>
                <form action="">
                  <div className="row mb-3">
                    <label
                      htmlFor="inputguardian_name"
                      className="col col-form-label"
                    >
                      Nama Wali
                    </label>
                    <div className="col-sm-8">
                      <Input
                        type={"text"}
                        className={"form-control"}
                        id={"guardian_name"}
                        name="guardian_name"
                        value={formData.guardian_name}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputguardian_address"
                      className="col col-form-label"
                    >
                      Alamat
                    </label>
                    <div className="col-sm-8">
                      <textarea
                        id="guardian_address"
                        name="guardian_address"
                        className="form-control"
                        placeholder=""
                        style={{ height: 100 }}
                        value={formData.guardian_address}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputguardian_phone"
                      className="col col-form-label"
                    >
                      Nomor Telepon
                    </label>
                    <div className="col-sm-8">
                      <Input
                        type={"Number"}
                        className={"form-control"}
                        id={"guardian_phone"}
                        name={"guardian_phone"}
                        value={formData.guardian_phone}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputguardian_job"
                      className="col col-form-label"
                    >
                      Pekerjaan
                    </label>
                    <div className="col-sm-8">
                      <Input
                        type={"text"}
                        className={"form-control"}
                        id={"guardian_job"}
                        name={"guardian_job"}
                        value={formData.guardian_job}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentGuardianData;
