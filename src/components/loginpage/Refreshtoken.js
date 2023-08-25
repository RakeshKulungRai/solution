import axios from 'axios'
import { useContext } from 'react'
import { loginContext } from '../../App'

export const Refreshtoken = async() => {
    const [loggedin,setLoggedin] = useContext(loginContext)
    try
    {

       if(loggedin){ 
        const token = localStorage.getItem('user_auth_refresh_token')
       const result  = await axios.post('http://localhost:8000/auth/refresh_token',{"token":`${token}`})
       localStorage.setItem('user_auth_access_token',result.data.access_token)
    }
       
    }
    catch
    {
        setLoggedin(false)
        alert("Session Expired"); 
        localStorage.clear()
        window.location.replace("/login")
    }
}

