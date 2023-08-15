import React from 'react';
import { CgShapeCircle } from 'react-icons/cg';
import { mcq } from '../question/question';

function Mcq() {
    return (
        <div>
            <div className='p-14'>
                {mcq[0].questions.map((d, index) => (
                    <ul key={index}>
                        <li>{index+1}. {d?.question} hi</li>
                        {d.options.map((option,i)=>(
                        <li key ={i} className='flex green pl-2'><CgShapeCircle className='mt-1' />{option}</li>
                        ))}
                       <br/>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Mcq;
