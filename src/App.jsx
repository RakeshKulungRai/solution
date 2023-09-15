import Login from "./components/loginpage/Login"
import Register from "./components/loginpage/Register"

import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import UserProfile from "./components/loginpage/UserProfile"
import { createContext, useEffect, useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Leaderboard from "./components/leaderboard/Leaderboard"
import Refreshtoken from "./components/loginpage/Refreshtoken"
import Notfound from "./components/Notfound"
import Test from "./components/test/Test"
export const loginContext = createContext()
import Showall from "./components/admin/Showall"
export const adminloginContext = createContext()
import axios from "axios"
import AdminLogin from "./components/admin/AdminLogin"

function App() {
  
        const [isadmin,setIsadmin] = useState(true);
        const [loggedin,setLoggedin] = useState(false);
  useEffect(()=>
  { 
   
    Refreshtoken()
    .then((result) => {
      if (result) {
        console.log("hi");
        setLoggedin(true);
      } else {
        console.log("bye");
        setLoggedin(false);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    
    
  },[])

   setInterval(() => {
    
      if(Refreshtoken())
      {
        setLoggedin(true)
      }
      else{
        setLoggedin(false)
      }

  }, 180000); 

  
 

  return (
    <div className="bg-base-200  h-screen ">
      <div className="bg-base-200 h-auto">
      <loginContext.Provider value={[loggedin,setLoggedin]}>
        <adminloginContext.Provider value={[isadmin,setIsadmin]}>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route element={<Showall/>} path="/admin/questionall"/>
      <Route element={<AdminLogin/>} path="/admin"/>
      <Route element={loggedin?<Test />:<Notfound />} path="/mcq" />     
      <Route element={loggedin?<UserProfile />:<Notfound />} path="/profile" />  
      <Route element={loggedin?<Leaderboard />:<Notfound />} path="/leaderboard" />
      <Route element={<Notfound />} path="*"/>
      <Route element={<Login />} path="/login" /> 
      <Route element={<Dashboard />} path ='/'/> 
      <Route element={<Register />} path="/register" /> 
      </Routes>  
    </BrowserRouter>
    </adminloginContext.Provider>
    </loginContext.Provider>
  </div>
    </div>
  )
}

export default App

