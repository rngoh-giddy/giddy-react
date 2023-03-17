import React from 'react';
import QuizAnswer from './quiz-answer';
import { useState, useEffect } from 'react';

import "./style/quiz-style.css";

function Quiz({quizClass, targetQuiz}) {
    //*Index used for keeping track of current question
    const [currentIndex, setcurrentIndex] = useState(0)
    
    //* Current quiz
    const questions = targetQuiz;
    //* Array of possible answers
    let ansList = [];
    
    //* Current question object
    let currentQuestion =  questions[currentIndex]; 
    
    //* State that determines if answer has been selected, allowing user to continue
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
    let quizTheme = quizClass !== undefined ? quizClass:'blue';
    const classList = `${quizTheme} inline-quiz rounded-3 my-5`

    return (  
        <>
            <div className={classList}>
                <h2>{currentQuestion?.text}</h2>
                <div className="d-flex flex-column gap-2 mb-3">
                    {ansList}
                </div>

                <div className="d-flex justify-content-between">
                    <button onClick={decreaseIndex} disabled={(currentIndex === 0)?true:false} className='text-slate-pro-medium p-2 quiz-button quiz-button-prev d-inline-block'>Prev question</button>
                    <button onClick={increaseIndex} disabled={!checked} className='text-slate-pro-medium p-2 quiz-button quiz-button-next d-inline-block'>Next question</button>
                </div>
            </div>
        </>
    );
}

export default Quiz;