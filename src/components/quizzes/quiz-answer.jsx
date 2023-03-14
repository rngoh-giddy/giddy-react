import React from 'react'
import { useEffect, useRef } from 'react';

export default function QuizAnswer({id, name, body, value, handleChange}) {

    //* Allows user to grab element as dom object
    const btnRef = useRef()

    //* Tell parent (quiz-object) that an answer has been clicked, and they can go to the next question
    const setQuizAnswerChecked = () => { return true; };

    //* Function to allow user to click whole div to trigger click on button
    const checkButton = () => {
        btnRef.current.click();
    }

    //* Resets checked status on re-render
    //* Will only run when the name attr changes
    useEffect(() => {
        btnRef.current.checked = false;
    },[name])
    
    return ( 
        <>
            <div className='quiz-ans-block d-flex gap-2 p-2 rounded-3' onClick={checkButton}>
                <input type="radio" name={name} id={id} value={value} ref={btnRef} onChange={() => handleChange(setQuizAnswerChecked)} />
                <label htmlFor={name} className="text-slate-pro-regular">{body}</label>
            </div>
        </>
     );
}
