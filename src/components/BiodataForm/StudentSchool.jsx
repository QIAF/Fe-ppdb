import React from "react";
import {Input} from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";

function StudentSchool({ handleInput, formData, error }) {
  return (
    <div className="flex-column mx-4 justify-content-center">
      <div className="justify-content-center">
        <div className="table-responsive container ">
          <div className="center">
            <div className="header">
              <h5 style={{ color: "#816503" }}>Raport</h5>
            </div>
            <br />
            <div className="body center ">
              <form action="">
                <div className="row mb-3">
                  <label
                    htmlFor="inputschool_name"
                    className="col col-form-label"
                  >
                    Nama Sekolah
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"school_name"}
                      name="school_name"
                      value={formData.school_name}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.school_name} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputschool_address"
                    className="col col-form-label"
                  >
                    Alamat Sekolah
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"school_addressh"}
                      name="school_address"
                      value={formData.school_address}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.school_address} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputijazah_number"
                    className="col col-form-label"
                  >
                    Nomor Ijazah
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"Number"}
                      className={"form-control"}
                      id={"ijazah_number"}
                      name="ijazah_number"
                      value={formData.ijazah_number}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.ijazah_number} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="nisn" className="col col-form-label">
                    NISN
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"nisn"}
                      name="nisn"
                      value={formData.nisn}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.nisn} />
                  </div>
                </div>
              </form>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSchool;
