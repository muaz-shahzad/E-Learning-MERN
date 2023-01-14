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
import axios from 'axios';
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
import C1 from './Components/AdminPannel/AddCourse/Pages/C1';
import C2 from './Components/AdminPannel/AddCourse/Pages/C2';
import C3 from './Components/AdminPannel/AddCourse/Pages/C3';
import C4 from './Components/AdminPannel/AddCourse/Pages/C4';
import C5 from './Components/AdminPannel/AddCourse/Pages/C5';
import C6 from './Components/AdminPannel/AddCourse/Pages/C6';
import C7 from './Components/AdminPannel/AddCourse/Pages/C7';
import C8 from './Components/AdminPannel/AddCourse/Pages/C8';
import C9 from './Components/AdminPannel/AddCourse/Pages/C9';
import C10 from './Components/AdminPannel/AddCourse/Pages/C10';
import C11 from './Components/AdminPannel/AddCourse/Pages/C11';
import C12 from './Components/AdminPannel/AddCourse/Pages/C12';
import COURSESINFO from './Components/AdminPannel/CouresInfo/COURSESINFO';
import RegisterInfo from './Components/AdminPannel/RegisterUserInfo/Register';
import UserDownloadInfo from './Components/AdminPannel/UserDownloadInfo/UserDownloadInfo';
import DownloadCourseInfo from './Components/AdminPannel/DownloadCourses/DownloadCourseInfo';




function App() {
  const [user, setLoginUser] = useState({})
  const [admin, setNewadmin] = useState({})

  // const [state, updstate] = useState({
  //   course_name: "",
  //   course_id: "",

  // })
  // const getdata = (id) => {
  //   axios.get(`http://localhost:9002/Addcourse/${id}`).then(function (response) {
  //     // updstate({
  //     //   // course_name: response.body.course_name,
  //     //   course_id: response.body.course_id,
  //     // })
  //     // console.log(Json.strresponse.data+"asss");
  //     console.log(JSON.stringify(response.data));
  //   }).catch((e)=>{
  //     console.log(e);
  //   })

  // }
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

          <Route path="*" element={<Navigate to="/" />} />

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
          <Route
            path='/courses/UI/:id' element={
              user && user._id ?
                (
                  <CoursesDetailUI
                    setLoginUser={setLoginUser}
                    Username={user.name}

                  />
                ) : (
                  <Navigate replace to="/" />
                )

            }

          />

          <Route path='/courses/art' element={<ArtPage />} />
          <Route path='/courses/art/:id' element={
            user && user._id ?
              (
                <ArtCoursesDetail
                  setLoginUser={setLoginUser}
                  Username={user.name}

                />
              ) : (
                <Navigate replace to="/" />
              )
          }

          />

          <Route path='/courses/computer' element={<ComputerPage />} />
          <Route path='/courses/computer/:id' element={
            user && user._id ?
              (
                <CSCoursesDetail
                  setLoginUser={setLoginUser}
                  Username={user.name}

                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />
          <Route path='/courses/history' element={<HistoryPage />} />
          <Route path='/courses/history/:id' element={
            user && user._id ?
              (
                <HistoryCoursesDetail
                  setLoginUser={setLoginUser}
                  Username={user.name}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />

          <Route path='/courses/software' element={<SEPage />} />
          <Route path='/courses/software/:id' element={
            user && user._id ?
              (
                <CourseDetailSE
                  setLoginUser={setLoginUser}
                  Username={user.name}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />

          <Route path='/courses/security' element={<InfoSecurityPage />} />
          <Route path='/courses/security/:id' element={
            user && user._id ?
              (
                <SecurCoursesDetail
                  setLoginUser={setLoginUser}
                  Username={user.name}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />

          <Route path='/courses/health' element={<HealthPage />} />
          <Route path='/courses/health/:id' element={
            user && user._id ?
              (
                <HealthCoursesDetailUI setLoginUser={setLoginUser}
                  Username={user.name}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />

          <Route path='/courses/market' element={<MarketingPage />} />
          <Route path='/courses/market/:id' element={
            user && user._id ?
              (
                <MarkCoursesDetail
                  Username={user.name}
                  Email={user.email}
                  userid={user._id}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />

          <Route path='/courses/graphic' element={<GraphicPage />} />
          <Route path='/courses/graphic/:id' element={
            user && user._id ?
              (
                <GCoursesDetail Username={user.name}
                  Email={user.email}
                  userid={user._id}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />

          <Route path='/courses/music' element={<MusicPage />} />
          <Route path='/courses/music/:id' element={
            user && user._id ?
              (
                <MusicCoursesDetail Username={user.name}
                  Email={user.email}
                  userid={user._id}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />

          <Route path='/courses/buisness' element={<BusinessAdministrationPage />} />
          <Route path='/courses/buisness/:id' element={
            user && user._id ?
              (
                <BCoursesDetail Username={user.name}
                  Email={user.email}
                  userid={user._id}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />


          <Route path='/courses/web' element={<WebPage />} />
          <Route path='/courses/web/:id' element={
            user && user._id ?
              (
                <CourseDetailW Username={user.name}
                  Email={user.email}
                  userid={user._id}
                />
              ) : (
                <Navigate replace to="/" />
              )
          }
          />
























          <Route path="/homeadmin/Addcourse" element={<Addcourse />} />
          <Route path="/homeadmin/coursesinfo" element={<COURSESINFO />} />
          <Route path="/homeadmin/registeruser" element={<RegisterInfo />} />
          <Route path="/homeadmin/usersinfo" element={<UserDownloadInfo />} />
          <Route path="/homeadmin/downloadusers" element={<DownloadCourseInfo />} />




          <Route path="/updtcourse" element={<Updcours />} />
          {/* //Inter Add category routes */}

          <Route path='/homeadmin/Addcourse/UI' element={<C1 />} />
          <Route path='/homeadmin/Addcourse/art' element={<C2 />} />
          <Route path='/homeadmin/Addcourse/computer' element={<C3 />} />
          <Route path='/homeadmin/Addcourse/history' element={<C4 />} />
          <Route path='/homeadmin/Addcourse/software' element={<C5 />} />
          <Route path='/homeadmin/Addcourse/security' element={<C6 />} />
          <Route path='/homeadmin/Addcourse/health' element={<C7 />} />
          <Route path='/homeadmin/Addcourse/market' element={<C8 />} />
          <Route path='/homeadmin/Addcourse/graphic' element={<C9 />} />
          <Route path='/homeadmin/Addcourse/music' element={<C10 />} />
          <Route path='/homeadmin/Addcourse/buisness' element={<C11 />} />
          <Route path='/homeadmin/Addcourse/web' element={<C12 />} />

        </Routes>






        {/* <Routes>
        <Route path='/' element={<Adminpage />} />
        <Route path='/Addcourse' element={<Addcourse />} />
        <Route path='/updtcourse' element={<Updcours />} />



      </Routes> */}



        {/* <button onClick={getdata}>Get Data by id</button> */}
        {/* <button onClick={() => getdata(6)}>Get Data by id</button> */}

      </div>

    </>
  );
}

export default App;
