
import NavbarMajor from "../Navbar/NavbarMajor";
import './Form.css'
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function FormDetail() {
    // const navigate = useNavigate(); // buat navigasi ke halaman edit ntar
    const location = useLocation(); // ngambil data yg disubmit
    const { data } = location.state;


  return (
    <>
      <NavbarMajor />
      <div className="box-content">
        <div className="box">
          <div className="container">
            <div className="header">
              <strong>Data Siswa</strong>
            </div>
            <br />
            <br />
            <div className="d-flex flex-row flex-wrap gap-3 align-items-start custom-margin-left">
              <div className="body">
              <table className="table">
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
                    <td>{data?.student__hobby}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            <div className="footer d-grid gap-2 d-md-flex justify-content-md-end"></div>
          </div>
        </div>
      </div>
      <div className="box-content">
        <div className="box">
          <div className="container">
            <div className="header">
              <strong>Data Orang Tua Siswa</strong>
            </div>
            <br />
            <br />
            <div className="body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Nama Ayah</td>
                    <td>{data?.father_name}</td>
                  </tr>
                  <tr>
                    <td>Tempat Lahir</td>
                    <td>{data?.place_birth_father}</td>
                  </tr>
                  <tr>
                    <td>Tanggal Lahir</td>
                    <td>{data?.father_birth}</td>
                  </tr>
                  <tr>
                    <td>Nama Ibu</td>
                    <td>{data?.mother_name}</td>
                  </tr>
                  <tr>
                    <td>Tempat Lahir</td>
                    <td>{data?.place_birth_mother}</td>
                  </tr>
                  <tr>
                    <td>Telepon Rumah</td>
                    <td>{data?.phoneNumber_house}</td>
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
            <div className="footer d-grid gap-1 d-md-flex justify-content-md-end"></div>
          </div>
        </div>
      </div>
      <div className="box-content">
        <div className="box">
          <div className="container">
            <div className="header">
              <strong>Data Wali Siswa</strong>
            </div>
            <br />
            <br />
            <div className="body">
              <table className="table ">
                <tbody>
                  <tr>
                    <td>Nama Wali</td>
                    <td>{data?.guardian_name}</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>{data?.guardian_address}</td>
                  </tr>
                  <tr>
                    <td>Nomor Telepon</td>
                    <td>{data?.guardian_phone}</td>
                  </tr>
                  <tr>
                    <td>Pekerjaan</td>
                    <td>{data?.guardian_job}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="footer d-grid gap-1 d-md-flex justify-content-md-end"></div>
          </div>
        </div>
      </div>

      <div className="box-content">
        <div className="box">
          <div className="container">
            <div className="header">
              <strong>Nilai Raport</strong>
            </div>
            <br />
            <br />
            <div className="body">
              <table style={{ width: "100%" }} className="table table-striped">
                <tbody className="m-auto">
                  <tr>
                    <td className="text-center">
                      <b>Matematika</b>
                    </td>
                    <td>{data?.mathematics1}</td>
                    <td>{data?.mathematics2}</td>
                    <td>{data?.mathematics3}</td>
                    <td>{data?.mathematics4}</td>
                    <td>{data?.mathematics5}</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <b>IPA</b>
                    </td>
                    <td>{data?.science1}</td>
                    <td>{data?.science2}</td>
                    <td>{data?.science3}</td>
                    <td>{data?.science4}</td>
                    <td>{data?.science5}</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <b>Bahasa Indonesia</b>
                    </td>
                    <td>{data?.indonesian1}</td>
                    <td>{data?.indonesian2}</td>
                    <td>{data?.indonesian3}</td>
                    <td>{data?.indonesian4}</td>
                    <td>{data?.indonesian5}</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <b>Bahasa Inggris</b>
                    </td>
                    <td>{data?.english1}</td>
                    <td>{data?.english2}</td>
                    <td>{data?.english3}</td>
                    <td>{data?.english4}</td>
                    <td>{data?.english5}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                {/* <Link
                to = {``}
                state={data}
                > */}
                  <Button className="btn-primary border-2 border-primary text-white fw-semibold px-3"></Button>
                {/* </Link> */}
              </div>
            </div>
            <div className="footer d-grid gap-2 d-md-flex justify-content-md-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormDetail;
