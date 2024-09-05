import React, { useState, useEffect } from "react";
import StudentData from "./StudentData";
import StudentParentData from "./StudentParentData";
import StudentGuardianData from "./StudentGuardianData";
import StudentSchool from "./StudentSchool";
import StudentScoreReport from "./StudentScoreReport";
import StudentFileData from "./StudentFileData";

import {
  dataStudent,
  validateForm,
  validateLogin,
} from "../../Utils/validation";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "../Ui/Box/Box";
import FooterWhite from "../Footer/FooterWhite";
import Step from "../Step/Step";
import Cookies from "js-cookie";

function Form() {
  const [error, setError] = useState({});
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = Cookies.get("token");
    return !!token;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = Cookies.get("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          student_name: "",
          student_card_number: "",
          family_card_number: "",
          student_gender: "",
          place_birth: "",
          date_birth: "",
          student_address: "",
          student_address_now: "",
          student_distance: "",
          student_religion: "",
          student_blood_type: "",
          student_weight: "",
          student_height: "",
          student_child: "",
          student_kps: "",
          student_hobby: "",

          father_name: "",
          father_job: "",
          father_income: "",
          place_birth_father: "",
          father_birth: "",
          mother_name: "",
          mother_job: "",
          mother_income: "",
          place_birth_mother: "",
          mother_birth: "",
          phoneNumber_house: "",

          guardian_name: "",
          guardian_address: "",
          guardian_phone: "",
          guardian_job: "",

          school_name: "",
          school_status: "",
          school_address: "",
          ijazah_number: "",
          major_choice1: "",
          major_choice2: "",
          nisn: "",

          mathematics1: "",
          mathematics2: "",
          mathematics3: "",
          mathematics4: "",
          mathematics5: "",

          science1: "",
          science2: "",
          science3: "",
          science4: "",
          science5: "",

          indonesian1: "",
          indonesian2: "",
          indonesian3: "",
          indonesian4: "",
          indonesian5: "",

          english1: "",
          english2: "",
          english3: "",
          english4: "",
          english5: "",
          interview_score: 1,
          health_score: 1,

          student_picture: "",
          studentDocument: "",
        };
  });
  console.log("formdata", formData);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      toast.error("Silakan login terlebih dahulu");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      Cookies.set("formData", JSON.stringify(formData), {
        expires: 7,
        path: "/",
      });
    }
  }, [formData, isLoggedIn]);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     localStorage.setItem("formData", JSON.stringify(formData));
  //   }
  // }, [formData, isLoggedIn]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateLogin(formData, setError);
    console.log("masuk");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preForm) => ({
      ...preForm,
      [name]: value,
    }));
  };

  const handlePostForm = async () => {
    console.log("masuk tak?", formData);
    const dataToSend = dataStudent(formData);

    const formDataToSend = new FormData();
    for (let key in dataToSend) {
      formDataToSend.append(key, dataToSend[key]);
    }

    if (validateForm(formData, setError)) {
      const token = Cookies.get("token");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const studentDataRequest = axios.post(
          "https://be-ppdb-online-update.vercel.app/api/v1/studentData/create",
          formDataToSend,
          config
        );

        const studentDataResponse = await studentDataRequest;
        if (studentDataResponse.status === 200) {
          toast.success("Berhasil menambahkan data", { delay: 800 });
          navigate("/article");
          Cookies.remove("formData");
        }
      } catch (error) {
        toast.error("Gagal menambahkan data", { delay: 800 });
        console.error(
          "Terjadi kesalahan:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      alert("Data belum lengkap");
    }
  };
  const FormTitles = [
    "StudentData",
    "StudentParentData",
    "StudentGuardianData",
    "StudentSchool",
    "StudentScoreReport",
    "StudentFileData",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <StudentData
            formData={formData}
            setFormData={setFormData}
            handleInput={handleInput}
            error={error}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <StudentParentData
            formData={formData}
            setFormData={setFormData}
            handleInput={handleInput}
            error={error}
          />
        );
      case 2:
        return (
          <StudentGuardianData
            formData={formData}
            setFormData={setFormData}
            handleInput={handleInput}
          />
        );
      case 3:
        return (
          <StudentSchool
            formData={formData}
            setFormData={setFormData}
            handleInput={handleInput}
            error={error}
          />
        );
      case 4:
        return (
          <StudentScoreReport
            formData={formData}
            setFormData={setFormData}
            handleInput={handleInput}
            error={error}
          />
        );
      default:
        return (
          <StudentFileData
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
    }
  };

  return (
    <>
      <div
        className="row justify-content-md-center m-auto"
        style={{
          maxWidth: "800px" /* Lebar maksimal yang lebih kecil */,
        }}
      >
        <Step currentStep={page + 1} />
      </div>

      <Box>
        <div className="box ">
          <div className="container">
            <div className="body">{PageDisplay()}</div>
            <div className="footer d-grid gap-3 d-md-flex justify-content-md-end mb-3">
              <button
                className="btn btn-primary me-md-2"
                type="button"
                disabled={page === 0}
                onClick={() => setPage((currPage) => currPage - 1)}
              >
                Sebelumnya
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    handlePostForm(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Kirim" : "Selanjutnya"}
              </button>
            </div>
          </div>
        </div>
      </Box>
      <FooterWhite />
    </>
  );
}

export default Form;
