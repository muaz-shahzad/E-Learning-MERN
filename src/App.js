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



function App() {
  const [user, setLoginUser] = useState({})
  const [admin, setadmin] = useState({})



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
            path="/admin"
            element={
              admin && admin._id ? (
                <HomeAdmin
                  setadmin={setadmin}
                  Username={admin.name}
                  Email={admin.email}


                />
              ) : (
                <Admin setadmin={setadmin} />
              )
            }
          />
          {/* <Route path="/admin" element={<Admin />}></Route>
          <Route path="/homeadmin" element={<HomeAdmin />}></Route> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
