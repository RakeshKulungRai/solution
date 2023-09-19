import React, { useState } from 'react'
import {FcGoogle}  from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs'
import { redirect,useNavigate} from "react-router-dom";
import axios from 'axios';
function Register() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,SetError] = useState();
    const navigate = useNavigate()
    async function  Create(e)
    {
            e.preventDefault()
           console.log("name,email,password")
      try{
        const result  = await axios.post('http://localhost:8000/auth/register',{"name":name,"email":email,"password":password})
        SetError()
        alert("successifully created");
        setName()
        setPassword()
        setEmail()
        navigate('/login')
       
      }
      catch(error){
        SetError(error.message)
      }
       
    }    
  return ( 
    <div className='flex-1 h-screen w-full items-center justify-center flex '>
    <div className='grid w-[400px] shadow gap-y-auto flex items-center justify-center rounded-md flex-col gap-4 py-8'>
      <div className='text-center text-xl'><strong>Solution</strong></div>
      <div className='block text-center' > <input type='text' className='input input-bordered w-full max-w-xs' placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/></div>
     <div className='block text-center' > <input type='text' className='input input-bordered w-full max-w-xs' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/></div> 
     <span className={` ${!error?'hidden':'block text-red-600'} `}>{error}</span>
     <div className='block text-center'><input type='password' className='input input-bordered w-full max-w-xs' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/></div> 
     
     <button className='text-white' onClick={Create}><div className='btn btn-primary'>
      Register</div> </button>
      <div><button onClick={()=>navigate('/login')} className='btn btn-active btn-link'>login</button></div>
      {/* <button className='hover:underline decoration-zinc-400'><div className='flex'><FcGoogle className='mt-1 text-center mr-2'/>Register in with google?</div></button>
      <button className='hover:underline decoration-zinc-400'><div className='flex'><BsFacebook className='mt-1 text-center mr-2'/> Register in with facebook?</div></button> 
       */}
      
   
    </div>
    </div>
  )
}

export default Register