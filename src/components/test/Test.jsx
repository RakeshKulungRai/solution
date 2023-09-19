import React, { useState } from 'react'
import Mcq from '../mcq/Mcq'
function Test() {
    const [mcq,setMcq] = useState(false)
    const [challenge_name,setChallenge] = useState(['This is the challenge one','This is challenge 2'])
    const [ischallenge,setIschallenge] = useState(false)
    function Challenge()
    {

    }
  return (
    <div className='m-12'>{!ischallenge&&
      challenge_name?.map((challenge,index)=>(
        <div className='grid grid-cols-2 justify-cente items-center gap-32 gap-y-32 mb-12 '  key={index}>
        <div >{challenge}</div>
        <div><button className='btn btn-outline btn-info' onClick={()=>setIschallenge(!ischallenge)}>Start</button></div>
      </div>
      ))
      }
      {/* <Mcq/> */}
        {ischallenge &&<Mcq/>}
        {/* <button onClick={()=>{setMcq(true)}} className={`${mcq?"hidden":"m-32 bg-green-500 text-white p-2 rounded" }`} >Start</button> */} 
    </div>
  )
}

export default Test