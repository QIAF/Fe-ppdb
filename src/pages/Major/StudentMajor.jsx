import React from "react";
import NavbarMajor from "../../components/Navbar/NavbarMajor";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card";
import Footer from "../../components/Footer/Footer";
import ImgStudent2 from "../../assets/images/img-student2.png";

function StudentMajor() {
  return (
    <>
      <NavbarMajor />
      <Hero title={"Bidang Keahlian"} img={ImgStudent2} />
      <Card />
      <Footer />
    </>
  );
}

export default StudentMajor;
