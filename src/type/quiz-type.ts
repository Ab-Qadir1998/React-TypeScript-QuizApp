import React from 'react'
export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuizType = {
    question: string
    answer: string
    option: string[]
}

export type quizPropsType = {
    question : string,
    options : string[],
    callback : (e:React.FormEvent<EventTarget>)=>void
}