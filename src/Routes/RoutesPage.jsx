import { Route, Routes } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import LandingPage from "../pages/LandingPage/LandingPage";
import StudentDetail from "../components/BiodataForm/StudentDetail";
import BiodataPage from "../pages/Biodata/BiodataPage";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "../pages/Login/Login";
import MajorPage from "../pages/Major/MajorPage";

export const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/formData" element={<BiodataPage />} />
          <Route path="/detailData" element={<StudentDetail />} />
          <Route path="/bidangKeahlian" element={<MajorPage />} />
        </Route>
      </Routes>
    </>
  );
};
