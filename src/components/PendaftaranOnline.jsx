import { useState } from "react";
import ImgAlurOnline from "../assets/images/img-alur-online.png";
import { Login } from "../pages/Login/Login";
function PendaftaranOnline() {
  const [modalLogin, setmodalLogin] = useState(false);
  return (
    <div className="banner-daftar-online banner-lg p-3 mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-daftar-online">
              <h3>Pendaftaran Online</h3>
            </div>
            <p>
              Solusi untuk mempermudah, menghemat waktu, kamu dapat
              mengakses&nbsp;berbagai informasi seputar PPDB dan mendaftar
              secara online dimanapun kamu berada.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button"
              className="btn-daftar btn-lg px-4 me-md-2"
              onClick={() => setmodalLogin(true)}>
                Daftar sekarang
              </button>
              {modalLogin && (
                  <Login title={"Sebelum lanjut, login dulu yuk !"} />
                )}
            </div>
          </div>
          <div className="col">
            <div className="img-persyaratan-online">
              <img src={ImgAlurOnline} alt="" className="img-tutor-online " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PendaftaranOnline;
