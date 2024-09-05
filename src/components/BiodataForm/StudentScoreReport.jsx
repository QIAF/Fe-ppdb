import React from "react";
import "./Form.css";
import { Input } from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";

function StudentScoreReport({ handleInput, formData, error }) {
  return (
    <div className="flex-column mx-4 justify-content-center">
      <div className="justify-content-center">
        <div className="table table-striped align-middle container">
          <div className="center">
            <div className="header">
              <h5 style={{ color: "#816503" }}>
                Masukkan nilai raport Sster 1-5
              </h5>
            </div>
            <br />
            <div className="body center table-responsive">
              <table style={{ width: "100%" }}>
                <tbody className="m-auto">
                  <tr className="text-center">
                    <td>
                      <b>Pelajaran</b>
                    </td>
                    <td colSpan={2}>
                      <b>Kelas 7 </b>
                    </td>
                    <td colSpan={2}>
                      <b>Kelas 8</b>
                    </td>
                    <td>
                      <b>Kelas 9</b>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <b>
                        Matematika
                        {!formData.mathematics5 && (
                          <span className="required">*</span>
                        )}
                      </b>
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name={"mathematics1"}
                        className={"form-control"}
                        placeholder={"S1"}
                        value={formData.mathematics1}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.mathematics1} />
                    </td>

                    <td>
                      <Input
                        type={"number"}
                        name={"mathematics2"}
                        className={"form-control"}
                        placeholder={"S2"}
                        value={formData.mathematics2}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.mathematics2} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name={"mathematics3"}
                        className={"form-control"}
                        placeholder={"S3"}
                        value={formData.mathematics3}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.mathematics3} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name={"mathematics4"}
                        className={"form-control"}
                        placeholder={"S4"}
                        value={formData.mathematics4}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.mathematics4} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name={"mathematics5"}
                        className={"form-control"}
                        placeholder={"S5"}
                        value={formData.mathematics5}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.mathematics5} />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <b>
                        IPA
                        {!formData.science5 && (
                          <span className="required">*</span>
                        )}
                      </b>
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name={"science1"}
                        className={"form-control"}
                        value={formData.science1}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.science1} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name={"science2"}
                        className={"form-control"}
                        value={formData.science2}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.science2} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name={"science3"}
                        className={"form-control"}
                        value={formData.science3}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.science3} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="science4"
                        className={"form-control"}
                        value={formData.science4}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.science4} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="science5"
                        className={"form-control"}
                        value={formData.science5}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.science5} />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <b>
                        Bahasa Indonesia
                        {!formData.indonesian5 && (
                          <span className="required">*</span>
                        )}
                      </b>
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="indonesian1"
                        className={"form-control"}
                        value={formData.indonesian1}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.indonesian1} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="indonesian2"
                        className={"form-control"}
                        value={formData.indonesian2}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.indonesian2} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="indonesian3"
                        className={"form-control"}
                        value={formData.indonesian3}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.indonesian3} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="indonesian4"
                        className={"form-control"}
                        value={formData.indonesian4}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.indonesian4} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="indonesian5"
                        className={"form-control"}
                        value={formData.indonesian5}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.indonesian5} />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <b>
                        Bahasa Inggris
                        {!formData.english5 && (
                          <span className="required">*</span>
                        )}
                      </b>
                    </td>

                    <td>
                      <Input
                        type={"number"}
                        name="english1"
                        className={"form-control"}
                        value={formData.english1}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.english1} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="english2"
                        className={"form-control"}
                        value={formData.english2}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.english2} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="english3"
                        className={"form-control"}
                        value={formData.english3}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.english3} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="english4"
                        className={"form-control"}
                        value={formData.english4}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.english4} />
                    </td>
                    <td>
                      <Input
                        type={"number"}
                        name="english5"
                        className={"form-control"}
                        value={formData.english5}
                        onChange={handleInput}
                      />
                      <ErrMsg msg={error.english5} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentScoreReport;
