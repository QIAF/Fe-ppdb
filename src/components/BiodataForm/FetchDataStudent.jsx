import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavbarMajor from "../Navbar/NavbarMajor";
import Box from "../Ui/Box/Box";

function FetchDataStudent() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    console.log("Token for request:", token); // Ambil token dari localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Sertakan token dalam header Authorization
      },
    };

    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/studentData/${id}`,
        config
      );

      console.log("API response:", res.data);
      setData(res.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  console.log("Fetched data:", data);

  return (
    <div>
      <button onClick={fetchData}>Get Data</button>

      <NavbarMajor />
      <Box title={"Data Siswa"}>
        <hr />
        <div className="table-wrapper">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td>Nama Lengkap</td>
                <td>{data?.findData?.student_name}</td>
              </tr>
              <tr>
                <td>Jenis Kelamin</td>
                <td>{data?.findData?.student_gender}</td>
              </tr>
              <tr>
                <td>Tempat Lahir</td>
                <td>{data?.findData?.place_birth}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir</td>
                <td>{data?.findData?.date_birth}</td>
              </tr>
              <tr>
                <td>Alamat Asal</td>
                <td>{data?.findData?.student_address}</td>
              </tr>
              <tr>
                <td>Jarak Rumah ke Sekolah</td>
                <td>{data?.findData?.student_distance}</td>
              </tr>
              <tr>
                <td>Agama</td>
                <td>{data?.findData?.student_religion}</td>
              </tr>
              <tr>
                <td>Golongan Darah</td>
                <td>{data?.findData?.student_blood_type}</td>
              </tr>
              <tr>
                <td>Tinggi Badan</td>
                <td>{data?.findData?.student_weight}</td>
              </tr>
              <tr>
                <td>Berat Badan</td>
                <td>{data?.findData?.student_height}</td>
              </tr>
              <tr>
                <td>Anak Ke -</td>
                <td>{data?.findData?.student_child}</td>
              </tr>
              <tr>
                <td>KPS</td>
                <td>{data?.findData?.student_kps}</td>
              </tr>
              <tr>
                <td>Hobi</td>
                <td>{data?.findData?.student_hobby}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
      <Box title={"Data Orangtua Siswa"}>
        <div className="table-wrapper">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td>Nama Ayah</td>
                <td>{data?.findData?.father_name}</td>
              </tr>
              <tr>
                <td>Tempat Lahir</td>
                <td>{data?.findData?.place_birth_father}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir Ayah</td>
                <td>{data?.findData?.father_birth}</td>
              </tr>
              <tr>
                <td>Nama Ibu</td>
                <td>{data?.findData?.mother_name}</td>
              </tr>
              <tr>
                <td>Tempat Lahir Ibu</td>
                <td>{data?.findData?.place_birth_mother}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir Ibu</td>
                <td>{data?.findData?.mother_birth}</td>
              </tr>
              <tr>
                <td>Nomor Telepon Rumah</td>
                <td>{data?.findData?.home_phone}</td>
              </tr>
              <tr>
                <td>Pekerjaan Ayah</td>
                <td>{data?.findData?.father_job}</td>
              </tr>
              <tr>
                <td>Pekerjaan Ibu</td>
                <td>{data?.findData?.mother_job}</td>
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
                <td>{data?.findData?.guardian_name}</td>
              </tr>
              <tr>
                <td>Alamat Wali</td>
                <td>{data?.findData?.guardian_address}</td>
              </tr>
              <tr>
                <td>Nomor Telepon Wali</td>
                <td>{data?.findData?.guardian_phone}</td>
              </tr>
              <tr>
                <td>Pekerjaan Wali</td>
                <td>{data?.findData?.guardian_job}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
      <Box title={"Data Nilai Siswa"}>
        <div className="table-wrapper ">
          <table
            style={{ width: "100%" }}
            className="table table-borderless table-striped"
          >
            <tbody className="m-auto">
              <tr>
                <td>Matematika</td>
                <td>{data?.findReportScore?.mathematics1}</td>
                <td>{data?.findReportScore?.mathematics2}</td>
                <td>{data?.findReportScore?.mathematics3}</td>
                <td>{data?.findReportScore?.mathematics4}</td>
                <td>{data?.findReportScore?.mathematics5}</td>
              </tr>
              <tr>
                <td>IPA</td>
                <td>{data?.findReportScore?.science1}</td>
                <td>{data?.findReportScore?.science2}</td>
                <td>{data?.findReportScore?.science3}</td>
                <td>{data?.findReportScore?.science4}</td>
                <td>{data?.findReportScore?.science5}</td>
              </tr>
              <tr>
                <td>Bahasa Indonesia</td>
                <td>{data?.findReportScore?.indonesian1}</td>
                <td>{data?.findReportScore?.indonesian2}</td>
                <td>{data?.findReportScore?.indonesian3}</td>
                <td>{data?.findReportScore?.indonesian4}</td>
                <td>{data?.findReportScore?.indonesian5}</td>
              </tr>
              <tr>
                <td>Bahasa Inggris</td>
                <td>{data?.findReportScore?.english1}</td>
                <td>{data?.findReportScore?.english2}</td>
                <td>{data?.findReportScore?.english3}</td>
                <td>{data?.findReportScore?.english4}</td>
                <td>{data?.findReportScore?.english5}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </div>
  );
}

export default FetchDataStudent;
