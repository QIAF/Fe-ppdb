import React from "react";
// import { Input } from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";
import "./Form.css";
import { Input } from "../Ui/Form/Input";

function StudentSchool({ handleInput, formData, error, handleCheckboxChange }) {
  return (
    <div className="flex-column mx-4 justify-content-center">
      <div className="justify-content-center">
        <div className="table-responsive container ">
          <div className="center">
            <div className="header">
              <h5 style={{ color: "#816503" }}>Data Asal Sekolah</h5>
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
                    {!formData.school_name && (
                      <span className="required">*</span>
                    )}
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
                  <label htmlFor="school_status" className="col col-form-label">
                    Status Sekolah asal
                    {!formData.school_status && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="school_status"
                      name="school_status"
                      value={formData.school_status} // Menyinkronkan nilai select dengan formData
                      onChange={handleInput} // Memperbarui formData saat pilihan berubah
                    >
                      <option value="">Pilih salah satu</option>{" "}
                      {/* Opsi default untuk mendorong pilihan */}
                      <option value="Negeri">Negeri</option>
                      <option value="Swasta">Swasta</option>
                    </select>

                    <ErrMsg msg={error.school_status} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputschool_address"
                    className="col col-form-label"
                  >
                    Alamat Sekolah
                    {!formData.school_address && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"school_address"}
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
                    {!formData.ijazah_number && (
                      <span className="required">*</span>
                    )}
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
                  <label
                    htmlFor="student_gender"
                    className="col col-form-label"
                  >
                    Pilihan Bidang Keahlian 1
                    {!formData.major_choice1 && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="major_choice1"
                      name="major_choice1"
                      value={formData.major_choice1} // Menyinkronkan nilai select dengan formData
                      onChange={handleInput} // Memperbarui formData saat pilihan berubah
                    >
                      <option value="">Pilihan pertama</option>{" "}
                      {/* Opsi default untuk mendorong pilihan */}
                      <option value="Teknik Kendaraan">Teknik Kendaraan</option>
                      <option value="Teknik Elektronika">
                        Teknik Elektronika
                      </option>
                      <option value="Teknik Ketenagalistrikan">
                        Teknik Ketenagalistrikan
                      </option>
                      <option value="Teknik Komputer Dan Jaringan">
                        Teknik Komputer Dan Jaringan
                      </option>
                      <option value="Teknik Sepeda Motor">
                        Teknik Sepeda Motor
                      </option>
                      <option value="Desain Permodelan Dan Informasi Bangunan">
                        Desain Permodelan Dan Informasi Bangunan
                      </option>
                      <option value="Teknologi Farmasi">
                        Teknologi Farmasi
                      </option>
                    </select>

                    <ErrMsg msg={error.major_choice1} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="student_gender"
                    className="col col-form-label"
                  >
                    Pilihan Bidang Keahlian 2
                    {!formData.major_choice2 && (
                      <span className="required">*</span>
                    )}
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="major_choice2"
                      name="major_choice2"
                      value={formData.major_choice2} // Menyinkronkan nilai select dengan formData
                      onChange={handleInput} // Memperbarui formData saat pilihan berubah
                    >
                      <option value="">Pilihan Kedua</option>{" "}
                      {/* Opsi default untuk mendorong pilihan */}
                      <option value="Teknik Kendaraan">Teknik Kendaraan</option>
                      <option value="Teknik Elektronika">
                        Teknik Elektronika
                      </option>
                      <option value="Teknik Ketenagalistrikan">
                        Teknik Ketenagalistrikan
                      </option>
                      <option value="Teknik Komputer Dan Jaringan">
                        Teknik Komputer Dan Jaringan
                      </option>
                      <option value="Teknik Sepeda Motor">
                        Teknik Sepeda Motor
                      </option>
                      <option value="Desain Permodelan Dan Informasi Bangunan">
                        Desain Permodelan Dan Informasi Bangunan
                      </option>
                      <option value="Teknologi Farmasi">
                        Teknologi Farmasi
                      </option>
                    </select>

                    <ErrMsg msg={error.major_choice2} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="nisn" className="col col-form-label">
                    NISN
                    {!formData.nisn && <span className="required">*</span>}
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
