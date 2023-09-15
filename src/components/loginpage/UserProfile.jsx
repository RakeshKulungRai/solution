import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { loginContext } from '../../App'
import Refreshtoken from './Refreshtoken'
import { useNavigate } from 'react-router-dom'
function UserProfile() {
    const url = "http://localhost:8000/auth/me"
    const [userdetail,setUserdetail] = useState()
    const [loggedin,setLoggedin] = useContext(loginContext)
    const navigate = useNavigate()
    useEffect(()=>{
        Profile()
    },[])
    async function Profile (){
        try{
           
                const result  =  await axios
                (
                    {
                        url:url,
                        method:'GET',
                        headers:{
                            Authorization:`Bearer ${localStorage.getItem('user_auth_access_token')}`
                        }
                    }
                )
                setUserdetail(result?.data)
                setLoggedin(true)
        }
        catch(error){
            console.log(error.message)
            if (loggedin)
            {
                Refreshtoken()
                return navigate('/profile')
            }
            else
            {
                return navigate('/login')
            }
            
            
        }
        
    }
    
  return (
    <div>
    <div className='block'>UserProfile</div>
        <div>Name : {userdetail?.name}</div>
        <div>Email : {userdetail?.email}</div>
        <div>Join on : {userdetail?.created_at}</div>
    </div>
  )
}

export default UserProfile