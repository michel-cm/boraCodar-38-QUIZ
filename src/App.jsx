import { useState } from "react";
import { Header } from "./components/Header";
import { QuestionSection } from "./components/QuestionSection";
import { questions } from './data.js';

const INITIAL_SCORE = 0;

export function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [score, setScore] = useState(INITIAL_SCORE);

  const { question, options, correctAnswers } = questions[currentQuestion];

  const handleOptionClick = (index) => {
    setSelectAnswerIndex(index);
  }

  return (
  <div className="flex flex-col h-full pt-[62px] max-w-[842px] m-auto gap-[69px]">
    <Header correctAnswers={score} />

    <main>
      <QuestionSection 
        question={question} 
        options={options} 
        correctAnswer={correctAnswers} 
        selectAnswerIndex={selectAnswerIndex}
        handleOptionClick={handleOptionClick}
      />
    </main>
  </div>
  )
}

