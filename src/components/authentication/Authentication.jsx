import React, { useEffect,useState } from 'react'
import axios from 'axios';
function Authentication() {    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('user_auth'))        
    },[])
    async function  Login()
    {
        const result  = await axios.post('http://localhost:8000/auth/login',{email:'rakeshkulung@gmail.com',password:'admin'})
        localStorage.setItem('user_auth',JSON.stringify(result.data))
    }
    
  return (
    <div>
        <button onClick={Login}>Login</button>
    </div>
  )
}

export default Authentication