import axios from 'axios'

export const Refreshtoken = async() => {
    try{
        const token = localStorage.getItem('user_auth_refresh_token')
    const result  = await axios.post('http://localhost:8000/auth/refresh_token',{"token":`${token}`})
    localStorage.setItem('user_auth_access_token',result.data.access_token)
    }
    catch
    {
        setTimeout(function() { alert("Session Expired"); }, 2000)
        localStorage.clear()
        
    }
}

