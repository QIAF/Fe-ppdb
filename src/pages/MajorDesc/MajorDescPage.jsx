import 'bootstrap/dist/css/bootstrap.min.css';

import HeroesMajorDesc from "../../components/HeroesMajorDesc"
import NavbarMajor from "../../components/Navbar/NavbarMajor"
import Footer from "../../components/Footer/Footer"
import Teacher from "../../components/Teacher"
import './MajorDesc.css'


function MajorDescPage(){
    return(
        <>
        <NavbarMajor/>
        <HeroesMajorDesc/>
        <Teacher/>
        <Footer/>
        </>
    )
}
export default MajorDescPage