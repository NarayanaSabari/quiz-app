import { useState } from "react";
import QuestionBox from "./QuestionBox";
import Data from "../questions";
import Result from "./Result";

const questions = Data;

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [theamColor, setTheamColor] = useState(true);
  const [theamName, setTheamName] = useState("Light");

  const theam = () => {
    const mainColor = theamColor ? "#ffffff" : "#000000";
    const supportColor = theamColor ? "#000000" : "#ffffff";

    document.documentElement.style.setProperty("--main", mainColor);
    document.documentElement.style.setProperty("--support", supportColor);
    document.documentElement.style.setProperty("--highlight", supportColor);
    setTheamColor(!theamColor);
    if (theamColor) {
      setTheamName("Dark");
    } else {
      setTheamName("Light");
    }
    console.log(theamColor);
  };

  const setHighlight = (isHighlighted) => {
    const highlightColor = isHighlighted
      ? "#FF0000"
      : theamColor
      ? "#ffffff"
      : "#000000";
    document.documentElement.style.setProperty("--highlight", highlightColor);
  };

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      console.log(score);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <Result
        totalQuestions={questions.length}
        score={score}
        reset={resetQuiz}
        theam={theam}
        theamName={theamName}
      />
    );
  } else {
    return (
      <QuestionBox
        question={questions[currentQuestion]}
        handleOptionClick={handleOptionClick}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        theam={theam}
        theamName={theamName}
        setHighlight={setHighlight}
      />
    );
  }
};

export default QuizApp;
