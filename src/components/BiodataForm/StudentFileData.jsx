import React, { useState } from "react";
import { Input } from "../Ui/Form/Input";
import { ErrMsg } from "../Error/ErrMsg";

function StudentFileData({ error, setFormData, formData }) {
  // function handleFilePdf(e) {
  // 	// oper data ke form data yang ada pada Form.jsx
  // 	const { name, value, files } = e.target;
  // 	setFormData((prevFormData) => ({
  // 		...prevFormData,
  // 		[name]: value,
  // 		studentDocument: files ? files[0] : prevFormData.studentDocument, // Menambahkan file jika ada
  // 	}));
  // }

  function handleFilePdf(e) {
    const { name, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0], // Memasukkan file yang dipilih ke dalam formData
    }));
  }

  return (
    <div className="flex-column mx-4 justify-content-center">
      <div className="justify-content-center">
        <div className="table-responsive container ">
          <div className="center">
            <div className="header">
              <h5 style={{ color: "#816503" }}>Masukkan Berkas Siswa</h5>
            </div>
            <br />
            <div className="body center ">
              <div className="mb-3">
                <label htmlFor="student_picture" className="form-label">
                  <b>
                    Siswa diwajibkan untuk mengunggah dokumen PDF dengan format
                    nama file menggunakan Nama Lengkap Anda:
                    {!formData.student_picture && (
                      <span className="required">*</span>
                    )}
                  </b>
                  <br />
                </label>
                <Input
                  type={"file"}
                  id="student_picture"
                  name="student_picture"
                  className={"form-control"}
                  onChange={handleFilePdf}
                  multiple={false}
                />
                <ErrMsg msg={error.student_picture} />
              </div>
              <div className="mb-3">
                <label htmlFor="studentDocument" className="form-label">
                  <b>
                    Siswa diwajibkan untuk mengunggah dokumen PDF dengan format
                    nama file menggunakan Nama Lengkap Anda:
                    {!formData.studentDocument && (
                      <span className="required">*</span>
                    )}
                  </b>
                  <br /> <br />
                  1.Scan/foto Kartu Keluarga <br />
                  2. Scan/foto Akta Kelahiran <br />
                  3. Sertifikat Prestasi <br />
                  4. Surat Keterangan Lulus <br />
                  5. Ijazah SMP <br />
                  <br />
                  <small>Contoh format nama file: Nama_Lengkap_Siswa.pdf</small>
                  <br />
                  <small>
                    Pastikan semua dokumen yang diunggah jelas dan terbaca
                    dengan baik.
                  </small>
                  <br />
                  <br />
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
            <div className="footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentFileData;
