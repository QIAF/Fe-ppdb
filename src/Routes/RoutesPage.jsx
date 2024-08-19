import { Route, Routes } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import LandingPage from "../pages/LandingPage/LandingPage";
import BiodataPage from "../pages/Biodata/BiodataPage";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "../pages/Login/Login";
import StudentMajor from "../pages/Major/StudentMajor";
// import FetchDataStudent from "../components/BiodataForm/FetchDataStudent";
import UpdateBiodata from "../pages/Biodata/UpdateBiodata";
import DetailData from "../components/BiodataForm/DetailData";

export const RoutesPage = () => {
  return (
    <>
      {/* <FetchDataStudent /> */}
      {/* <BiodataPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/formData" element={<BiodataPage />} />
          <Route path="/getData" element={<DetailData />} />
          <Route path="/updateData/:id" element={<UpdateBiodata />} />
        </Route>
        <Route path="/bidangKeahlian" element={<StudentMajor />} />
      </Routes>
    </>
  );
};
