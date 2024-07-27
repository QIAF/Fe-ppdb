import { Route, Routes } from "react-router"
import { PrivateRoute } from "./PrivateRoute"
import LandingPage from "../pages/LandingPage/LandingPage"
import StudentDetail from "../components/BiodataForm/StudentDetail"
import BiodataPage from "../pages/Biodata/BiodataPage"
// import FormDetail from "../components/BiodataForm/FormDetail"

export const RoutesPage = () => {
    return(
        <>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
             {/* <Route element={<PrivateRoute/>}> */}
                 <Route path='/formData' element={<BiodataPage/>}/>
                 <Route path='/detailData' element={<StudentDetail/>} />
            {/* </Route>  */}
        </Routes>
        </>
    )
}