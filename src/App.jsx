import { useState } from "react";
import { Header } from "./components/Header";

const INITIAL_SCORE = 0;

export function App() {
  const [score, setScore] = useState(INITIAL_SCORE);

  return (
  <div className="flex flex-col h-full pt-[62px] max-w-[842px] m-auto gap-[69px]">
    <Header correctAnswers={score} />
  </div>
  )
}

