import React from "react";
// import { Input } from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";
import "./Form.css";
import { Input } from "../Ui/Form/Input";

function StudentSchool({ handleInput, formData, error, handleCheckboxChange }) {
  const majorChoices = [
    {
      id: "light_vehicle_engineer",
      value: "light_vehicle_engineer",
      label: "Teknik Kendaraan Ringan",
    },
    { id: "mechanical_engineer", label: "Teknik Mesin" },
    {
      id: "electronics_engineer",
      value: "electronics_engineer",
      label: "Teknik Elektronika",
    },
    {
      id: "electrical_engineer",
      value: "electrical_engineer",
      label: "Teknik Ketenagalistrikan",
    },
    {
      id: "computer_network_engineer",
      value: "computer_network_engineer",
      label: "Teknik Komputer Dan Jaringan",
    },
    {
      id: "motorcycle_engineer",
      value: "motorcycle_engineer",
      label: "Teknik Sepeda Motor",
    },
    {
      id: "modeling_design",
      value: "modeling_design",
      label: "Desain Permodelan Dan Informasi Bangunan",
    },
    {
      id: "pharmaceutical_engineering",
      value: "pharmaceutical_engineering",
      label: "Teknologi Farmasi",
    },
  ];

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
                    htmlFor="inputschool_status"
                    className="col col-form-label"
                  >
                    Status Sekolah
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"text"}
                      className={"form-control"}
                      id={"school_status"}
                      name="school_status"
                      value={formData.school_status}
                      onChange={handleInput}
                    />
                    <ErrMsg msg={error.school_status} />
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
                  <label
                    htmlFor="inputijazah_number"
                    className="col col-form-label"
                  >
                    Nomor Ijazah
                  </label>
                  <div className="col-sm-8">
                    <Input
                      type={"number"}
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
                    htmlFor="inputmajor_choice"
                    className="col-form-label col-sm-4"
                  >
                    Pilihan Bidang Keahlian
                  </label>
                  <div className="col-sm-8">
                    <div className="row">
                      {majorChoices.map(({ id, label }) => (
                        <div key={id} className="col-md-4">
                          <div className="form-check">
                            <Input
                              className="form-check-input"
                              type="checkbox"
                              id={id}
                              name="major_choice"
                              value={id}
                              checked={formData.major_choice
                                .split(",")
                                .includes(id)}
                              onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor={id}>
                              {label}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                    <ErrMsg msg={error.major_choice} />
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
