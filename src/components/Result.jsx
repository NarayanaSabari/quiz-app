import React from "react";
import "../App";

export default function Result({
  totalQuestions,
  score,
  reset,
  theam,
  theamName,
}) {
  return (
    <div className="boss">
      <nav>
        <h1>Kalvium</h1>
        <div className="theam hover" onClick={() => theam()}>
          {theamName}
        </div>
      </nav>
      <div className="questionSection">
        <div className="question">Final Result</div>
        <div className="question">
          {score} out of {totalQuestions} - ({(score / totalQuestions) * 100}%)
        </div>
        <div className="restart box-outline hover" onClick={() => reset()}>
          Restart
        </div>
      </div>
    </div>
  );
}
