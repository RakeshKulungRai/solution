import React, { useContext, useState } from 'react'
import {FcGoogle}  from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginContext } from '../../App';
function Login() {
  const [loggedin,setLoggedin] = useContext(loginContext);
  const navigate = useNavigate()
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState()
    async function  Signin()
    {
      try{
        const result  = await axios.post('http://localhost:8000/auth/login',{"email":email,"password":password})
        localStorage.setItem('user_auth_access_token',result.data.access_token)
        localStorage.setItem('user_auth_refresh_token',result.data.refresh_token)
        setLoggedin(true)
        return navigate('/')
      }
      catch(error)
      {
        setLoggedin(false)
          setError(error.message)
      }
    }
  return ( 
    <div className='grid w-[400px] h-auto shadow gap-y-auto flex items-center justify-center ml-[300px] rounded-md flex-col gap-4 pb-5'>
      <div className='text-center text-xl'><strong>Solution</strong></div>
     <div className='block text-center' > <input type='text' className='input input-bordered w-full max-w-xs' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/></div> 
     <div className='block '><input type='password' className='input input-bordered w-full max-w-xs' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/></div> 
     <button className='btn btn-primary' onClick={Signin}>
      Sign In </button>
      <span className='text-red-300 relative z-1'>{error}</span>
      <div className='block text-center w-full'>
    
        Don't have account?
        <button className='ml-1 text-slate-500 hover:underline decoration-zinc-400' onClick={()=>navigate('/register')}> Create</button>
      </div>
      {/* <div className='text-center'>OR</div>
      <button className='hover:underline decoration-zinc-400'><div className='flex'><FcGoogle className='mt-1 text-center mr-2'/>Sign in with google?</div></button>
      <button className='hover:underline decoration-zinc-400'><div className='flex'><BsFacebook className='mt-1 text-center mr-2'/> Sign in with facebook?</div></button>  */}
    </div>
  )
}

export default Login