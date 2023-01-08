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
          {
            admin && admin._id ? <Route exact path="/homeadmin" element={
              <Adminpage
                setNewadmin={setNewadmin}
                adminEmail={admin.email}

              />
            }>

            </Route>
              :
              <Route path="/admin" element={<Admin setNewadmin={setNewadmin} />}></Route>
          }
          <Route path="/admin" element={<Admin setNewadmin={setNewadmin} />}></Route>
          <Route exact path="/homeadmin" element={<Adminpage
            setNewadmin={setNewadmin}
            adminEmail={admin.email}

          />
          }>

          </Route>
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
      {/* COurses Category Routes */}

      <Route path="/art" element={
            user && user._id ? (
              <ArtPage
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
          <Route path="/buisness" element={
            user && user._id ? (
              <BusinessAdministrationPage
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

          <Route path="/computer" element={
            user && user._id ? (
              <ComputerPage
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

          <Route path="/graphic" element={
            user && user._id ? (
              <GraphicPage
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

          <Route path="/health" element={
            user && user._id ? (
              <HealthPage
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

          <Route path="/history" element={
            user && user._id ? (
              <HistoryPage
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


          <Route path="/security" element={
            user && user._id ? (
              <InfoSecurityPage
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
          <Route path="/market" element={
            user && user._id ? (
              <MarketingPage
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
          <Route path="/music" element={
            user && user._id ? (
              <MusicPage
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

          <Route path="/software" element={
            user && user._id ? (
              <SEPage
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

          <Route path="/UI" element={
            user && user._id ? (
              <UIUXPage
                setLoginUser={setLoginUser}
                Username={user.name}
                Email={user.email}
                userid={user._id}
              />
            ) : (
              <Navigate replace to="/" />
            )
          }>
          </Route>

          <Route path="/web" element={
            user && user._id ? (
              <WebPage
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

          <Route path="/coursedetail" element={
            user && user._id ? (
              <CoursesDetailUI
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
          <Route path="/coursedetailse" element={
            user && user._id ? (
              <CourseDetailSE
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
          <Route path="/coursedetailw" element={
            user && user._id ? (
              <CourseDetailW
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
          <Route path="/musiccoursedetail" element={
            user && user._id ? (
              <MusicCoursesDetail
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

          <Route path="/marketingcoursedetail" element={
            user && user._id ? (
              <MarkCoursesDetail
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
          <Route path="/artcoursedetail" element={
            user && user._id ? (
              <ArtCoursesDetail
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
          <Route path="/buisnesscoursedetail" element={
            user && user._id ? (
              <BCoursesDetail
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

          <Route path="/computercoursedetail" element={
            user && user._id ? (
              <CSCoursesDetail
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
          <Route path="/graphiccoursedetail" element={
            user && user._id ? (
              <GCoursesDetail
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
          <Route path="/healthcoursedetail" element={
            user && user._id ? (
              <HealthCoursesDetailUI
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
          <Route path="/historycoursedetail" element={
            user && user._id ? (
              <HistoryCoursesDetail
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


          <Route path="/securitycoursedetail" element={
            user && user._id ? (
              <SecurCoursesDetail
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
<Route path="/Addcourse" element={<Addcourse />} />
        <Route path="/updtcourse" element={<Updcours />} />

















        </Routes>
      </div>

    </>
  );
}

export default App;
