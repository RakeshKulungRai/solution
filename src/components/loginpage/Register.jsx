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
    <div className='grid w-[400px] py-2 h-[300px] bg-slate-300 gap-y-auto flex items-center justify-center ml-[300px] rounded-md'>
      <div className='text-center'><strong>Solution</strong></div>
      <div className='block text-center' > <input type='text' className='text-center h-[30px] rounded focus:outline-slate-200' placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/></div>
     <div className='block text-center' > <input type='text' className='text-center h-[30px] rounded focus:outline-slate-200' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/></div> 
     <span className={` ${!error?'hidden':'block text-red-600'} `}>{error}</span>
     <div className='block text-center'><input type='password' className='text-center h-[30px] rounded focus:outline-slate-200' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/></div> 
     
     <button className='text-white' onClick={Create}><div className='block  text-center bg-[blue] w-[400] rounded hover:bg-sky-700'>
      Register</div> </button>
      <div><button onClick={()=>navigate('/login')}>login</button></div>
      <button className='hover:underline decoration-zinc-400'><div className='flex'><FcGoogle className='mt-1 text-center mr-2'/>Register in with google?</div></button>
      <button className='hover:underline decoration-zinc-400'><div className='flex'><BsFacebook className='mt-1 text-center mr-2'/> Register in with facebook?</div></button> 
    </div>
  )
}

export default Register