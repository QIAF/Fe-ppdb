import React from "react";
import NavbarMajor from "../Navbar/NavbarMajor";
import { useLocation, useNavigate } from "react-router";
import Box from "../Ui/Box/Box";

function StudentDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location state:", location.state);
  const data = location.state?.data;
  // data akan di set ke "data?" di table
  //  tanda "?" buat ngakses data dan ngecek  apakah data undefined atau null

  return (
    <>
      <NavbarMajor />
      <Box title={"Data Siswa"}>
        <hr />
        <div className="table-wrapper">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td>Nama Lengkap</td>
                <td>{data?.student_name}</td>
              </tr>
              <tr>
                <td>Jenis Kelamin</td>
                <td>{data?.student_gender}</td>
              </tr>
              <tr>
                <td>Tempat Lahir</td>
                <td>{data?.place_birth}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir</td>
                <td>{data?.date_birth}</td>
              </tr>
              <tr>
                <td>Alamat Asal</td>
                <td>{data?.student_address}</td>
              </tr>
              <tr>
                <td>Jarak Rumah ke Sekolah</td>
                <td>{data?.student_distance}</td>
              </tr>
              <tr>
                <td>Agama</td>
                <td>{data?.student_religion}</td>
              </tr>
              <tr>
                <td>Golongan Darah</td>
                <td>{data?.student_blood_type}</td>
              </tr>
              <tr>
                <td>Tinggi Badan</td>
                <td>{data?.student_weight}</td>
              </tr>
              <tr>
                <td>Berat Badan</td>
                <td>{data?.student_height}</td>
              </tr>
              <tr>
                <td>Anak Ke -</td>
                <td>{data?.student_child}</td>
              </tr>
              <tr>
                <td>KPS</td>
                <td>{data?.student_kps}</td>
              </tr>
              <tr>
                <td>Hobi</td>
                <td>{data?.student_hobby}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
      <Box
      title={"Data Orangtua Siswa"}>
        <div className="table-wrapper">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td>Nama ayah</td>
                <td>{data?.father_name}</td>
              </tr>
              <tr>
                <td>Tempat Lahir</td>
                <td>{data?.place_birth_father}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir Ayah</td>
                <td>{data?.father_birth}</td>
              </tr>
              <tr>
                <td>Nama Ibu</td>
                <td>{data?.mother_name}</td>
              </tr>
              <tr>
                <td>Tempat Lahir Ibu</td>
                <td>{data?.place_birth_mother}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir Ibu</td>
                <td>{data?.mother_birth}</td>
              </tr>
              <tr>
                <td>Nomor Telepon Rumah</td>
                <td>{data?.student_blood_type}</td>
              </tr>
              <tr>
                <td>Pekerjaan Ayah</td>
                <td>{data?.father_job}</td>
              </tr>
              <tr>
                <td>Pekerjaan Ibu</td>
                <td>{data?.mother_job}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
      <Box title={"Data Wali Siswa"}>
        <div className="table-wrapper">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td>Nama Wali</td>
                <td>{data?.guardian_name}</td>
              </tr>
              <tr>
                <td>Alamat Wali</td>
                <td>{data?.guardian_address}</td>
              </tr>
              <tr>
                <td>Nomor Telepon Wali</td>
                <td>{data?.guardian_phone}</td>
              </tr>
              <tr>
                <td>Pekerjaan Wali</td>
                <td>{data?.guardian_Job}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
      <Box title={"Data Nilai Siswa"}>
        <div className="table-wrapper ">
          <table style={{ width: "100%" }} className="table table-borderless table-striped">
            <tbody className="m-auto">
              <tr>
                <td>Matematika</td>
                <td>{data?.mathematics1}</td>
                <td>{data?.mathematics2}</td>
                <td>{data?.mathematics3}</td>
                <td>{data?.mathematics4}</td>
                <td>{data?.mathematics5}</td>
              </tr>
              <tr>
                <td>IPA</td>
                <td>{data?.science1}</td>
                <td>{data?.science2}</td>
                <td>{data?.science3}</td>
                <td>{data?.science4}</td>
                <td>{data?.science5}</td>
              </tr>
              <tr>
                <td>Bahasa Indonesia</td>
                <td>{data?.indonesian1}</td>
                <td>{data?.indonesian2}</td>
                <td>{data?.indonesian3}</td>
                <td>{data?.indonesian4}</td>
                <td>{data?.indonesian5}</td>
              </tr>
              <tr>
                <td>Bahasa Inggris</td>
                <td>{data?.english1}</td>
                <td>{data?.english2}</td>
                <td>{data?.english3}</td>
                <td>{data?.english4}</td>
                <td>{data?.english5}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </>
  );
}

export default StudentDetail;
