import axios from 'axios'
import React from 'react'

function UserProfile() {
    const url = "http://localhost:8000/auth/me"
    async function Myprofile()
    {
        
        const result  = await axios
        (
            {
                url:url,
                method:'GET',
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('user_auth_access_token')}`
                }
            }
        )
        console.log(result.data)

    }
  return (
    <div>UserProfile
     <button onClick={Myprofile}> clik</button>
    </div>
  )
}

export default UserProfile