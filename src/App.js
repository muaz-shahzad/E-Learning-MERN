import logo from './logo.svg';
import './App.css';
import Homepage from './Components/HomePage/Homepage'
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Navigate,
  Outlet

} from "react-router-dom";
import { useState } from 'react'
import Admin from './Components/Admin/Admin';
import HomeAdmin from './Components/HomeAdmin/HomeAdmin';
import Header from './Components/Client/Header/Header';
import Home from './Components/Client/Home/Home';
import Head from './Components/Client/Head/Head';

import AboutPage from './Components/Pages/AboutPage';
import TeamPage from './Components/Pages/TeamPage';
import ContactPage from './Components/Pages/ContactPage';
import Userprofile from './Components/UserProfile/Userprofile';
import UserPage from './Components/Pages/UserPage';
import CoursesPage from './Components/Pages/CoursesPage';
import ArtPage from './Components/Client/CourseCategories/CategoryPages/ArtPage';
import BusinessAdministrationPage from './Components/Client/CourseCategories/CategoryPages/BusinessAdministrationPage';
import HealthPage from './Components/Client/CourseCategories/CategoryPages/HealthPage';
import HistoryPage from './Components/Client/CourseCategories/CategoryPages/HistoryPage';
import ComputerPage from './Components/Client/CourseCategories/CategoryPages/ComputerPage';
import GraphicPage from './Components/Client/CourseCategories/CategoryPages/GraphicPage';
import InfoSecurityPage from './Components/Client/CourseCategories/CategoryPages/InfoSecurityPage';
import MusicPage from './Components/Client/CourseCategories/CategoryPages/MusicPage';
import SEPage from './Components/Client/CourseCategories/CategoryPages/SEPage';
import UIUXPage from './Components/Client/CourseCategories/CategoryPages/UIUXPage';
import WebPage from './Components/Client/CourseCategories/CategoryPages/WebPage';
import MarketingPage from './Components/Client/CourseCategories/CategoryPages/MarketingPage';
import CoursesDetailUI from './Components/Client/CourseCategories/UI/CoursesDetailUI';
import CourseDetailSE from './Components/Client/CourseCategories/SE/CourseDetailSE';
import CourseDetailW from './Components/Client/CourseCategories/Web/CoursesDetailW';
import MusicCoursesDetail from './Components/Client/CourseCategories/Music/MusicCoursesDetail';
import MarkCoursesDetail from './Components/Client/CourseCategories/Marketing/MarkCoursesDetail';
import ArtCoursesDetail from './Components/Client/CourseCategories/Art/ArtCoursesDetail';
import BCoursesDetail from './Components/Client/CourseCategories/Business/BCoursesDetail';
import CSCoursesDetail from './Components/Client/CourseCategories/CS/CSCoursesDetail';
import GCoursesDetail from './Components/Client/CourseCategories/Graphic/GCoursesDetail';
import HealthCoursesDetailUI from './Components/Client/CourseCategories/Health/HealthCoursesDetailUI';
import HistoryCoursesDetail from './Components/Client/CourseCategories/History/HistoryCoursesDetail';
import SecurCoursesDetail from './Components/Client/CourseCategories/Information/SecurCoursesDetail';
import Adminpage from './Components/AdminPannel/Adminpage';
import AdminTable from './Components/AdminPannel/AdminTable';
import Addcourse from './Components/AdminPannel/AddCourse/Addcourse';
import Updcours from './Components/AdminPannel/UpdCourse/Updcours';
import Dltecourse from './Components/AdminPannel/DlteCourse/Dltecourse';




function App() {
  const [user, setLoginUser] = useState({})
  const [admin, setNewadmin] = useState({})


  return (
    <>

      <div className='App'>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage
                  setLoginUser={setLoginUser}
                  Username={user.name}
                  Email={user.email}


                />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route

            path="/homeadmin"
            element={
              admin && admin._id ? (
                <Adminpage
                  setNewadmin={setNewadmin}
                  adminEmail={admin.email}

                />
              ) : (
                <Navigate replace to="/admin" />
              )
            }
          />
          <Route path="/admin" element={<Admin setNewadmin={setNewadmin} />}></Route>

          {/* <Route path="*" element={<Navigate to="/" />} /> */}

          <Route path="/contact" element={
            user && user._id ? (
              <ContactPage
                setLoginUser={setLoginUser}
                Username={user.name}
                Email={user.email}
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
          />
          <Route path="/aboutpage" element={
            user && user._id ? (
              <AboutPage
                setLoginUser={setLoginUser}
                Username={user.name}
                Email={user.email}
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
          />
          <Route path="/team" element={
            user && user._id ? (
              <TeamPage
                setLoginUser={setLoginUser}
                Username={user.name}
                Email={user.email}
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
          />
          <Route path="/profile" element={
            user && user._id ? (
              <UserPage
                setLoginUser={setLoginUser}
                Username={user.name}
                Email={user.email}
                userid={user._id}
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
          />
          <Route path="/courses" element={
            user && user._id ? (
              <CoursesPage
                setLoginUser={setLoginUser}
                Username={user.name}
                Email={user.email}
                userid={user._id}
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
          />
          <Route path='/courses/UI' element={<UIUXPage />} />
          <Route path='/courses/UI/:id' element={<CoursesDetailUI />} />

          <Route path='/courses/art' element={<ArtPage />} />
          <Route path='/courses/art/:id' element={<ArtCoursesDetail />} />

          <Route path='/courses/computer' element={<ComputerPage />} />
          <Route path='/courses/computer/:id' element={<CSCoursesDetail />} />

          <Route path='/courses/history' element={<HistoryPage />} />
          <Route path='/courses/history/:id' element={<HistoryCoursesDetail />} />

          <Route path='/courses/software' element={<SEPage />} />
          <Route path='/courses/software/:id' element={<CourseDetailSE />} />

          <Route path='/courses/security' element={<InfoSecurityPage />} />
          <Route path='/courses/security/:id' element={<SecurCoursesDetail />} />

          <Route path='/courses/health' element={<HealthPage />} />
          <Route path='/courses/health/:id' element={<HealthCoursesDetailUI />} />

          <Route path='/courses/market' element={<MarketingPage />} />
          <Route path='/courses/market/:id' element={<MarkCoursesDetail />} />

          <Route path='/courses/graphic' element={<GraphicPage />} />
          <Route path='/courses/graphic/:id' element={<GCoursesDetail />} />

          <Route path='/courses/music' element={<MusicPage />} />
          <Route path='/courses/music/:id' element={<MusicCoursesDetail />} />

          <Route path='/courses/buisness' element={<BusinessAdministrationPage />} />
          <Route path='/courses/buisness/:id' element={<BCoursesDetail />} />

          <Route path='/courses/web' element={<WebPage />} />
          <Route path='/courses/web/:id' element={<CourseDetailW />} />





      

         
          

       

        

         

        



         
          <Route path="/Addcourse" element={<Addcourse />} />
          <Route path="/updtcourse" element={<Updcours />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
