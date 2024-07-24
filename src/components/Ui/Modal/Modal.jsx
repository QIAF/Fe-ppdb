import {Input} from "../Form/Input";
import "./Modal.css";
import ImgGoogle from "../../../assets/images/img-icon-google.png";
import { Link } from "react-router-dom";
import { CustomModal } from "./customModal";
import { useState } from "react";
import Button from "../Button/Button";


function Modal({ title, content, setRegisterModal, handlePostForm }) {

  const [registerConfirm, setRegisterConfirm ] = useState(false);
  const handleConfirmRegistration =  () => {
    handlePostForm();
  }

  return (
    <>
    { registerConfirm &&
      <CustomModal
      title={"register"}
      confirmAction={handleConfirmRegistration}
      cancelAction={() => setRegisterConfirm(false)}
      />
    }
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: "#816503" }}>
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <Input
                type={"email"}
                className={"form-control"}
                placeholder={"Masukkan email anda"}
              />
            </div>
            <div className="mb-3">
              <Input
                type={"password"}
                className={"form-control"}
                placeholder={"Masukkan password anda"}
              />
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to={'/create-form'}>
                <button className="btn btn-primary" type="button">Login</button>
              </Link>
               <button className="btn btn-primary" type="button" onClick={() => setRegisterConfirm(true)}>
                Register
              </button>
            </div>
          </div>
          <p className="title-or text-center" style={{ color: "#000000" }}>
            atau
          </p>
          <div className="d-flex justify-content-center mx-auto mb-3">
            <button type="button" className="btn btn-outline-dark btn-sm ">
              <img className="img-google" src={ImgGoogle} alt="" /> &nbsp; Masuk
              dengan google
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Modal;
