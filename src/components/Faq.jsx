function Faq() {
  return (
    <div className="faq-lp">
      <div className="title-faq text-center">
        <h3>
          <strong>Frequently Asked Questions</strong>
        </h3>
      </div>
      <div className="container-sm" style={{ maxWidth: "540px" }}>
        <div className="list-faq">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Apakah siswa diluar pulau Jawa berkesempatan untuk Lolos?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Ya, siswa dari luar Yogyakarta tetap memiliki kesempatan untuk
                  lolos seleksi di SMK 3 Muhammadiyah Yogyakarta. Kesempatan
                  untuk diterima biasanya tidak terbatas pada asal daerah siswa,
                  tetapi lebih bergantung pada kualifikasi, prestasi akademik,
                  kemampuan, dan kesiapan siswa dalam mengikuti seleksi.
                  Faktor-faktor lain seperti nilai ujian, hasil tes seleksi,
                  wawancara, serta kesesuaian dengan nilai-nilai dan visi
                  sekolah juga akan menjadi pertimbangan dalam penerimaan siswa.
                  Oleh karena itu, siswa dari luar Yogyakarta yang memenuhi
                  kriteria dan memiliki motivasi yang kuat tetap memiliki
                  peluang untuk diterima di SMK 3 Muhammadiyah Yogyakarta.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Apakah SMK 3 Muhammadiyah memiliki Sosial media seperti
                  Youtube, Facebook dan sejenisnya ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  SMK Muhammadiyah 3 Yogyakarta memiliki beberapa akun media
                  sosial yang aktif digunakan untuk berbagi informasi mengenai
                  kegiatan sekolah, pengumuman, dan hal-hal lainnya yang
                  berkaitan dengan sekolah. Anda dapat mengikuti sekolah ini di
                  platform seperti Instagram dan Facebook untuk mendapatkan
                  update terbaru.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Apakah SMK 3 Muhammadiyah memiliki Beasiswa bagi siswa yang
                  berprestasi ?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Ya, SMK 3 Muhammadiyah Yogyakarta menyediakan beasiswa bagi
                  siswa yang berprestasi. Sekolah ini berkomitmen untuk
                  mendukung siswa yang memiliki potensi akademik tinggi dan
                  kemampuan khusus melalui berbagai program beasiswa. Selain
                  itu, siswa yang memiliki prestasi di bidang akademik atau
                  non-akademik berpeluang untuk mendapatkan beasiswa guna
                  meringankan biaya pendidikan mereka​
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;
