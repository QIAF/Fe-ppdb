import { useNavigate } from "react-router";
import { Button } from "../Ui/Button/Button";

const Hero = (props) => {
  const navigate = useNavigate();
  function handleClick(route) {
    navigate(route);
  }
  const { img, title, text, showPlay } = props;
  return (
    <div className="heroes-Major">
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
          <div className="col-lg-6">
            <h1 className="title-heroes-major display-5 fw-bold lh-1 mb-5 text-center">
              {title}
            </h1>
            <br />
            <p>
              <b>{text}</b>
            </p>
            {showPlay && (
              <Button
                className="btn-primary border-2 border-primary text-white fw-semibold px-4 "
                onClick={() => handleClick("/getData")}
              >
                Lihat Data
              </Button>
            )}
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
  );
};
export default Hero;
