import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Edit from './Edit';
import EditQuestion from './EditQuestion';
export default function Showall() {
    const [result, setResult] = useState();
    const [x, setX] = useState(false)
    const [view, setView] = useState(false)
    const [data, setData] = useState()
    const [isEditQuestion,setIsEditQuestion]= useState(false)
    const [question,setQuestion] = useState()
    const [score,setScore] = useState();
    const [questionId,setQuestionId] = useState();
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
    async function editAnswer(id,question_id,option_id)
    {

    }
    async function editOption(id,question_id,text)
    {
        console.log(id,question_id,text)
    }
    async function editQuestion(question,score)
    {
        console.log(question,score,questionId)

        setQuestion();
        setScore();
        setQuestionId();
        setIsEditQuestion(false);
    }
    function handleEdit(id,question,score)
    {
      
        setQuestion(question);
        setScore(score);
        setQuestionId(id);
        setIsEditQuestion(true);
    }
    return (
        <div>
            <table className='table'>
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
                                    <button className='btn btn-outline btn-accent mr-4' onClick={()=>handleEdit(data.id,data.question,data.score)}>Edit</button>
                                    <button className='btn btn-outline btn-warning' onClick={() => deleteQuestion(data.id)}>Delete</button></td>


                            </tr>

                        ))

                    }
                </tbody>
            </table>
            {isEditQuestion&&<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                <EditQuestion question={question} score={score} editQuestion={editQuestion} isEditQuestion={setIsEditQuestion} />
                </div>}
            {view && (
                <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
                    <Edit data={data} view={setView} delOption={deleteOption} submitEditAnswer={editAnswer} editOption={editOption}/>

                </div>
            )}
        </div>
    )
}
