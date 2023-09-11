import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Showall() {
    const [result, setResult] = useState();
    const [x,setX] = useState(false)
    const [edit,setEdit] = useState(false)
    const [data,setData] = useState()
    useEffect(() => {
        getAll();
        async function getAll() {
            const url = "http://localhost:8000/questions"
            const result = await axios({
                url,
                method: "get"
            })
            setResult(result.data)
        }

    }, [x])
    async function deleteQuestion(id) {
        const url1 = `http://localhost:8000/questions/${id}`
            const result = await axios({
                url:url1,
                method: "delete"
            })
        setX(!x)
    }
    async function deleteOption(id) {
        const url2 = `http://localhost:8000/questions/option/${id}`
            const result = await axios({
                url:url2,
                method: "delete"
            })
            setX(!x)
    }
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Question</th>
                    <th>Score</th>
                    <th>Action Edit</th>
                    <th>Action Delete</th>
                    </tr>
                </thead>
               
                <tbody >
            {
            result?.map((data, index) => (
                
                    <tr key={index}>
                    <td> {data.question}</td> 
                    <td>{data.score}</td>
                    <td><button className='bg-edit rounded p-1 mx-2' onClick={()=>{setEdit(!edit);
                    setData(data)}} >Edit </button>
                   </td>
                     <td><button className='bg-delete p-1 rounded ' onClick={()=>deleteQuestion(data.id)}>Delete</button></td>
                    {/* <ul>
                        {data?.options?.map((option, ind) => (
                            <li key={ind} className="text-blue-500 bg-slate-100 rounded m-2 w-max flex">{option.option} 
                            <button className='bg-edit rounded p-1 mx-2'>Edit</button> 
                            <button className='bg-delete p-1 rounded ' onClick={()=>deleteOption(option.id)}>Delete</button>
                        </li>

                        )
                        )}
                        <li className='my-1'>Ans: {data?.options?.find((option) => option.id === data?.answer?.option_id)?.option}
                         <button className='bg-edit rounded p-1 mx-2'>Edit</button>
                         </li>
                    </ul> */}

                     </tr>
                  
            ))

        }
           </tbody>
        </table>
        {edit&&<div className='fixed top-0 right-32 modal'><Edit data={data} /></div>}
       </div>
    )
}
function Edit({data})
{
    console.log(data)
    const [question,setQuestion] = useState(data.question)
    const [options,setOptions] = useState(data.options)
    return <>
     <input value={question} onChange={(e)=>setQuestion(e.target.value)} />
     {
        data?.options?.map((option,index)=>(
            <div className="grid grid-cols-2 gap-4" key={index}>
                <input value={option.option} onChange={()=>setOptions()}/> <button onClick={()=>onDelete(option.id)} ></button>
            </div>
        ))
     }
    </>
}

