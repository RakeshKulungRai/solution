import Login from "./components/loginpage/Login"
import Register from "./components/loginpage/Register"

import Mcq from "./components/mcq/Mcq"
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
function App() {

  return (
    <div>
      <div>Navbar</div>
      <BrowserRouter> 
      <Routes>
      <Route element={<Dashboard />} path ='/'/>
      <Route element={<Login />} path="/login" />      
      <Route element={<Mcq />} path="/mcq" />  
      <Route element={<Register />} path ="/register" />    
      </Routes>  
  </BrowserRouter>
    </div>
  )
}

export default App
