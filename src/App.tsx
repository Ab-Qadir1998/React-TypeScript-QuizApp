import React,{ useEffect, useState } from 'react';
import { getQuiz } from './services/quiz-service'
import { Quiz, QuizType } from './type/quiz-type'
import QuizCard from './components/QuizCard'
function App() {
  let [ quiz, setQuiz ] = useState<QuizType[]>([]);
  let [ currentStep, setcurrentStep ] = useState(0);
  useEffect(()=>{
   async function fetchData () {
      const questions:QuizType[] = await getQuiz(10, 'easy');
      setQuiz(questions)
    }
    fetchData();
  },[])
  if(!quiz.length)
  return <h3>Loading...</h3>
  const handleSubmit = (e:React.FormEvent<EventTarget>)=> {
    e.preventDefault()
    setcurrentStep(++currentStep)
  }
  return (
    <div>
      <QuizCard
      options={quiz[currentStep].option}
      question={quiz[currentStep].question}
      callback={handleSubmit}
      />
    </div>
  );
}

export default App;
