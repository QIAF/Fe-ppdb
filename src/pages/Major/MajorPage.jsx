import Card from "../../components/Card";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NavbarMajor from "../../components/Navbar/NavbarMajor";
import './MajorPage.css'
import ImgStudent2 from "../../assets/images/img-student2.png"

function MajorPage(){
    return(
        <>
        <NavbarMajor/>
        <Hero
        title={"Bidang Keahlian"}
        img={ImgStudent2}/>
        <Card/>
        <Footer/>
        </>
    )
}
export default MajorPage;