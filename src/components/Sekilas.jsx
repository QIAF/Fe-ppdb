import ImgStudy from '../assets/images/img-study.png';
function Sekilas(){
    return(
        <div className="sekilas-tentang">
            <div className="title-tentang text-center ">
                <h3 className="fw-bold">Sekilas Mengenai Kami ..</h3>
            </div>
            <div className="sekilas">
                <div className="container">
                <div className="banner-sekilas row">
                    <div className=" desk-tentang col m-auto">
                    <div className="title-sekilas m-auto">
                        <p className="m-5">
                        Sekolah swasta terbesar di Provinsi Daerah Istimewa Yogyakarta
                        yang bergerak di bidang Teknologi dan Rekayasa serta Teknologi
                        Komunikasi dan Informatika
                        </p>
                    </div>
                    </div>
                    <div className="col ">
                    <img src={ImgStudy} className="sekilas-img" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>


    )
}
export default Sekilas