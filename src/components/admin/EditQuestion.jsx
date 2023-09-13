import React, { useState } from 'react'
import { RxCross2, RxDragHandleVertical } from 'react-icons/rx';
function EditQuestion({question,score,editQuestion,isEditQuestion}) {
    const [textheight, setTextheight] = useState('auto')
    const [text,setText] = useState(question);
    const [mark,setMark] = useState(score);
    function handleSubmit()
    {
        editQuestion(text,mark);
    }
    function hadleOnChange(e) {
        setText(e.target.value)
        setTextheight(`${e.target.scrollHeight}px`);
    }
  return (
    <div className="card  bg-base-100 shadow-xl p-16 pb-16 flex flex-col gap-4">
            <button onClick={() => isEditQuestion(false)} className='bg-white top-2 right-2 absolute'> <RxCross2  className='h-6 w-6'/></button>
        <label>Question</label>
    <textarea value={text} onChange={(e)=>(hadleOnChange(e))} className="textarea textarea-bordered textarea-md w-full max-w-xs" style={{height:textheight}}></textarea>
    <label>Score</label>
    <input type='number' value={mark} onChange={(e)=>setMark(e.target.value)} className="input input-bordered w-full max-w-xs" step={0.5}/>
    <button className='btn btn-outline btn-primary' onClick={handleSubmit}>Update</button>
  </div>
    )
}

export default EditQuestion