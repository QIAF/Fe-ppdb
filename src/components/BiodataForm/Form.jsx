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

function Form() {
  const [error, setError] = useState({});
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          student_name: "",
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
          major_choice: "",
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

          studentDocument: "",
        };
  });
  console.log("data", formData);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Silakan login terlebih dahulu");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    // Simpan formData ke localStorage setiap kali formData berubah
    if (isLoggedIn) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData, isLoggedIn]);

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

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const currentChoices = formData.major_choice
      ? formData.major_choice.split(",")
      : [];

    let updatedChoices;

    if (checked) {
      updatedChoices = [...new Set([...currentChoices, value])];
    } else {
      updatedChoices = currentChoices.filter((choice) => choice !== value);
    }

    const updatedChoicesString = updatedChoices.join(",");
    setFormData({
      ...formData,
      major_choice: updatedChoicesString,
    });
  };

  // const handlePostForm = async () => {
  //   console.log("masuk tak?", formData);
  //   const dataToSend = dataStudent(formData);

  //   const formDataToSend = new FormData();
  //   for (let key in dataToSend) {
  //     formDataToSend.append(key, dataToSend[key]); // Memasukkan setiap properti dari dataToSend ke formDataToSend
  //   }

  //   if (validateForm(formData, setError)) {
  //     const token = localStorage.getItem("token");
  //     console.log("Token for request:", token); // Ambil token dari localStorage
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`, // Sertakan token dalam header Authorization
  //       },
  //     };

  //     try {
  //       const res = await axios.post(
  //         "http://localhost:3000/api/v1/studentData/create",
  //         formDataToSend,
  //         config
  //       );

  //       console.log("Response status:", res.status);
  //       console.log("Response data:", res.data);

  //       if (res.status === 200) {
  //         toast.success("Berhasil menambahkan data", { delay: 800 });
  //         navigate("/getData"); // Pindah ke halaman getData setelah sukses
  //         localStorage.removeItem("formData"); // Hapus data dari localStorage setelah sukses
  //       }
  //     } catch (error) {
  //       toast.error("Gagal menambahkan data", { delay: 800 });
  //     }
  //   } else {
  //     alert("Data belum lengkap");
  //   }
  // };

  // const handlePostForm = async () => {
  //   console.log("masuk tak?", formData);
  //   const dataToSend = dataStudent(formData);

  //   const formDataToSend = new FormData();
  //   for (let key in dataToSend) {
  //     formDataToSend.append(key, dataToSend[key]);
  //   }

  //   if (validateForm(formData, setError)) {
  //     const token = localStorage.getItem("token");
  //     console.log("Token for request:", token);

  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`, // Fix the token header format
  //       },
  //     };

  //     try {
  //       // First API call to submit the form data
  //       const res = await axios.post(
  //         "http://localhost:3000/api/v1/studentData/create",
  //         formDataToSend,
  //         config
  //       );

  //       console.log("Response status:", res.status);
  //       console.log("Response data:", res.data);

  //       if (res.status === 200) {
  //         toast.success("Berhasil menambahkan data", { delay: 800 });
  //         navigate("/getData"); // Navigate to getData page after success

  //         // Assuming user_id is returned in the response data from the first API call
  //         const userId = res.data.user_id; // Replace with the actual way to get user_id from the response

  //         // Make a second API call to submit scores
  //         if (userId) {
  //           const scoreData = {
  //             health_score: formData.healthScore, // Replace with actual values
  //             interview_score: formData.interviewScore, // Replace with actual values
  //           };

  //           await axios.post("http://localhost:3000/api/v1/finalScore", {
  //             ...scoreData,
  //             user_id: userId,
  //           });

  //           console.log("Final score submitted successfully");
  //         }

  //         localStorage.removeItem("formData"); // Clear the form data from localStorage
  //       }
  //     } catch (error) {
  //       toast.error("Gagal menambahkan data", { delay: 800 });
  //       console.error("Error occurred:", error);
  //     }
  //   } else {
  //     alert("Data belum lengkap");
  //   }
  // };

  const handlePostForm = async () => {
    console.log("masuk tak?", formData);
    const dataToSend = dataStudent(formData);

    const formDataToSend = new FormData();
    for (let key in dataToSend) {
      formDataToSend.append(key, dataToSend[key]);
    }

    if (validateForm(formData, setError)) {
      const token = localStorage.getItem("token");
      console.log("Token untuk request:", token);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        // Persiapkan kedua permintaan
        const studentDataRequest = axios.post(
          "http://localhost:3000/api/v1/studentData/create",
          formDataToSend,
          config
        );

        const scoreData = {
          health_score: formData.healthScore, // Pastikan ini angka yang valid
          interview_score: formData.interviewScore, // Pastikan ini angka yang valid
        };

        // Pastikan header Content-Type sesuai dengan format yang diharapkan
        const finalScoreRequest = axios.post(
          "http://localhost:3000/api/v1/finalScore",
          scoreData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const [studentDataResponse, finalScoreResponse] = await Promise.all([
          studentDataRequest,
          finalScoreRequest,
        ]);

        console.log("Status respons studentData:", studentDataResponse.status);
        console.log("Data respons studentData:", studentDataResponse.data);

        if (studentDataResponse.status === 200) {
          toast.success("Berhasil menambahkan data", { delay: 800 });
          navigate("/getData");
          localStorage.removeItem("formData");
        }

        console.log("Status respons finalScore:", finalScoreResponse.status);
        console.log("Data respons finalScore:", finalScoreResponse.data);
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
            handleCheckboxChange={handleCheckboxChange}
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
    </>
  );
}

export default Form;
