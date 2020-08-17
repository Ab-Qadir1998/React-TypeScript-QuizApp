import React,{ useEffect, useState } from 'react';
import { getQuiz } from './services/quiz-service'
import { Quiz, QuizType } from './type/quiz-type'
import QuizCard from './components/QuizCard'
function App() {
  let [ quiz, setQuiz ] = useState<QuizType[]>([]);
  let [ currentStep, setcurrentStep ] = useState(0);
  let [ score, setScore ] = useState(0);
  useEffect(()=>{
   async function fetchData () {
      const questions:QuizType[] = await getQuiz(10, 'easy');
      setQuiz(questions)
    }
    fetchData();
  },[])

  const handleSubmit = (e:React.FormEvent<EventTarget>, userAns: string)=> {
    e.preventDefault();

    const currentQuiz: QuizType = quiz[currentStep];
    console.log('correct ans:' + currentQuiz.correct_answer + '- - user Ans:' + userAns);
    
    if(userAns === currentQuiz.correct_answer){
      setScore(++score)
    }

    
    if(currentStep !== quiz.length-1)
    setcurrentStep(++currentStep);
    else{
      document.write("your score is :" + score + ' out of:' + quiz.length)
      setcurrentStep(0);
      setScore(0)
    }
  }

  if(!quiz.length)
  return <h3>Loading...</h3>

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
