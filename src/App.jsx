import Login from "./components/loginpage/Login"
import Register from "./components/loginpage/Register"

import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import UserProfile from "./components/loginpage/UserProfile"
import { createContext, useContext, useEffect, useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Leaderboard from "./components/leaderboard/Leaderboard"
import Refreshtoken from "./components/loginpage/Refreshtoken"
import Notfound from "./components/Notfound"
import Test from "./components/test/Test"
export const loginContext = createContext()
import Create from "./components/admin/Create"
import Showall from "./components/admin/Showall"
import AddQuestion from "./components/admin/AddQuestion"
function App() {
 
        const [loggedin,setLoggedin] = useState();
  useEffect(()=>{
  if(localStorage.getItem('user_auth_access_token'))
  {
    setLoggedin(true)
  
    setInterval(Refreshtoken,180000)
    
  }
  },[])
  
 

  return (
    <div>
      <loginContext.Provider value={[loggedin,setLoggedin]}>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route element={<Create/>} path="/admin/question"/>
        <Route element={<Showall/>} path="/admin/questionall"/>
      <Route element={<AddQuestion/>} path="/admin"/>
      <Route element={loggedin?<Test />:<Notfound />} path="/mcq" />     
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

