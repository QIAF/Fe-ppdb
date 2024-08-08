import "./Modal.css";

function Modal({ title, onClose, className, name, onClick, children }) {
  return (
    <>
    <div className="">
      <div className="wrapper-modal">
        <div className="card border-0 d-flex flex-column rounded-4 justify-content-center custom-modal">
          <div className="card-body p-0">
            <div className="modal-header">
               <div className="d-flex justify-content-end">
                 <h5 className="card-title text-center fs-5 fw-semibold">{title}</h5>
                <button className="btn-close" onClick={onClose}></button>
              </div>
              <hr></hr>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Modal;
