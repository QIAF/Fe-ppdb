import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavbarForm from "../Navbar/NavbarForm";
import { Link } from "react-router-dom";
import backIcon from "../../assets/icon/arrow-right.svg";
import noImage from "../../assets/icon/image_not_available.png";
import ImageWithFallback from "../Error/ImageWithFallback";
import { Button } from "../Ui/Button/Button";
import axios from "axios";
import "./Form.css";

export default function DetailData() {
  function handleClick(route) {
    navigate(route);
  }
  const navigate = useNavigate();

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

  return (
    <>
      <NavbarForm />;
      <section className="container-fluid detail-container">
        <div className="d-flex flex-column mt-3 gap-3 ">
          <div className="d-flex flex-row align-items-center gap-3 ">
            <Link className="nav-link active p-0 text-body-secondary" to={"/"}>
              <img
                src={backIcon}
                alt="Bootstrap"
                width={30}
                height={30}
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="d-flex flex-row flex-wrap gap-3 align-items-start custom-margin-left">
            <ImageWithFallback
              src={noImage}
              fallback={noImage}
              alt="photo avatar"
              className="rounded-2 object-fit-cover "
              style={{ maxWidth: "13.75rem", maxHeight: "16.625rem" }}
            />
            <div className=" custom-margin-table">
              <table className="table">
                <table className="table table-hover mw-100">
                  <tbody>
                    <tr>
                      <td>Nama Lengkap</td>
                      <td>:</td>
                      <td>{data?.findData?.student_name}</td>
                    </tr>
                    <tr>
                      <td>NIK</td>
                      <td>:</td>
                      <td>{data?.findData?.family_card_number}</td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin</td>
                      <td>:</td>
                      <td>{data?.findData?.student_gender}</td>
                    </tr>
                    <tr>
                      <td>Tempat Lahir</td>
                      <td>:</td>
                      <td>{data?.findData?.place_birth}</td>
                    </tr>
                    <tr>
                      <td>Tanggal Lahir</td>
                      <td>:</td>
                      <td>{data?.findData?.date_birth}</td>
                    </tr>
                    <tr>
                      <td>Alamat Asal</td>
                      <td>:</td>
                      <td>{data?.findData?.student_address}</td>
                    </tr>
                    <tr>
                      <td>Alamat Di Yogyakarta</td>
                      <td>:</td>
                      <td>{data?.findData?.student_address_now}</td>
                    </tr>
                    <tr>
                      <td>Jarak Rumah ke Sekolah</td>
                      <td>:</td>
                      <td>{data?.findData?.student_distance}</td>
                    </tr>
                    <tr>
                      <td>Agama</td>
                      <td>:</td>
                      <td>{data?.findData?.student_religion}</td>
                    </tr>
                    <tr>
                      <td>Golongan Darah</td>
                      <td>:</td>
                      <td>{data?.findData?.student_blood_type}</td>
                    </tr>
                    <tr>
                      <td>Tinggi / Berat Badan</td>
                      <td>:</td>
                      <td>
                        {data?.findData?.student_height} /
                        {data?.findData?.student_weight}
                      </td>
                    </tr>
                    <tr>
                      <td>Anak Ke -</td>
                      <td>:</td>
                      <td>{data?.findData?.student_child}</td>
                    </tr>
                    <tr>
                      <td>KPS PKH/PIP/KMS Kota Yogyakarta</td>
                      <td>:</td>
                      <td>{data?.findData?.student_kps}</td>
                    </tr>
                    <tr>
                      <td>Hobi</td>
                      <td>:</td>
                      <td>{data?.findData?.student_hobby}</td>
                    </tr>
                    <tr>
                      <td>Nama Ayah</td>
                      <td>:</td>
                      <td>Ayah</td>
                    </tr>
                    <tr>
                      <td>Tempat Tanggal Lahir</td>
                      <td>:</td>
                      <td>
                        {data?.findData?.place_birth_father}/
                        {data?.findData?.father_birth}
                      </td>
                    </tr>
                    <tr>
                      <td>Nama Ibu</td>
                      <td>:</td>
                      <td>{data?.findData?.mother_name}</td>
                    </tr>
                    <tr>
                      <td>Tempat Tanggal Lahir Ibu</td>
                      <td>:</td>
                      <td>
                        {data?.findData?.place_birth_mother} /
                        {data?.findData?.mother_birth}
                      </td>
                    </tr>
                    <tr>
                      <td>Nomor Telepon Rumah</td>
                      <td>:</td>
                      <td>{data?.findData?.home_phone}</td>
                    </tr>
                    <tr>
                      <td>Pekerjaan / Penghasilan Ayah</td>
                      <td>:</td>
                      <td>
                        {data?.findData?.father_job} /{" "}
                        {data?.findData?.father_income} {"Perbulan"}
                      </td>
                    </tr>
                    <tr>
                      <td>Pekerjaan Ibu / Penghasilan</td>
                      <td>:</td>
                      <td>
                        {data?.findData?.mother_job} /{" "}
                        {data?.findData?.mother_income} {"Perbulan"}
                      </td>
                    </tr>
                    <tr>
                      <td>Nama Wali</td>
                      <td>:</td>
                      <td>{data?.findData?.guardian_name}</td>
                    </tr>
                    <tr>
                      <td>Alamat Wali</td>
                      <td>:</td>
                      <td>{data?.findData?.guardian_address}</td>
                    </tr>
                    <tr>
                      <td>Nomor Telepon Wali</td>
                      <td>:</td>
                      <td>{data?.findData?.guardian_phone}</td>
                    </tr>
                    <tr>
                      <td>Pekerjaan</td>
                      <td>:</td>
                      <td>{data?.findData?.guardian_job}</td>
                    </tr>
                    <tr>
                      <td>Nama Sekolah Asal</td>
                      <td>:</td>
                      <td>{data?.findData?.school_name}</td>
                    </tr>
                    <tr>
                      <td>Status Sekolah</td>
                      <td>:</td>
                      <td>{data?.findData?.school_status}</td>
                    </tr>
                    <tr>
                      <td>Alamat Sekolah Asal</td>
                      <td>:</td>
                      <td>{data?.findData?.school_address}</td>
                    </tr>
                    <tr>
                      <td>Nomor Ijazah</td>
                      <td>:</td>
                      <td>{data?.findData?.ijazah_number}</td>
                    </tr>
                    <tr>
                      <td>Pilihan Bidang Keahlian</td>
                      <td>:</td>
                      <td>{data?.findData?.major_choice}</td>
                    </tr>
                    <tr>
                      <td>NISN</td>
                      <td>:</td>
                      <td>{data?.findData?.major_nisn}</td>
                    </tr>
                  </tbody>
                </table>
              </table>
              <div style={{ marginTop: "2rem" }}></div>
              <table
                style={{ width: "100%" }}
                className="table table-borderless table-striped mt-3"
              >
                <thead className="m-auto text-center">
                  <th rowSpan={2}>Mata Pelajaran</th>
                  <th colSpan={2}>Kelas 7</th>
                  <th colSpan={2}>Kelas 8</th>
                  <th>Kelas 9</th>
                </thead>
                <tbody className="m-auto text-center">
                  <tr className="">
                    <td>Mata Pelajaran</td>
                    <td>Semester 1</td>
                    <td>Semester 2</td>
                    <td>Semester 3</td>
                    <td>Semester 4</td>
                    <td>Semester 5</td>
                  </tr>
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
                  <tr>
                    <td>
                      <b>Total Rata-Rata</b>
                    </td>
                    <td colSpan={5}>
                      <b>{data?.findReportScore?.total_report_score}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
            {/* <Link to={`/doctors/edit-doctor/${data?.id}`} state={data}> */}
            <Button className="btn-primary border-2 border-primary text-white fw-semibold px-4 ">
              Edit
            </Button>
            {/* </Link> */}
            <Button
              className="btn-trasparent border-2 border-primary text-primary fw-semibold px-3 "
              onClick={() => setModalDelete(true)}
            >
              Hapus
            </Button>
          </div>
        </div>

        {/* {modalDelete && (
        <Tranparent
          disabled={true}
          className="min-vw-100 start-0 position-fixed end-0"
        >
          <CustomModal
            disabled={loading}
            title={"Hapus Dokter?"}
            content={
              "Apabila anda menghapus Dokter, maka data Dokter akan hilang"
            }
            confirmAction={handleDelete}
            cancelAction={() => setModalDelete(false)}
          />
        </Tranparent>
      )} */}
      </section>
    </>
  );
}
