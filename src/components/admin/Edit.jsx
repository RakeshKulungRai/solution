import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

export default function Edit({ data, view, delOption, submitEditAnswer, editOption }) {
    const [question, setQuestion] = useState(data.question)
    const [optionvalue, setOptionvalue] = useState('');
    const [editIndex, setEditIndex] = useState();
    const [isAnswerEdit, setIsAnswerEdit] = useState(false);
    const [answer, setAnswer] = useState(data.answer.option_id)


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
    return <div className="card  bg-base-100 shadow-xl table w-full ">
        <div className="card-body">
            <button onClick={() => view(false)} className='bg-white top-2 right-2 absolute'> <RxCross2 className='h-6 w-6' /></button>
            <label>Question</label>
            <p>{question}</p>
            <div className="">
                <button>Add Option</button>
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

    </div>
}


