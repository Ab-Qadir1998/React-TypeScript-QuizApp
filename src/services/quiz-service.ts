import {Quiz,QuizType} from '../type/quiz-type'

export const getQuiz = async (totalQuestions : number, level : string): Promise<QuizType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    const {results} = await res.json();
    const quiz:QuizType[] = results.map((questionObj : Quiz)=>{
        return {
            question: questionObj.question,
            answer : questionObj.correct_answer,
            correct_answer : questionObj.correct_answer,
            option: questionObj.incorrect_answers.concat(questionObj.correct_answer)
        }
    })
    return quiz
}