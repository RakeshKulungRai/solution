import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Question() {
    const [question, setQuestion] = useState('');
    const [score, setScore] = useState(0);
    const [showOption, setshowOption] = useState(false);
    const [options, setOptions] = useState([])
    const [saveQuestion, setSaveQuestion] = useState(false)
    const [result, setResult] = useState();
    const [answer, setAnswer] = useState(false);
    const [value,setValue] = useState();
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
            setOptions();
            setshowOption(false);
            setAnswer(true);


        }
        catch (error) {
            console.error(error.message)
        }


    }
    async function submitAnswer(q_id,o_id)
    {
        console.log(q_id,o_id)
        try {
            const url = `http://localhost:8000/questions/${q_id}/create-answer`
            console.log(question)
            const result2 = await axios(
                {
                    url,
                    method: "POST",
                    data: {
                        question_id:q_id,
                        option_id:o_id
                    }
                }

            )
          console.log(result2.data)
            setAnswer(false)


        }
        catch (error) {
            console.error(error.message)
        }
        
    }
    function onAddOption(text) {
        if (text.length > 1) {
            setOptions([...options, text]);
            setshowOption(false);

        }

    }
    function save() {
        console.log(score)
        if ((question.length > 1) && (score > 0)) {
            setSaveQuestion(true)
        }

    }
    
    return <div className='text-lg m-16'>
        {answer ? <div>
            <div className='block' >{result.question}
                <select name="option" onChange={(e)=>setValue(e.target.value)} className='select select-success w-full max-w-xs'>
                    {result?.options?.map((option, index) => (
                        <option value={option.id}>{option.option}</option>
                    ))}
                </select>
                <button onClick={()=>submitAnswer(result.id,value)}>Submit</button>

            </div>

        </div> : <>{saveQuestion ? <div className='text-lg '>{question} {score} <button onClick={() => setSaveQuestion(false)} className='btn btn-active btn-accent'>edit</button>
            {options?.map((data, index) => (
                <div key={index}>
                    <div>{data} <button onClick={() => setOptions(options.filter((option) => option !== data))} className='btn btn-warning'>delete</button></div> </div>
            ))}</div> : <div className=''>
            <textarea name="" onChange={(e) => { setQuestion(e.target.value) }} placeholder='Write question' value={question} className='textarea textarea-success  block w-full max-w-xs mb-4'>
            </textarea>
            <input type="number" placeholder='score' onChange={(e) => setScore(e.target.value)} step={0.5} value={score} className=" input input-bordered input-success w-full max-w-xs mr-4" /><button onClick={save} className='btn btn-success'>save</button>
        </div>
        }

            {saveQuestion && <button onClick={() => { setshowOption(!showOption) }} className='input input-bordered input-success w-full max-w-xs my-4'>add option</button>}
            {showOption && <Option onAdd={onAddOption} setshowOption={setshowOption} />}
            {!showOption && saveQuestion && <button onClick={SubmitQuestion} className='input input-bordered input-success w-full max-w-xs mr-4'>Submit</button>}</>
        }
    </div>
}
function Option({ onAdd, setshowOption }) {
    const [option, setOption] = useState('')
    function saveOption() {
        onAdd(option);
        setOption('');
    }
    return <div><textarea onChange={(e) => { setOption(e.target.value) }} className='textarea textarea-success  block w-full max-w-xs mb-4' placeholder='Add option'></textarea><button onClick={saveOption} className='btn btn-info my-4 mr-4' >Save</button><button onClick={() => { setshowOption(false) }} className='btn btn-warning'>cancel</button></div>
}