import React, { useState } from 'react'
import Mcq from '../mcq/Mcq'
function Test() {
    const [mcq,setMcq] = useState(false)
  return (
    <div>
        {mcq?<Mcq/>:''}
        <button onClick={()=>{setMcq(true)}} className={`${mcq?"hidden":"m-32 bg-green-500 text-white p-2 rounded" }`} >Start</button>
    </div>
  )
}

export default Test