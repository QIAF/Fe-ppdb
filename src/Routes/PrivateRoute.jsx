import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  //  const user = localStorage.getItem("token");
  // menyimpan token jwt
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};
