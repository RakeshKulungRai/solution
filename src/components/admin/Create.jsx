import axios from 'axios';
import React, { useState } from 'react'

export default function Create() {
    const [question, setQuestion] = useState('');
    const [score, setScore] = useState(1);
    const [showOption, setshowOption] = useState(false);
    const [options, setOptions] = useState([])
    const [saveQuestion, setSaveQuestion] = useState(false)
    const [result, setResult] = useState();
    const [answer, setAnswer] = useState(false);
    const [value, setValue] = useState();
    async function SubmitQuestion() {
        try {
            const url = "http://localhost:8000/questions"
            console.log(question)
            const result = await axios(
                {
                    url,
                    method: "POST",
                    data: {
                        question: question,
                        score: score,
                        options: options.map((option) => ({ option }))
                    }
                }

            )
            setResult(result.data)
            setSaveQuestion(false);
            setQuestion('');
            setScore();
            setOptions([]);
            setshowOption(false);
            setAnswer(true);


        }
        catch (error) {
            console.error(error.message)
        }


    }
    async function submitAnswer(q_id, o_id) {

       if ((q_id !== null) && (o_id !==null))
       {
        try {
            const url = `http://localhost:8000/questions/${q_id}/create-answer`
            console.log(question)
            const result2 = await axios(
                {
                    url,
                    method: "POST",
                    data: {
                        question_id: q_id,
                        option_id: o_id
                    }
                }

            )
            setAnswer(false)


        }
        catch (error) {
            console.error(error.message)
        }
       }

    }
    function onAddOption(text) {

        if (text.length >= 1) {
            setshowOption(false);
            
            setOptions((prevOptions) => [...prevOptions, text]);

        }
        else{

        }

    }
    function save() {
        if ((question.length > 1) && (score > 0)) {
            setSaveQuestion(true)
        }

    }
    function cancel()
    {
        setSaveQuestion(false);
        setQuestion('');
        setScore();
        setOptions([]);
        setshowOption(false);
        setAnswer(true);
        setResult();
    }

    return <div className='text-lg m-16'>
        {saveQuestion&&<button className="btn btn-outline btn-error m-4" onClick={cancel}>Cancel </button>}
        <div className='flex'>
            {showOption && <Option onAdd={onAddOption} setshowOption={setshowOption} />}
            {saveQuestion && !showOption && <button onClick={() => { setshowOption(!showOption) }} className='rounded p-2  bg-add  ml-4 my-2'>add option</button>}
        </div>

        {answer && result?.options ? <div>
            <div className='block' >
                <div className='block mb-4'>Question: {result.question}</div>
               <div className='block'>Ans: <select name="option" onChange={(e) => setValue(e.target.value)} className='select select-success w-full max-w-xs' value={value}>
                    <option value=""></option>
                    {result?.options?.map((option, index) => (
                        <option value={option.id} key={index}>{option.option}</option>
                    ))}
                </select>
                </div>
                <button onClick={() => submitAnswer(result.id, value)} className='input input-bordered input-success  m-4 btn btn-accent'>Submit</button>

            </div>

        </div> :
            <>{saveQuestion ? <div className='text-lg '>
        <table className='table'>
        <thead>
      <tr>
        <th>Question</th>
        <th>Score</th>
        <th>Option</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    <tr>
    <td>{question}</td> 
    <td>{score}</td> 
    <td></td>
    <td><button onClick={() => setSaveQuestion(false)} className='bg-edit rounded p-1  h-16 w-20 mx-2'>Edit</button></td>
    </tr>
                {options?.map((data, index) => (
                    <tr key={index}>
                         <td></td>
                         <td></td>
                        <td>{data}</td>
                       
                        <td><button onClick={() => setOptions(options.filter((option) => option !== data))} className='btn btn-warning h-2'>delete</button></td>
                    </tr>
                ))
                }
                </tbody>
                </table>
                </div> : <div className='flex my-2'>
                <textarea name="" onChange={(e) => { setQuestion(e.target.value) }} placeholder='Write question' value={question} className='textarea textarea-success  block w-full max-w-xs mb-4'>
                </textarea>
                <input type="number" placeholder='score' onChange={(e) => setScore(e.target.value)} step={0.5} value={score} className=" input input-bordered input-success w-full max-w-xs  h-16 m-1 w-20 mx-2" />
                <button onClick={save} className='btn btn-success h-16 mt-1'>save</button>
            </div>
            }


            </>}
        {!showOption && saveQuestion && <button onClick={SubmitQuestion} className='input input-bordered input-success  m-4 btn btn-accent'>Submit</button>}
    </div>
}
function Option({ onAdd, setshowOption }) {
    const [option, setOption] = useState('')
    function saveOption() {
        onAdd(option);
        setOption('');
    }
    return <div className='flex'>
        <textarea onChange={(e) => {setOption(e.target.value) }} className='textarea textarea-success   w-full max-w-xs mb-4' placeholder='Add option'></textarea>
        <button onClick={()=>saveOption()} className='btn btn-info m-1 h-16 mx-2' >Save</button>
        <button onClick={() => { setshowOption(false) }} className='btn btn-warning h-16 m-1'>cancel</button>
        </div>
}