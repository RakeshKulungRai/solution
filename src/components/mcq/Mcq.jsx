import React, { useState, useEffect } from 'react';

import Time from './Time';
import axios from 'axios';

export default function Mcq() {
    const [question, setQuestion] = useState();
    useEffect(() => {
        getAll();
        async function getAll() {
            const url = "http://localhost:8000/questions"
            const result = await axios({
                url,
                method: "get"
            })
            setQuestion(result.data)
        }

    }, [])
    const [currentpage, SetCurrentpage] = useState(1)
    const page = 4
    const noofpage = question?.length
    const totalpage = Math.ceil(noofpage / page)
    const currentindex = (currentpage - 1) * page
    const result = question?.slice(currentindex, Math.min(currentindex + page, noofpage))

    function Submit() {

    }
    return (
        <div className="p-auto text-xl px-12 shadow">

            <div className='text-md flex-1 justify-center items-center'>
                <div className='top-16 sticky w-full  px-16  h-16 shadow p-2 bg-base-300'>
                    <div className='flex-1 justify-center'>
                    <div className="float-left pt-2"> <Time /></div>
                    <div className="float-right ml-8">
                        <button className={`join-item btn  ${currentpage == 1 ? 'text-slate-500' : ''}`} disabled={currentpage == 1 ? true : false} onClick={() => { SetCurrentpage(currentpage - 1) }}>Prev</button>
                        <button className={`join-item btn  ${currentpage == totalpage ? 'text-slate-500' : ''}`} disabled={currentpage == totalpage ? true : false} onClick={() => { SetCurrentpage(currentpage + 1) }}>Next</button>
                    </div>
                    <button onClick={Submit} className='float-right btn btn-outline btn-success  '>submit</button>
                    </div>
                </div>
                <div className='overflow-y-hidden ml-64 flex-1 bg-base-100 p-16' >
                    {
                        result?.map((question, index) => (
                            <div className='my-8' key={index}>
                                <Question id={question.id} question={question.question} options={question.options} />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <div className='absolute bottom-2 right-2'>
                <button className={` ${currentpage == 1 ? 'text-slate-500' : ''}`} disabled={currentpage == 1 ? true : false} onClick={() => { SetCurrentpage(currentpage - 1) }}>prev</button>
                <button className={` ${currentpage == totalpage ? 'text-slate-500' : ''}`} disabled={currentpage == totalpage ? true : false} onClick={() => { SetCurrentpage(currentpage + 1) }}>next</button>

            </div> */}

        </div>
    );
}
function Question({ question, id, options }) {
    return (
        <>
            <div className='my-4'>{id}. {question}</div>
            <ul key={id}>

                {options?.map((option, index) => (
                    <div className='ml-8' key={index}>
                        <input type="radio" name={id} key={index} className="radio radio-accent h-5 w-5" /> <span className=' '>{option.option}</span>
                    </div>
                ))

                }

            </ul>
        </>
    )
}