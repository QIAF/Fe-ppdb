import { Input } from "../../components/Ui/Form/Input";
import { useEffect, useState } from "react";
import ImgGoogle from "../../../src/assets/images/img-icon-google.png";
import { ErrMsg } from "../../components/Error/ErrMsg";
import { loginData, validateLogin } from "../../Utils/validation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
import Register from "./Register";

export const Login = ({ title, props }) => {
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
  };
  const handlePostForm = async (data) => {
    const formLogin = loginData(data); // Memproses data login
    console.log("Data login yang dikirim:", formLogin);

    try {
      // Mengirim permintaan POST untuk login
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        formLogin,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        const token = res.data.token; // Mengambil token dari respons

        if (token) {
          localStorage.setItem("token", token); // Menyimpan token ke localStorage
          console.log("Token berhasil disimpan:", token);

          // Memverifikasi token dari localStorage
          console.log(
            "Token dari localStorage setelah login:",
            localStorage.getItem("token")
          );
          toast.success("Berhasil melakukan login", { delay: 800 });

          // Mengarahkan pengguna ke halaman form data
          navigate("/formData");
        } else {
          console.error("Token tidak ditemukan dalam respons.");
          toast.error("Token tidak ditemukan dalam respons.", { delay: 800 });
        }
      } else {
        console.error("Status respons tidak 200:", res.status);
        toast.error("Terjadi kesalahan saat login", { delay: 800 });
      }
    } catch (error) {
      if (error.response) {
        // Server merespons dengan status selain dari rentang 200
        console.error("Error response:", error.response);
        toast.error(
          `Gagal Login: ${
            error.response.data.message || "Email atau password tidak valid"
          }`,
          { delay: 800 }
        );
      } else if (error.request) {
        // Tidak ada respons yang diterima dari server
        console.error("No response received:", error.request);
        toast.error("Tidak ada respons dari server. Silakan coba lagi nanti.", {
          delay: 800,
        });
      } else {
        // Kesalahan lainnya
        console.error("Error occurred:", error.message);
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
          aria-hidden="true"
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
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModalLoginOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <Input
                    type={"email"}
                    className={"form-control"}
                    placeholder={"Masukkan email anda"}
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInput}
                  />
                  <ErrMsg msg={error.email} />
                </div>
                <div className="mb-3">
                  <Input
                    type="password"
                    className={"form-control"}
                    placeholder={"Masukkan password anda"}
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleInput}
                  />
                </div>
                <ErrMsg msg={error.password} />
              </div>
              <div className="modal-footer">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => handlePostForm(form)}
                  >
                    Login
                  </button>
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
                  {""}
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
