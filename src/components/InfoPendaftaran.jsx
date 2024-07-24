import ImgPanah from "../assets/images/img-panah.png";
function InfoPendaftaran() {
  return (
    <div className="info-daftar-siswa">
      <div className="persyaratan-pandaftaran container">
        <div className="title-persyaratan text-center">
          <h4 className="title-persyaratan fw-bold">
            Persyaratan Pendaftaran Siswa Baru
          </h4>
        </div>
        <div className="list">
          <table id="table-persyaratan">
            <tbody>
              <tr>
                <td>
                  <img src={ImgPanah} alt="" />
                </td>
                <td>Pas Foto</td>
                <td>1 Lembar</td>
              </tr>
              <tr>
                <td>
                  <img src={ImgPanah} alt="" />
                </td>
                <td>Fotocopy KK</td>
                <td>1 Lembar</td>
              </tr>
              <tr>
                <td>
                  <img src={ImgPanah} alt="" />
                </td>
                <td>Surat Keterangan Lulus</td>
                <td>1 Lembar</td>
              </tr>
              <tr>
                <td>
                  <img src={ImgPanah} alt="" />
                </td>
                <td>Fotocopy Akte Kelahiran</td>
                <td>1 Lembar</td>
              </tr>
              <tr>
                <td>
                  <img src={ImgPanah} alt="" />
                </td>
                <td>Fotocopy Ijazah SMP</td>
                <td>1 Lembar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="informasi-pendaftaran">
        <div className="title-informasi-pendaftaran text-center">
          <h3>Informasi Pendaftaran</h3>
        </div>
        <div className="rata-pendaftar">
          <div className="container px-4 text-center">
            <div className="banner-pendaftar row gx-5 gap-2">
              <div className="col">
                <div className="banner-pendaftar1  p-5">
                  <h3>Pendaftar saat ini</h3>
                  <p className="total fw-bold">350</p>
                </div>
              </div>
              <div className="col">
                <div className="banner-pendaftar2 p-5">
                  <h3>Daya Tampung</h3>
                  <p className="total fw-bold">500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoPendaftaran;
