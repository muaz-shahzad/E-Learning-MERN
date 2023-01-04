import logo from './logo.svg';
import './App.css';
import Homepage from './Components/HomePage/Homepage'
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Navigate
} from "react-router-dom";
import { useState } from 'react'
import Admin from './Components/Admin/Admin';
import HomeAdmin from './Components/HomeAdmin/HomeAdmin';
import Header from './Components/Client/Header/Header';
import Home from './Components/Client/Home/Home';
import Head from './Components/Client/Head/Head';

import AboutPage from './Components/Pages/AboutPage';
import Contactus from './Components/Client/ContactUs/Contactus';
import TeamP from './Components/Client/Team/TeamP';

function App() {
  const [user, setLoginUser] = useState({})
  const [admin, setadmin1] = useState({})
  // alert(admin)



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
            admin && admin._id ? <Route exact path="/homeadmin" element={<HomeAdmin />}></Route>
              :
              <Route path="/admin" element={<Admin setadmin1={setadmin1} />}></Route>
          }
          <Route path="/admin" element={<Admin setadmin1={setadmin1} />}></Route>
          <Route exact path="/homeadmin" element={<HomeAdmin />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/contact" element={
            user && user._id ? (
              <Contactus
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
          />
          <Route path="/aboutpage" element={
            user && user._id ? (
              <AboutPage
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
          />
          <Route path="/team" element={
            user && user._id ? (
              <TeamP
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
