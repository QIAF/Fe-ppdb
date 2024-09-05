import React from "react";
import { Input } from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";

function StudentData({ formData, handleInput, error, handleChange }) {
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
                    Nama Lengkap{" "}
                    {!formData.student_name && (
                      <span className="required">*</span>
                    )}
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
                    htmlFor="student_card_number"
                    className="col col-form-label"
                  >
                    Nomor KK Siswa{" "}
                    {!formData.student_card_number && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8 ">
                    <Input
                      type={"number"}
                      className={"form-control"}
                      id={"student_card_number"}
                      name="student_card_number"
                      value={formData.student_card_number}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_card_number} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="family_card_number"
                    className="col col-form-label"
                  >
                    NIK
                    {!formData.family_card_number && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8 ">
                    <Input
                      type={"number"}
                      className={"form-control"}
                      id={"family_card_number"}
                      name="family_card_number"
                      value={formData.family_card_number}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.family_card_number} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_gender"
                    className="col col-form-label"
                  >
                    Jenis kelamin{" "}
                    {!formData.student_gender && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="student_gender"
                      name="student_gender"
                      value={formData.student_gender}
                      onChange={handleInput}
                    >
                      <option value="">Pilih salah satu</option>{" "}
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>

                    <ErrMsg msg={error.student_gender} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="place_birth" className="col col-form-label">
                    Tempat lahir{" "}
                    {!formData.place_birth && (
                      <span className="required">*</span>
                    )}
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
                  <label htmlFor="date_birth" className="col col-form-label">
                    Tanggal lahir
                    {!formData.date_birth && (
                      <span className="required">*</span>
                    )}
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
                    {!formData.student_address && (
                      <span className="required">*</span>
                    )}
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
                    Alamat di Yogyakarta
                    {!formData.student_address_now && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"student_address_now"}
                      name="student_address_now"
                      value={formData.student_address_now}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.student_address_now} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_distance"
                    className="col col-form-label"
                  >
                    Jarak dari rumah ke SMK 3 Muhammadiyah Yogyakarta
                    {!formData.student_distance && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="student_distance"
                      name="student_distance"
                      value={!formData.student_distance}
                      onChange={handleInput}
                    >
                      <option value="">Pilih salah satu</option>{" "}
                      <option value="≤ 1 KM">≤ 1 KM</option>
                      <option value="≤ 2 KM">≤ 2 KM</option>
                      <option value="≤ 3 KM">≤ 3 KM</option>
                      <option value="≤ 4 KM">≤ 4 KM</option>
                      <option value="≥ 4 KM">≥ 4 KM</option>
                    </select>
                    <ErrMsg msg={error.student_distance} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_religion"
                    className="col col-form-label"
                  >
                    Agama
                    {!formData.student_religion && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="student_religion"
                      name="student_religion"
                      value={formData.student_religion}
                      onChange={handleInput}
                    >
                      <option value="">Pilih salah satu</option>{" "}
                      <option value="Islam">Islam</option>
                      <option value="Perempuan">Kristen</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Budha">Budha</option>
                      <option value="Khonghucu">Khonghucu</option>
                    </select>

                    <ErrMsg msg={error.student_religion} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_blood_type"
                    className="col col-form-label"
                  >
                    Golongan Darah{" "}
                    {!formData.student_blood_type && (
                      <span className="required">*</span>
                    )}
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
                  <label
                    htmlFor="student_height"
                    className="col col-form-label"
                  >
                    Tinggi Badan
                    {!formData.student_weight && (
                      <span className="required">*</span>
                    )}
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
                  <label
                    htmlFor="student_weight"
                    className="col col-form-label"
                  >
                    Berat Badan{" "}
                    {!formData.student_height && (
                      <span className="required">*</span>
                    )}
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
                    {!formData.student_child && (
                      <span className="required">*</span>
                    )}
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
                    htmlFor="student_gender"
                    className="col col-form-label"
                  >
                    KPS,PKH/PIP/KMS Kota{" "}
                    {!formData.student_kps && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="student_kps"
                      name="student_kps"
                      value={formData.student_kps} // Menyinkronkan nilai select dengan formData
                      onChange={handleInput} // Memperbarui formData saat pilihan berubah
                    >
                      <option value="">Pilih salah satu</option>{" "}
                      <option value="Ya">Tidak</option>
                      <option value="Tidak">Ya</option>
                    </select>

                    <ErrMsg msg={error.student_kps} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="student_hobby" className="col col-form-label">
                    Hobi
                    {!formData.student_hobby && (
                      <span className="required">*</span>
                    )}
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
