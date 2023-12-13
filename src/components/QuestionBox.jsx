import React from "react";
import "../App";

export default function QuestionBox({
  question,
  handleOptionClick,
  totalQuestions,
  currentQuestion,
  theam,
  theamName,
  setHighlight,
}) {
  return (
    <div className="boss">
      <nav>
        <h1>Kalvium</h1>
        <div className="theam hover" onClick={() => theam()}>
          {theamName}
        </div>
      </nav>
      <div className="questionBoss">
        <div className="questionSection">
          <div className="questionNo">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
          <div className="question">{question.text}</div>
          <div className="options">
            {question.options.map((option) => (
              <div
                key={option.id}
                className="box-outline hover"
                onClick={() => handleOptionClick(option.isCorrect)}
              >
                {option.text}
              </div>
            ))}
          </div>
          <div className="highlights">
            <div className="hover" onClick={() => setHighlight(true)}>
              Highlight
            </div>
            <div className="hover" onClick={() => setHighlight(false)}>
              Remove Highlight
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
