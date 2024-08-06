import { Route, Routes } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import LandingPage from "../pages/LandingPage/LandingPage";
import StudentDetail from "../components/BiodataForm/StudentDetail";
import BiodataPage from "../pages/Biodata/BiodataPage";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "../pages/Login/Login";
import StudentMajor from "../pages/Major/StudentMajor";
import FetchDataStudent from "../components/BiodataForm/FetchDataStudent";

export const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/formData" element={<BiodataPage />} />
          <Route path="/detailData/:id" element={<StudentDetail />} />
          <Route path="/getData" element={<FetchDataStudent />} />
        </Route>
        <Route path="/bidangKeahlian" element={<StudentMajor />} />
      </Routes>
    </>
  );
};
