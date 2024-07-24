const Hero = (props) => {
    const {img, title} = props;
    return(
        <div className="heroes-Major">
           <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-lg-6">
                <h1 className="title-heroes-major display-5 fw-bold lh-1 mb-3 text-center">
                    {title}
                </h1>
                </div>
                <div className="col-10 col-sm-8 col-lg-6">
                <img
                    src={img}
                    className="img-student-major d-block mx-lg-auto img-fluid justify-content-center"
                    alt="Bootstrap Themes"
                    loading="lazy"
                />
                </div>
            </div>
        </div>

       </div>
    )
}
export default Hero