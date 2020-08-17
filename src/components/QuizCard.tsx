import React from 'react'
import { Quiz, quizPropsType } from '../type/quiz-type'



const QuizCard:React.FC<quizPropsType> = ({
    question,
    options,
    callback
}) => {
    return (
        <div className="container">
            <div className="questions">
            {question}
            <form onSubmit={callback}>
                {
                    options.map((opt: string, index : number)=>{
                        return(
                            <div key={index}>
                                <label>
                                    <input type="radio" name="quiz" value={opt}/>
                                    {opt}
                                </label>
                            </div>
                        );
                    })
                }
                <input type="submit"/>
            </form>
            </div>
        </div>
    )
}

export default QuizCard