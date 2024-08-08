import ImgStudy from "../assets/images/img-study.png";
import ImgAlur from "../assets/images/img-alur-daftar.png";
function AlurDaftar() {
  return (
    <div id="alur-daftar">
      <div className="alur-daftar-siswa">
        <div className="title-alur container">
          <h3>
            <strong>Pendaftaran One Day Service</strong>
          </h3>
        </div>
        <div className="alur-pendaftaran container">
          <div className="row">
            <div className="col">
              <img src={ImgAlur} alt="" className="alur-daftar" />
            </div>
            <div className="col">
              <img src={ImgStudy} alt="" className="alur-daftar1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AlurDaftar;
