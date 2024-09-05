import AlurDaftar from "../../components/AlurDaftar";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer/Footer";
import Heroes from "../../components/Heroes";
import InfoPendaftaran from "../../components/InfoPendaftaran";
import Navbar from "../../components/Navbar/Navbar";
import PendaftaranOnline from "../../components/PendaftaranOnline";
import Sekilas from "../../components/Sekilas";
import Testimonial from "../../components/Testimonial";
import "./LandingPage.css";
import ChatBot from "../../components/ChatBot/ChatBot";
import ChatIcon from "../../components/ChatBot/ChatIcon";
import Panel from "../../components/Panel/Panel";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Heroes />
      {/* <ChatBot /> */}
      <ChatIcon />
      <Sekilas />
      <Testimonial />
      <AlurDaftar />
      <PendaftaranOnline />
      <InfoPendaftaran />
      <Faq />
      <Panel />
      <Footer />
    </>
  );
}

export default LandingPage;
