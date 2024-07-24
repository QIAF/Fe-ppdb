import Hero from "../../components/Hero/Hero";
import NavbarMajor from "../../components/Navbar/NavbarMajor";
import ImgStudent2 from "../../assets/images/img-student2.png"
import Form from "../../components/BiodataForm/Form";

function BiodataPage(){
    return(
        <>
        <NavbarMajor/>
        <Hero
        title={"Pendaftaran"}
        img={ImgStudent2}/>
        <Form/>


        </>

    )
}
export default BiodataPage;