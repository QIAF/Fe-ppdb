import Hero from "../../components/Hero/Hero";
import ImgStudent2 from "../../assets/images/img-student2.png";
import Form from "../../components/BiodataForm/Form";
import NavbarForm from "../../components/Navbar/NavbarForm";

function BiodataPage() {
  return (
    <>
      <NavbarForm />
      <Hero title={"Pendaftaran"} img={ImgStudent2} />
      <Form />
    </>
  );
}
export default BiodataPage;
