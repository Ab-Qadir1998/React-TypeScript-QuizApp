import React, { useState } from 'react'
import {  quizPropsType } from '../type/quiz-type'
import '../App.css'


const QuizCard: React.FC<quizPropsType> = ({
    question,
    options,
    callback
}) => {
    let [selected, setSelected] = useState("");
    const handleSelection = (ev: any) => {
        setSelected(ev.target.value) 
    }
    return (
        <div className="container">

            <div className="questions">
                <h4>{question}</h4>
                <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e, selected)}>
                    {
                        options.map((opt: string, index: number) => {
                            return (
                                <div key={index}>
                                    <label>
                                        <input required type="radio" name="quiz" checked={selected === opt} value={opt} onChange={handleSelection}/>
                                        {opt}
                                    </label>
                                </div>
                            );
                        })
                    }
                    <input type="submit" className="submit"/>
                </form>
            </div>
        </div>
    )
}

export default QuizCard