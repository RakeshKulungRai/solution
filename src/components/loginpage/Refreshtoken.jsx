import React, { useEffect } from 'react'
import axios from 'axios'
export const refresh_token =  (
    async ()=>{
        const token = localStorage.getItem('user_auth_refresh_token')
        const result  = await axios.post('http://localhost:8000/auth/refresh_token',{"token":`${token}`})
        localStorage.setItem('user_auth_access_token',result.data.access_token)
    }  )

