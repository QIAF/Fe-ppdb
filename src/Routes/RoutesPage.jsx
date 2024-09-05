import { Route, Routes } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import LandingPage from "../pages/LandingPage/LandingPage";
import BiodataPage from "../pages/Biodata/BiodataPage";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "../pages/Login/Login";
import StudentMajor from "../pages/Major/StudentMajor";
import UpdateBiodata from "../pages/Biodata/UpdateBiodata";
import DetailData from "../components/BiodataForm/DetailData";
import Article from "../pages/Article/Article";
import Step from "../components/Step/Step";

export const RoutesPage = () => {
  return (
    <>
      {/* <Step /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/formData" element={<BiodataPage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/dataSiswa" element={<DetailData />} />
          <Route path="/updateData/:id" element={<UpdateBiodata />} />
        </Route>
        <Route path="/bidangKeahlian" element={<StudentMajor />} />
      </Routes>
    </>
  );
};
