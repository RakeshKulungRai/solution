import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { loginContext } from '../../App'
function UserProfile() {
    const [loggedin,setLoggedin] = useContext(loginContext);
    const url = "http://localhost:8000/auth/me"
    const [userdetail,setUserdetail] = useState()
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
        }
        catch{
            setLoggedin(false)
            localStorage.clear()
        }
        
    }
    function Logout()
    {
        alert('Logout Successifully')
        window.location.replace('/login')
    }
  return (
    <div>
    <div className='block'>UserProfile</div>
        <div>Name : {userdetail?.name}</div>
        <div>Email : {userdetail?.email}</div>
        <div>Join on : {userdetail?.created_at}</div>
     <button className='red-200' onClick={Logout} >Logout</button>
    </div>
  )
}

export default UserProfile