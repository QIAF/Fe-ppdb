import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
  const user = Cookies.get('_token');
  //menyimpan token jwt

  if(!user) {
    return <Navigate to='/' />
  } else {
    return <Outlet />
  }

}