import ImgIcon from '../../assets/images/img-IconSMK.png';
function Footer(){
    return(
        <div className="footer-lp">
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 my-5 border-top">
                <div className="col-md-6">
                    <div className="row d-flex justify-space-between align-items-center">
                    <div className="col-3">
                        <img
                        src={ImgIcon}
                        alt=""
                        className="img-logo-smk d-flex"
                        width="150px"
                        height="120px"
                        />
                    </div>
                    <div className="col ">
                        <div className="fs-4" style={{ marginLeft: 15 }}>
                        <h2>SMK 3 MUHAMMADIYAH</h2>
                        <h2>YOGYAKARTA</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col offset-3">
                    <p style={{ marginLeft: 25 }}>
                        High level experience in web design and development knowledge,
                        producing quality work.
                    </p>
                    </div>
                </div>
                <div className="col-md-4 px-5">
                    <h4>Lokasi</h4>
                    <ul className="nav flex-column">
                    <li className="">
                        Jl. Pramuka No.62, Giwangan, Kec. Umbulharjo, Kota Yogyakarta,
                        Daerah Istimewa Yogyakarta 55163
                    </li>
                    </ul>
                </div>
                <div className="col-md-2 ">
                    <h5>Section</h5>
                </div>
                </footer>
            </div>
        </div>

    )
}
export default Footer