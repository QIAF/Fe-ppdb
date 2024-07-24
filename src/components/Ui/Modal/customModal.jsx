import { useState } from 'react';
import Button from '../Button/Button';
import { Input } from '../Form/Input';
import './Modal.css'
import { dataStudent } from '../../../Utils/validation';

export const CustomModal = ({ title, cancelAction, confirmAction, disabled}) => {

    const [formRegistration, setFormRegistration] = useState({
        full_name : "",
        age: "",
    });

    const handleInput = (e) => {
    const { name, value } = e.target;
    setFormRegistration({
      ...formRegistration,
      [name]: value,
    });
  };

  return (
    <>
      <div className="wrapper-modal">
        <div className='card border-0 d-flex flex-column rounded-4 justify-content-center custom-modal'>

          <div className="card-body p-0">
            <h5 className="card-title text-center fs-2 fw-semibold">{title}</h5>
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
            <div className='d-flex flex-row justify-content-center w-100 gap-3 mt-3'>
              <Button
                disabled={disabled}
                type={'button'}
                onClick={cancelAction}
                className={'btn-primary text-white fw-semibold w-50 text-nowrap'}
              >
                Tidak
              </Button>
              <Button
                disabled={disabled}
                type={'button'}
                onClick={confirmAction}
                className={'btn-outline-primary fw-semibold border-2 rounded-2 w-50'}
              >
              {disabled
                ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                : 'Ya'
              }
              </Button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}