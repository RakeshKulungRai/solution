import React, { useState } from 'react'
import {FcGoogle}  from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs'
import { redirect } from 'react-router-dom';

function Login() {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
  return ( 
    <div className='grid w-[400px] py-2 h-[300px] bg-slate-300 gap-y-auto flex items-center justify-center ml-[300px] rounded-md'>
      <div className='text-center'><strong>Solution</strong></div>
     <div className='block text-center' > <input type='text' className='text-center h-[30px] rounded focus:outline-slate-200' placeholder='Username/Email' onChange={(e)=>{setEmail(e.target.value)}}/></div> 
     <div className='block text-center'><input type='password' className='text-center h-[30px] rounded focus:outline-slate-200' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/></div> 
     <div className='block  text-center bg-[blue] w-[400] rounded hover:bg-sky-700'>
      <button className='text-white' onClick={()=>{}}>Sign In</button></div> 
      <div className='block '>
        Don't have account?
        <button className='ml-1 text-slate-500 hover:underline decoration-zinc-400'> Create</button>
      </div>
      <div className='text-center'>OR</div>
      <button className='hover:underline decoration-zinc-400'><div className='flex'><FcGoogle className='mt-1 text-center mr-2'/>Sign in with google?</div></button>
      <button className='hover:underline decoration-zinc-400'><div className='flex'><BsFacebook className='mt-1 text-center mr-2'/> Sign in with facebook?</div></button> 
    </div>
  )
}

export default Login