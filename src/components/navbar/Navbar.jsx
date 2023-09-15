import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { loginContext } from '../../App'

function Navbar() {
  const [loggedin,setLoggedin] = useContext(loginContext)
  function Logout()
    {
        alert('Logout Successifully')
        window.location.replace('/login')
        localStorage.clear()
        setLoggedin(false)

    }
  return (
    <div className="navbar bg-base-100 shadow sticky top-0">
    <div className="flex-1">
      <Link className="btn btn-ghost normal-case text-xl" to='/'>Dashboard</Link>
{loggedin&&<div className='text-center'>
<Link to ="mcq" className='mx-8 hover:btn'>Test</Link>
<Link to ="leaderboard" className='mx-8 hover:btn'>Leaderboard</Link>

  </div>
}</div>
{loggedin&&
    <div className="flex-none gap-2">
      {/* <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div> */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="../src/assets/readingbook.png" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <Link className="justify-between" to='/profile'>
              
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><a>Settings</a></li>
          <li><button onClick={Logout}>Logout</button></li>
        </ul>
      </div>
    </div>}
   {!loggedin&& <Link to="/login" className='inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0'>Login</Link> 
}
  </div>
  )
}

export default Navbar
{/* <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow'>
<Link to="" className='mr-5'> Dashboard
</Link>
{ loggedin?<div>
<Link to ="mcq" className='mr-5'>Test</Link>
<Link to ="leaderboard" className='mr-5'>Leaderboard</Link>

<Link to="/profile" className='inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0'>Profile</Link>  </div>:
<Link to="/login" className='inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0'>Login</Link> 
}
</div> */}