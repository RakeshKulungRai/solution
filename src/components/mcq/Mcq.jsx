import React, { useState } from 'react';
import { mcq } from '../question/question';
import Time from './Time';
import axios from 'axios';
export default function Mcq() {
    const [currentpage,SetCurrentpage] = useState(1)
    const page = 4
    const noofpage = mcq[0].questions.length
    const totalpage = Math.ceil(noofpage/page)
    const question = mcq[0].questions
    const currentindex=   (currentpage-1)*page
    const data= question.slice(currentindex,Math.min(currentindex+page,noofpage))
    async function QuestionAll()
    {
        const url ="http://localhost:8000/questions"
        try{
            const result = await axios (
                {
                    url,
                    method:'get',
                }
               
            )
            console.warn(result)
        }
        catch(error)
        {
             console.log(error.message)
        }
      }
    function Submit()
    {
        
    }
    return (
        <div>
            <div className='p-14'>
                <Time />
                {data.map((d, index) => (
                    <ul key={index}>
                        <li>{currentindex+index+1}. {d?.question} hi</li>
                        {d.options.map((option,i)=>(
                        <li key ={i} className='flex green m-2'>
                            <input type='radio' className='radio label-text' name={index+1+currentindex }/>{option}</li>
                        ))}
                       <br/>
                    </ul>
                ))}
            </div>
            <div>
                <button className={`mr-8 ${currentpage==1?'text-slate-500':''}`} disabled={currentpage==1?true:false} onClick={()=>{SetCurrentpage( currentpage -1)}}>prev</button>
                <button className={` ${currentpage==totalpage?'text-slate-500':''}`} disabled={currentpage==totalpage?true:false} onClick={()=>{SetCurrentpage( currentpage + 1)}}>next</button>

            </div>
           <button onClick={QuestionAll}>submit</button>
        </div>
    );
}
function Question({})
{
    return(
        <></>
    )
}