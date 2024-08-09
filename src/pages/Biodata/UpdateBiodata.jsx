import React from "react";
import NavbarForm from "../../components/Navbar/NavbarForm";
import StudentData from "../../components/BiodataForm/StudentData";
import StudentParentData from "../../components/BiodataForm/StudentParentData";
import StudentGuardianData from "../../components/BiodataForm/StudentGuardianData";
import Form from "../../components/BiodataForm/Form";

function UpdateBiodata() {
  return (
    <>
      <NavbarForm />
      <Form />
    </>
  );
}

export default UpdateBiodata;
