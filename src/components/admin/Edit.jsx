import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

export default function Edit({ data, view, delOption, submitEditAnswer, editOption,addOption }) {
    const [question, setQuestion] = useState(data.question)
    const [optionvalue, setOptionvalue] = useState('');
    const [editIndex, setEditIndex] = useState();
    const [isAnswerEdit, setIsAnswerEdit] = useState(false);
    const [answer, setAnswer] = useState(data.answer.option_id);
    const [isaddOption,setIsaddOption] = useState(false);


    function editAnswer() {
        setIsAnswerEdit(true)
    }
    function SubmitAnswer() {
        setIsAnswerEdit(!isAnswerEdit)
        submitEditAnswer(data.answer.id, answer, data.id)

    }
    function SubmitOption(id, option_id, text) {
        editOption(id, option_id, optionvalue)
        setEditIndex()
    }
    function handleOptionEdit(index, text) {
        setEditIndex(index)
        setOptionvalue(text)
    }
    function AddOption(text)
    {
        const question_id = data.answer.id
        addOption(question_id,text)

    }
    return <div className="card  bg-base-100 shadow-xl table w-full ">
        <div className="card-body">
            <button onClick={() => view(false)} className='bg-white top-2 right-2 absolute'> <RxCross2 className='h-6 w-6' /></button>
            <label>Question</label>
            <p>{question}</p>
            <div className="">
                <button className='btn btn-outline btn-success' onClick={()=>setIsaddOption(true)}>Add Option</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Options</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.options?.map((option, index) => (
                                <tr className="" key={index}>
                                    <td>{editIndex === index ?
                                        <textarea value={optionvalue} onChange={(e) => setOptionvalue(e.target.value)} className="textarea textarea-bordered textarea-xs w-full max-w-xs" /> : <>{option.option}</>}</td>
                                    <td>{editIndex === index ?
                                        <button className='btn btn-outline btn-primary' onClick={() => SubmitOption(data?.id, option.id, optionvalue)}>Update </button>
                                        : <button onClick={() => delOption(option.id)} className='btn btn-outline btn-warning' >Delete</button>}</td>
                                    <td><button onClick={() => handleOptionEdit(index, option.option)} className='btn btn-outline btn-accent' >Edit</button></td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                <label className=''>Answer</label>
                <div className='flex m-8'>
                    <div className='grow'>
                        {isAnswerEdit ? <select onChange={(e) => setAnswer(e.target.value)} className='select w-full max-w-xs ' value={answer}>
                            {data?.options?.map((option, index) => (
                                <option value={option.id} key={index} className='flex grow'>{option.option}</option>
                            ))}
                        </select>

                            : <>{data?.options?.find((option) => option.id === data.answer.option_id)?.option}</>}
                    </div>
                    <div className=''>
                        {(!isAnswerEdit) ? <button onClick={editAnswer} className='btn btn-outline btn-accent ' >Edit</button>
                            :
                            <button className='btn btn-outline btn-primary' onClick={SubmitAnswer}>Update </button>}
                    </div>
                </div>


            </div>

        </div>
        <div className='fixed flex-1 justify-center items-center bg-base-300 top-1 m-8'>{isaddOption&&<Option setIsaddOption={setIsaddOption} onsubmit={AddOption}/>}</div>
        What will be the output of
    </div>
}


function Option({setIsaddOption,onsubmit}) {
    const [option, setOption] = useState('')
    function SubmitOption() {
        setIsaddOption(false);
        onsubmit(option);
        setOption('');
    }

    return <div className='flex-rows gap-4 m-16 '>
        <textarea onChange={(e) => {setOption(e.target.value) }} className='textarea textarea-success block  w-full max-w-xs mb-4' placeholder='Add option'></textarea>
        <button onClick={()=>SubmitOption()} className='btn btn-success block w-full my-8' >Submit</button>
        <button onClick={() => { setIsaddOption(false) }} className='btn btn-outline btn-warning w-full'>cancel</button>
        </div>
}