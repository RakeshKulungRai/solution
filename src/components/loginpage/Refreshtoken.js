import axios from 'axios'
export default async function Refreshtoken (){
    try
    {

       
       const token = localStorage.getItem('user_auth_refresh_token')
       const result  = await axios.post('http://localhost:8000/auth/refresh_token',{"token":`${token}`})
       localStorage.setItem('user_auth_access_token',result.data.access_token)
       return result
    }
    catch(error)
    {
        alert("Session Expired"); 
        localStorage.clear()
        window.location.replace("/login")
        return false
    }
}

