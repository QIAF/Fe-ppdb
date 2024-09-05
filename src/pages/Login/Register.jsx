import { dataRegister, validateRegister } from "../../Utils/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "./Login";
import "./Login.css";
import { Input } from "../../components/Ui/Form/Input";
import { useNavigate } from "react-router";
import { useState } from "react";
import { ErrMsg } from "../../components/Error/ErrMsg";
import axios from "axios";

function Register() {
  const [error, setError] = useState({});
  const [modalRegisterOpen, setModalRegister] = useState(true);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegisterModal = () => {
    setModalRegister(true);
    setModalLoginOpen(false);
  };

  const [form, setForm] = useState({
    full_name: "",
    user_number: "",
    password: "",
    confirm_password: "",
  });

  console.log("data", form);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    validateRegister(form, setError);
  };

  const handlePostForm = async () => {
    const isValid = validateRegister(form, setError);
    if (!isValid) {
      // Jika tidak valid, tampilkan pesan kesalahan dan berhenti
      toast.error("Harap perbaiki kesalahan di data sebelum melanjutkan.", {
        delay: 800,
      });
      return;
    }
    const formRegister = dataRegister(form);
    try {
      const res = await axios.post(
        "https://be-ppdb-online-update.vercel.app/api/v1/auth/register",
        formRegister
      );

      if (res.status === 201) {
        toast.success("Berhasil Register", { delay: 800 });
        setModalLoginOpen(true);
        setModalRegister(false);
      } else {
        toast.error("Terjadi kesalahan saat login", { delay: 800 });
      }
    } catch (error) {
      toast.error(
        "Harap masukkan data dengan benar, kemudian coba registrasi ulang.",
        {
          delay: 800,
        }
      );
    }
  };

  return (
    <>
      {modalRegisterOpen && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
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
                  Silahkan register terlebih dahulu
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModalRegister(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <Input
                    id="full_name"
                    name="full_name"
                    type="text" // Gunakan tipe HTML yang valid
                    className="form-control"
                    placeholder="Masukkan nama lengkap"
                    value={form.full_name}
                    onChange={handleInput}
                  />
                  <ErrMsg msg={error.full_name} />
                </div>
                <div className="mb-3">
                  <Input
                    id="user_number"
                    name="user_number"
                    type="text" // Gunakan tipe HTML yang valid
                    className="form-control"
                    placeholder="Masukkan NISN anda"
                    value={form.user_number}
                    onChange={handleInput}
                  />
                  <ErrMsg msg={error.user_number} />
                </div>
                <div className="mb-3">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Masukkan password anda"
                    value={form.password}
                    onChange={handleInput}
                  />
                  <ErrMsg msg={error.password} />
                </div>
                <div className="mb-3">
                  <Input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    className="form-control"
                    placeholder="Konfirmasi password"
                    value={form.confirm_password}
                    onChange={handleInput}
                  />
                  <ErrMsg msg={error.confirm_password} />
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handlePostForm}
                    // error={error}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalLoginOpen && (
        <Login title="Silahkan Login" onClose={handleRegisterModal} />
      )}
    </>
  );
}

export default Register;
