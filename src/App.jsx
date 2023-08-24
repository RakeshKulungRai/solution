import Login from "./components/loginpage/Login"
import Register from "./components/loginpage/Register"

import Mcq from "./components/mcq/Mcq"
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import UserProfile from "./components/loginpage/UserProfile"
import {refresh_token} from "./components/loginpage/Refreshtoken/"
import { useState } from "react"
function App() {
  const [islogin,SetIslogin] = useState(false)
  setInterval(refresh_token,60000)
  return (
    <div>
      <div>Navbar</div>
      <BrowserRouter> 
      <Routes>
      <Route element={<Dashboard />} path ='/'/>
      <Route element={<Login />} path="/login" />      
      <Route element={<Mcq />} path="/mcq" />  
      <Route element={<Register />} path="/register" />    
      <Route element={<UserProfile />} path="/profile" />  
      </Routes>  
    </BrowserRouter>
    </div>
  )
}

export default App
