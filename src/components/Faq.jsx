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
                  Placeholder content for this accordion, which is intended to
                  demonstrate the
                  <code>.accordion-flush</code> class. This is the first item's
                  accordion body.
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
                  Placeholder content for this accordion, which is intended to
                  demonstrate the
                  <code>.accordion-flush</code> class. This is the second item's
                  accordion body. Let's imagine this being filled with some
                  actual content.
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
                  Placeholder content for this accordion, which is intended to
                  demonstrate the
                  <code>.accordion-flush</code> class. This is the third item's
                  accordion body. Nothing more exciting happening here in terms
                  of content, but just filling up the space to make it look, at
                  least at first glance, a bit more representative of how this
                  would look in a real-world application.
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
