import { Input } from '../../components/Ui/Form/Input'
import './Login.css'

export const SignUp = ({title, onClose}) => {
    return(
        <div className="wrapper-modal">
        <div className='card border-0 d-flex flex-column rounded-4 justify-content-center custom-modal'>
            <div className="card-body p-0">
                <div className="d-flex justify-content-end">
                    <button className="btn-close" onClick={onClose}></button>
                </div>
            <h5 className="card-title text-center fs-2 fw-semibold">{title}</h5>
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
            <div className='d-flex flex-row justify-content-center w-100 gap-3 mt-3'>
                <button className="btn btn-primary" type="button">
                Login
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}