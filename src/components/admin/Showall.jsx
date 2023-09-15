import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Edit from './Edit';
import EditQuestion from './EditQuestion';
import Create from './Create';
export default function Showall() {
    const [allData, setAllData] = useState()
    const [x, setX] = useState(false)
    const [view, setView] = useState(false)
    const [data, setData] = useState()
    const [isEditQuestion, setIsEditQuestion] = useState(false)
    const [isAddNew, setIsAddNew] = useState(false)
    const [question, setQuestion] = useState()
    const [score, setScore] = useState();
    const [questionId, setQuestionId] = useState();

    useEffect(() => {
        getAll();
        async function getAll() {
            const url = "http://localhost:8000/questions"
            const result = await axios({
                url,
                method: "get"
            })
            setAllData(result.data)
        }

    }, [x])

    const [currentpage, SetCurrentpage] = useState(1)
    const page = 7
    const noofpage = allData?.length
    const totalpage = Math.ceil(noofpage / page)
    const currentindex = (currentpage - 1) * page
    const result = allData?.slice(currentindex, Math.min(currentindex + page, noofpage))
    let arr1 = []   
    let arr2 = []
    let arr =[]
    async function deleteQuestion(id) {
        const url1 = `http://localhost:8000/questions/${id}`
        const result = await axios({
            url: url1,
            method: "delete"
        })
        setX(!x)
    }
    async function deleteOption(id) {
        const url2 = `http://localhost:8000/questions/option/${id}`
        const result = await axios({
            url: url2,
            method: "delete"
        })
        setX(!x)
    }
    async function editAnswer(id, question_id, option_id) {

    }
    async function editOption(id, question_id, text) {
        console.log(id, question_id, text)
    }
    async function editQuestion(question, score) {
        console.log(question, score, questionId)

        setQuestion();
        setScore();
        setQuestionId();
        setIsEditQuestion(false);
    }
    function handleEdit(id, question, score) {

        setQuestion(question);
        setScore(score);
        setQuestionId(id);
        setIsEditQuestion(true);
    }
    
    arr1 = Array.from({ length: Math.min(2,totalpage-1-currentpage)}, (_,index) =>currentpage+ index +1)
    arr2 = Array.from({ length: Math.min(2,currentpage-1)}, (_,index) =>currentpage- index  )
    arr2.reverse()
    arr = arr2.concat(arr1)
   
    return (
        <div >
            
            <div className=' overflow-y-auto flex float-right mr-32 my-4'>
            <div className=''>
                 <button className='btn btn-outline btn-success' onClick={() => setIsAddNew(true)}>Add New</button>
            </div>

            <div className="join ml-8">
                <button className="join-item btn" disabled={currentpage == 1 ? true : false} onClick={() => { SetCurrentpage(currentpage - 1) }}>«</button>
                <button className={`join-item btn ${currentpage===1 &&totalpage !==1 && 'bg-neutral-content'}`} onClick={()=>SetCurrentpage(1)} >1</button>
                {/* {arr2?.map((value,index)=>(
                    
                    <button key={index} className={`join-item btn ${currentpage===value && 'bg-neutral-content'}`} onClick={()=>SetCurrentpage(value)}>{value}</button>
                ))}
                {arr1?.map((value,index)=>(
                    
                    <button key={index} className={`join-item btn ${currentpage===value && 'bg-neutral-content'}`} onClick={()=>SetCurrentpage(value)}>{value}</button>
                ))
                } */}
                {arr[0]>2&&<button className="join-item  disabled">...</button>
                }
                {arr?.map((value,index)=>(
                    
                    <button key={index} className={`join-item btn ${currentpage===value && 'bg-neutral-content'}`} onClick={()=>SetCurrentpage(value)}>{value}</button>
                ))}
                {/* {totalpage >=5&& currentpage>3  && [-2,-1,0,1,2].map((value,index)=>
                    (
                        <button className={`join-item btn ${currentpage===currentpage+value && 'bg-neutral-content'}`} key={index}>{currentpage + value}</button>
                        
                    ))
                } */}
                 {arr[arr.length-1]<totalpage-1&&<button className="join-item  disabled">...</button>
                }
                <button className={`join-item btn ${currentpage===totalpage && 'hidden'}`} onClick={()=>SetCurrentpage(totalpage)}>{totalpage}</button>

                {/* <button className="join-item btn">Page 22</button> */}
                <button className="join-item btn" disabled={currentpage == totalpage ? true : false} onClick={() => { SetCurrentpage(currentpage + 1) }}>»</button>
            </div>
            </div>
            <div >
                {/* <div className='flex-1 flex item-center justify-center w-full shadow '></div> */}
                <table className='table shadow  flex-1 flex item-center justify-center w-full shadow'>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Score</th>
                            <th>Options & Answer</th>
                            <th>Action Delete</th>
                        </tr>
                    </thead>

                    <tbody >
                        {
                            result?.map((data, index) => (

                                <tr key={index}>
                                    <td> {data.question}</td>
                                    <td>{data.score}</td>
                                    <td><button className='btn btn-outline btn-info' onClick={() => {
                                        setView(!view);
                                        setData(data)
                                    }} >View </button>
                                    </td>
                                    <td>
                                        <button className='btn btn-outline btn-accent mr-4' onClick={() => handleEdit(data.id, data.question, data.score)}>Edit</button>
                                        <button className='btn btn-outline btn-warning' onClick={() => deleteQuestion(data.id)}>Delete</button></td>


                                </tr>

                            ))

                        }
                    </tbody>
                </table>
                {isEditQuestion && <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                    <EditQuestion question={question} score={score} editQuestion={editQuestion} isEditQuestion={setIsEditQuestion} />
                </div>}
                {view && (
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
                        <Edit data={data} view={setView} delOption={deleteOption} submitEditAnswer={editAnswer} editOption={editOption} />

                    </div>
                )}
                {isAddNew && (
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
                        <Create isAddNew={setIsAddNew} />

                    </div>
                )}

            </div>
           
            {/* <div className=''>
                <button className={` ${currentpage == 1 ? 'text-slate-500' : ''}`} disabled={currentpage == 1 ? true : false} onClick={() => { SetCurrentpage(currentpage - 1) }}>prev</button>
                <button className={` ${currentpage == totalpage ? 'text-slate-500' : ''}`} disabled={currentpage == totalpage ? true : false} onClick={() => { SetCurrentpage(currentpage + 1) }}>next</button>

            </div> */}
        </div>
    )
}
