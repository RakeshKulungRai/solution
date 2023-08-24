import Login from "./components/loginpage/Login"
import Register from "./components/loginpage/Register"

import Mcq from "./components/mcq/Mcq"
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import UserProfile from "./components/loginpage/UserProfile"
import { useEffect, useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Leaderboard from "./components/leaderboard/Leaderboard"
import {Refreshtoken} from "./components/loginpage/Refreshtoken"
import Notfound from "./components/Notfound"
function App() {
  const [login,setLogin] = useState(false)
  { (localStorage.getItem('user_auth_refresh_token'))?
    setInterval(Refreshtoken,1800000):""}

  return (
    <div>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
      <Route element={<Mcq />} path="/mcq" />     
      <Route element={<UserProfile />} path="/profile" />  
      <Route element={<Leaderboard />} path="/leaderboard" />
      <Route element={<Notfound />} path="*"/>
     
      <Route element={<Login />} path="/login" /> 
      <Route element={<Dashboard />} path ='/'/> 
      <Route element={<Register />} path="/register" /> 
      </Routes>  
    </BrowserRouter>
    </div>
  )
}

export default App
