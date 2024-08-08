import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
   const user = localStorage.getItem("token");
  // menyimpan token jwt

  if(!user) {
    return <Navigate to='/' />
  } else {
    return <Outlet />
  }

}