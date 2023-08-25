import Login from "./components/loginpage/Login"
import Register from "./components/loginpage/Register"

import Mcq from "./components/mcq/Mcq"
import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import UserProfile from "./components/loginpage/UserProfile"
import { createContext, useContext, useEffect, useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Leaderboard from "./components/leaderboard/Leaderboard"
import {Refreshtoken} from "./components/loginpage/Refreshtoken"
import Notfound from "./components/Notfound"
export const loginContext = createContext()
function App() {
  const [loggedin,setLoggedin] = useState();
  useEffect(()=>{
    if(localStorage.getItem('user_auth_access_token'))
  {
    setLoggedin(true)
  }
  })
  
  if (loggedin)
  {
    setInterval(Refreshtoken,1800000)
  }

  return (
    <div>
      <loginContext.Provider value={[loggedin,setLoggedin]}>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
      <Route element={loggedin?<Mcq />:<Notfound />} path="/mcq" />     
      <Route element={loggedin?<UserProfile />:<Notfound />} path="/profile" />  
      <Route element={loggedin?<Leaderboard />:<Notfound />} path="/leaderboard" />
      <Route element={<Notfound />} path="*"/>
      <Route element={<Login />} path="/login" /> 
      <Route element={<Dashboard />} path ='/'/> 
      <Route element={<Register />} path="/register" /> 
      </Routes>  
    </BrowserRouter>
    </loginContext.Provider>
    </div>
  )
}

export default App
