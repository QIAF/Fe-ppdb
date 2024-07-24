import { Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage/LandingPage';
import { SignUp } from './pages/Login/SignUp';
import BiodataPage from './pages/Biodata/BiodataPage';
import FormDetail from './components/BiodataForm/FormDetail';
import { Login } from './pages/Login/Login';
import MajorPage from './pages/Major/MajorPage';
import { RoutesPage } from './Routes/RoutesPage';


function App() {
  return (
    <>
    {/* <LoginPage/> */}
    {/* <RegisterPage /> */}
    {/* <LandingPage/> */}
    {/* <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/formData' element={<BiodataPage/>}/>
      <Route path='/detailData' element={<FormDetail/>}/>
      <Route path='/MajorPage' element={<MajorPage/>}/>
    </Routes> */}

    <RoutesPage/>
    </>
  )
}

export default App
