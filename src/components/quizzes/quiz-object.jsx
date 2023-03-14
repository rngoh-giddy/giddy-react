import React from 'react';
import QuizAnswer from './quiz-answer';
import TestQuiz from './test-quiz';
import { useState, useEffect } from 'react';

function Quiz() {
    //*Index used for keeping track of current question
    const [currentIndex, setcurrentIndex] = useState(0)
    
    //* Current quiz
    const questions = TestQuiz.questions;
    //* Array of possible answers
    let ansList = [];
    
    //* Current question object
    let currentQuestion =  questions[currentIndex]; 
    
    //* State that determins if answer has been selected, allowing user to continue
    let [checked, setChecked] = useState(false);

    //* Checks is user can go to next question
    const handleChange = (childChecked) => { setChecked(childChecked()) }

    //* Resets checked status on re-render
    useEffect(() => {
        setChecked(false);
    },[currentIndex])
    

    //* Fill out possible answers
    for(let i = 0; i < currentQuestion?.options.length; i++){
        ansList.push(
            <QuizAnswer id={i} 
            key={i}
            name={`quiz-ans-${currentIndex}`} 
            value={currentQuestion.options[i]} 
            body={currentQuestion.options[i]} 
            handleChange={handleChange}/>
        )
    }

    //* Goes to next question
    function increaseIndex() {
        setcurrentIndex(function (prevIndex) {
            return (prevIndex += 1);
        });
    }

    //* Goes to previous question
    function decreaseIndex() {
        setcurrentIndex(function (prevIndex) {
            return (prevIndex -= 1);
        });
    }

    return (  
        <>
            <div className='border-1 m-auto w-50 bg-dark bg-opacity-25'>
                <h2>{currentQuestion?.text}</h2>
                <div className="d-flex flex-column gap-2 mb-3">
                    {ansList}
                </div>

                <div className="d-flex justify-content-between">
                    { currentIndex > 0 && <button onClick={decreaseIndex} className='p-2 bg-danger d-inline-block'>Prev Question</button> }
                    <button onClick={increaseIndex} disabled={!checked} className='p-2 bg-primary d-inline-block'>Next Question</button>
                </div>
            </div>
        </>
    );
}

export default Quiz;