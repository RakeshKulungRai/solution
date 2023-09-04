import axios from 'axios'
export default async function Refreshtoken (){
    console.log("hll")
    try
    {

       
       const token = localStorage.getItem('user_auth_refresh_token')
       const result  = await axios.post('http://localhost:8000/auth/refresh_token',{"token":`${token}`})
       localStorage.setItem('user_auth_access_token',result.data.access_token)
       
    }
    catch(error)
    {
        alert("Session Expired"); 
        localStorage.clear()
        window.location.replace("/login")
        console.log(error)
    }
}

