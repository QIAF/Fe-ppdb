import AlurDaftar from '../../components/AlurDaftar';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer/Footer';
import Heroes from '../../components/Heroes';
import InfoPendaftaran from '../../components/InfoPendaftaran';
import Navbar from '../../components/Navbar/Navbar';
import PendaftaranOnline from '../../components/PendaftaranOnline';
import Sekilas from '../../components/Sekilas';
import Testimonial from '../../components/Testimonial';
import './LandingPage.css';


function LandingPage(){
    return(
        <>
        <Navbar/>
        <Heroes/>
        <Sekilas/>
        <Testimonial/>
        <AlurDaftar/>
        <PendaftaranOnline/>
        <InfoPendaftaran/>
        <Faq/>
        <Footer/>
        </>
    )
}

export default LandingPage