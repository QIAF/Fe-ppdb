import { Input } from "../../components/Ui/Form/Input";
import { useEffect, useState } from "react";
import ImgGoogle from "../../../src/assets/images/img-icon-google.png";
import { ErrMsg } from "../../components/Error/ErrMsg";
import { loginData, validateLogin } from "../../Utils/validation";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Register from "./Register";
import Cookies from "js-cookie";
import { Button } from "../../components/Ui/Button/Button";

export const Login = ({ title, props }) => {
  const { id } = useParams();

  const [modalRegister, setModalRegister] = useState(false);
  const [error, setError] = useState({});
  const [modalLoginOpen, setModalLoginOpen] = useState(true);
  const navigate = useNavigate();

  const handleRegisterModal = () => {
    setModalLoginOpen(false);
    setModalRegister(true);
  };

  const handleLoginModal = () => {
    setModalRegister(false);
    setModalLoginOpen(true);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    validateLogin(form, setError);
  };

  const handlePostForm = async (data) => {
    const formLogin = loginData(data);
    console.log(formLogin);

    try {
      const res = await axios.post(
        "https://be-ppdb-online-update.vercel.app/api/v1/auth/login",
        formLogin,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        const { token } = res.data;

        if (token) {
          // Simpan token ke dalam cookie
          Cookies.set("token", token, { expires: 7, path: "/" });
          console.log("Token berhasil disimpan di cookie:", token);

          const config = {
            headers: {
              Authorization: `Bearer ${token}`, // Sertakan token dalam header Authorization
            },
          };

          try {
            const resStudent = await axios.get(
              `https://be-ppdb-online-update.vercel.app/api/v1/studentData/${id}`,
              config
            );
            console.log("Data Siswa:", resStudent.data);

            const studentData = resStudent.data;
            if (studentData && studentData.data) {
              navigate("/article");
              toast.success("Berhasil login, Anda telah mendaftar", {
                delay: 800,
              });
            }
          } catch (error) {
            console.error("Error saat mengambil data siswa:", error);
            navigate("/formData");
            toast.success("Berhasil login", {
              delay: 800,
            });
          }
        } else {
          console.error("Token tidak ditemukan dalam respons");
          toast.error("Token tidak ditemukan dalam respons.", { delay: 800 });
        }
      } else {
        console.error("Status respons bukan 200:", res.status);
        toast.error("Terjadi kesalahan saat login", { delay: 800 });
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response);
        toast.error("Email atau password tidak valid", { delay: 800 });
      } else if (error.request) {
        console.error("Tidak ada respons dari server:", error.request);
        toast.error("Tidak ada respons dari server. Silakan coba lagi nanti.", {
          delay: 800,
        });
      } else {
        console.error("Terjadi kesalahan:", error.message);
        toast.error("Terjadi kesalahan. Silakan coba lagi.", { delay: 800 });
      }
    }
  };

  useEffect(() => {
    if (props && props.nextPage) {
      const timerId = setTimeout(() => navigate(props.nextPage), 300);
      return () => clearTimeout(timerId);
    }
  }, [navigate, props]);

  return (
    <>
      {modalLoginOpen && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          // aria-hidden="true"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5"
                  id="exampleModalLabel"
                  style={{ color: "#816503" }}
                >
                  {title}
                </h1>
                <Button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModalLoginOpen(false)}
                ></Button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nisn anda"
                    id="user_number"
                    name="user_number"
                    value={form.user_number || ""}
                    onChange={handleInput}
                  />
                  <ErrMsg msg={error.user_number} />
                </div>
                <div className="mb-3">
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Masukkan password anda"
                    value={form.password || ""}
                    onChange={handleInput}
                  />
                </div>
                <ErrMsg msg={error.password} />
              </div>
              <div className="modal-footer">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <Button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => handlePostForm(form)}
                  >
                    Login
                  </Button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleRegisterModal}
                  >
                    Register
                  </button>
                </div>
              </div>
              <p className="title-or text-center" style={{ color: "#000000" }}>
                atau
              </p>
              <div className="d-flex justify-content-center mx-auto mb-3">
                <button type="button" className="btn btn-outline-dark btn-sm">
                  <img
                    className="img-google"
                    src={ImgGoogle}
                    alt="Google Icon"
                  />
                  &nbsp; Masuk dengan google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalRegister && (
        <Register title={"Silahkan Mendaftar !"} onClose={handleLoginModal} />
      )}
    </>
  );
};
