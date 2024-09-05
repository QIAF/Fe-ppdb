function HeroesMajorDesc() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
        <div className=" col-lg-6">
          <p className="title-hero-major-desc">Bidang Keahlian</p>
          <h1 className="title-hero-major display-5 fw-bold lh-1 mb-3">
            Teknik Ketenagalistrikan
          </h1>
          <p className="lead">
            Teknik Instalasi Tenaga Listrik adalah jurusan yang mempelajari
            tentang perencanaan dan pemasangan instalasi penerangan, tenaga
            pemasangan dan pengoperasian motor listrik dengan kendali
            elektromekanik, elektronik dan PLC (Programable Logic Controller).
            Merawat dan memperbaiki alat rumah tangga listrik dan teknik
            pendingin, serta menggulung ulang motor listrik.
          </p>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube video"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroesMajorDesc;
