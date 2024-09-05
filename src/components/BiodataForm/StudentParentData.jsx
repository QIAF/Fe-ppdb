import React from "react";
import { Input } from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";

function StudentParentData({ handleInput, formData, error }) {
  return (
    <div className="flex-column mx-4 justify-content-center">
      <div className="justify-content-center">
        <div className="table-responsive container ">
          <div className="center">
            <div className="header">
              <h5 style={{ color: "#816503" }}>Masukkan Data Orang Tua</h5>
            </div>
            <br />
            <div className="body center ">
              <div className="student-parent-data">
                <div className="row mb-3">
                  <label
                    htmlFor="inputfather_name"
                    className="col col-form-label"
                  >
                    Nama Ayah
                    {!formData.father_name && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"father_name"}
                      name="father_name"
                      value={formData.father_name}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.father_name} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputplace_birth_father"
                    className="col col-form-label"
                  >
                    Tempat lahir ayah
                    {!formData.place_birth_father && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      id={"place_birth_father"}
                      name="place_birth_father"
                      className="form-control"
                      placeholder=""
                      style={{ height: 100 }}
                      value={formData.place_birth_father}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.place_birth_father} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputfather_birth"
                    className="col col-form-label"
                  >
                    Tanggal lahir ayah{" "}
                    {!formData.father_birth && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      id={"father_birth"}
                      name="father_birth"
                      type={"date"}
                      className={"form-control"}
                      value={formData.father_birth}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.father_birth} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputmother_name"
                    className="col col-form-label"
                  >
                    Nama Ibu
                    {!formData.mother_name && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      id={"mother_name"}
                      name="mother_name"
                      type={"text"}
                      className={"form-control"}
                      value={formData.mother_name}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.mother_name} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputplace_birth_mother"
                    className="col col-form-label"
                  >
                    Tempat Lahir Ibu
                    {!formData.place_birth_mother && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      id={"place_birth_mother"}
                      name="place_birth_mother"
                      className="form-control"
                      placeholder=""
                      style={{ height: 100 }}
                      value={formData.place_birth_mother}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.place_birth_mother} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputmother_birth"
                    className="col col-form-label"
                  >
                    Tanggal Lahir Ibu
                    {!formData.mother_birth && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"date"}
                      className={"form-control"}
                      id={"-mother_birth"}
                      name="mother_birth"
                      value={formData.mother_birth}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.father_birth} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPhoneNumber"
                    className="col col-form-label"
                  >
                    Nomor Telepon Rumah
                    {!formData.phoneNumber_house && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"number"}
                      className={"form-control"}
                      id={"phoneNumber_house"}
                      name="phoneNumber_house"
                      value={formData.phoneNumber_house}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.phoneNumber_house} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputfather_job"
                    className="col col-form-label"
                  >
                    Pekerjaan ayah
                    {!formData.father_job && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"father_job"}
                      name="father_job"
                      value={formData.father_job}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.father_job} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="father_income" className="col col-form-label">
                    Pendapatan ayah perbulan{" "}
                    {!formData.father_income && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="father_income"
                      name="father_income"
                      value={formData.father_income}
                      onChange={handleInput}
                    >
                      <option value="">Pilih salah satu</option>{" "}
                      <option value="≥ Rp 500.000">≥ Rp 500.000</option>
                      <option value="≥ Rp 1.000.000">≥ Rp 1.000.000</option>
                      <option value="≥ Rp 2.000.000">≥ Rp 2.000.000</option>
                      <option value="≥ Rp 3.000.000">≥ Rp 3.000.000</option>
                      <option value="≥ Rp 4.000.000">≥ Rp 4.000.000</option>
                      <option value="≥ Rp 5.000.000">≥ Rp 5.000.000</option>
                    </select>

                    <ErrMsg msg={error.student_gender} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputmother_job"
                    className="col col-form-label"
                  >
                    Pekerjaan Ibu{" "}
                    {!formData.mother_job && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"mother_job"}
                      name="mother_job"
                      value={formData.mother_job}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.mother_job} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="mother_income" className="col col-form-label">
                    Pendapatan ibu perbulan{" "}
                    {!formData.mother_income && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="mother_income"
                      name="mother_income"
                      value={formData.mother_income}
                      onChange={handleInput}
                    >
                      <option value="">Pilih salah satu</option>{" "}
                      <option value="≥ Rp 500.000">≥ Rp 500.000</option>
                      <option value="≥ Rp 1.000.000">≥ Rp 1.000.000</option>
                      <option value="≥ Rp 2.000.000">≥ Rp 2.000.000</option>
                      <option value="≥ Rp 3.000.000">≥ Rp 3.000.000</option>
                      <option value="≥ Rp 4.000.000">≥ Rp 4.000.000</option>
                      <option value="≥ Rp 5.000.000">≥ Rp 5.000.000</option>
                    </select>

                    <ErrMsg msg={error.student_gender} />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentParentData;
