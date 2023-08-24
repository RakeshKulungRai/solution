import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link to="" className='mr-5'> Dashboard
        </Link>
        { (localStorage.getItem('user_auth_refresh_token'))?<div>
        <Link to ="mcq" className='mr-5'>Test</Link>
        <Link to ="leaderboard" className='mr-5'>Leaderboard</Link>
       
        <Link to="/profile" className='inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0'>Profile</Link>  </div>:
        <Link to="/login" className='inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0'>Login</Link> 
    }
    </div>
  )
}

export default Navbar