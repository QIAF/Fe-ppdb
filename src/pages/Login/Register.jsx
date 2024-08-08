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
    age: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    validateRegister(form, setError);
  };

  const handlePostForm = async (data) => {
    const formRegister = dataRegister(data);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
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
      toast.error("Gagal Register, silahkan register kembali", {
        delay: 800,
      });
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
                    type={"full_name"}
                    className={"form-control"}
                    placeholder={"Masukkan nama lengkap"}
                    value={form.full_name}
                    onChange={handleInput}
                  />
                  <ErrMsg msg={error.full_name} />
                </div>
                <div className="mb-3">
                  <Input
                    id="age"
                    name="age"
                    type={"age"}
                    className={"form-control"}
                    placeholder={"Masukkan umur"}
                    value={form.age}
                    onChange={handleInput}
                  />
                  <ErrMsg msg={error.email} />
                </div>
                <div className="mb-3">
                  <Input
                    id="email"
                    name="email"
                    className={"form-control"}
                    type={"email"}
                    value={form.email}
                    onChange={handleInput}
                    placeholder={"Masukkan email anda"}
                  />
                </div>
                <ErrMsg msg={error.password} />
                <div className="mb-3">
                  <Input
                    id="password"
                    name="password"
                    className={"form-control"}
                    type={"password"}
                    value={form.password}
                    onChange={handleInput}
                    placeholder={"Masukkan password anda"}
                  />
                  <ErrMsg msg={error.password} />
                </div>
                <div className="mb-3">
                  <Input
                    id="confirm_password"
                    name="confirm_password"
                    className={"form-control"}
                    type={"password"}
                    value={form.confirm_password}
                    onChange={handleInput}
                    placeholder={"Confirm password"}
                  />
                  <ErrMsg msg={error.password} />
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handlePostForm}
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
        <Login title={"Silahkan Login"} onClose={handleRegisterModal} />
      )}
    </>
  );
}

export default Register;
