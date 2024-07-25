import React from "react";
import {Input} from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";

function StudentData({ formData, handleInput, error , handleChange}) {
  return (
    <div className="flex-column mx-4 justify-content-center">
      <div className="justify-content-center">
        <div className="table-responsive container ">
          <div className="center">
            <div className="header">
              <h5 style={{ color: "#816503" }}>Masukkan Data Siswa</h5>
            </div>
            <br />
            <div className="body center ">
              <div className="student-data">
                <div className="row mb-3">
                  <label htmlFor="student_name" className="col col-form-label">
                    Nama Lengkap
                  </label>
                  <div className="col-sm-8 ">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"student_name"}
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_name} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_gender"
                    className="col col-form-label"
                  >
                    Jenis kelamin
                  </label>
                  <div className="col">
                    <Input
                      type={"radio"}
                      id={"Laki-Laki"}
                      className={"form-check-input"}
                      name="student_gender"
                      value="Laki-Laki"
                      checked={formData.student_gender === "Laki-Laki"}
                      onChange={handleChange}
                      // defaultChecked={formData.student_gender === "Laki-Laki"}
                    />
                    <label className="form-check-label" htmlFor="inlineMale">
                      {" "}
                      &nbsp; Laki-laki
                    </label>
                  </div>
                  <div className="col">
                    <Input
                      type={"radio"}
                      id={"Perempuan"}
                      className={"form-check-input"}
                      name="student_gender"
                      value="Perempuan"
                      checked={formData.student_gender === "Perempuan"}
                      onChange={handleChange}
                      // defaultChecked={formData.student_gender === "Perempuan"}
                    />
                    <label className="form-check-label" htmlFor="inlineFemale">
                      &nbsp; Perempuan
                    </label>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="place_birth"
                    className="col col-form-label"
                  >
                    Tempat lahir
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      id="place_birth"
                      name="place_birth"
                      className="form-control"
                      placeholder=""
                      style={{ height: 100 }}
                      value={formData.place_birth}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.place_birth} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="date_birth"
                    className="col col-form-label"
                  >
                    Tanggal lahir
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"date"}
                      className={"form-control"}
                      id={"date_birth"}
                      name="date_birth"
                      value={formData.date_birth}
                      onChange={handleInput}
                    />
                     <ErrMsg msg={error.date_birth} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_address"
                    className="col col-form-label"
                  >
                    Alamat Asal
                  </label>
                  <div className="col-sm-8">
                    <textarea
                      id={"student_address"}
                      name="student_address"
                      className="form-control"
                      style={{ height: 100 }}
                      value={formData.student_address}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_address} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_distance"
                    className="col col-form-label"
                  >
                    Jarak rumah ke sekolah
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"student_distance"}
                      name="student_distance"
                      value={formData.student_distance}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_distance} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_religion"
                    className="col col-form-label"
                  >
                    Agama
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"student_religion"}
                      name="student_religion"
                      value={formData.student_religion}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_religion} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_blood_type"
                    className="col col-form-label"
                  >
                    Golongan Darah
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"student_blood_type"}
                      name="student_blood_type"
                      value={formData.student_blood_type}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_blood_type} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="student_height" className="col col-form-label">
                    Tinggi Badan
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"number"}
                      className={"form-control"}
                      id={"student_height"}
                      name="student_height"
                      value={formData.student_height}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_height} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="student_weight" className="col col-form-label">
                    Berat Badan
                  </label>
                  <div className="col-sm-8">
                    <Input
                      id={"student_weight"}
                      name="student_weight"
                      type={"number"}
                      className={"form-control"}
                      value={formData.student_weight}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_weight} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="student_child" className="col col-form-label">
                    Anak ke-
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"number"}
                      className={"form-control"}
                      id={"student_child"}
                      name={"student_child"}
                      value={formData.student_child}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_child} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_kps"
                    className="col col-form-label"
                  >
                    student_kps
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"student_kps"}
                      name={"student_kps"}
                      value={formData.student_kps}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_kps} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_hobby"
                    className="col col-form-label"
                  >
                    Hobi
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"student_hobby"}
                      name={"student_hobby"}
                      value={formData.student_hobby}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_hobby} />
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

export default StudentData;
