import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./QuizQuestionContainer.css";
/* eslint-disable react/prop-types */
const QuizQuestionContainer = () => {
  const { state } = useLocation();

  const { questions } = state;

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const { question, answer, choices, id } = questions[currentQuestion];
  console.log(Object.values(choices));
  return (
    <div className="quiz-question-container">
      <div className="question-container">
        <div className="question-title">
          <span className="active-question-number">
            Question {currentQuestion}
          </span>
          <span className="total-question-number">/{questions.length}</span>
        </div>
        <h2 className="question">{question}</h2>

        <div className="choices-cointainer">
          {Object.values(choices).map((choice) => (
            <div className="choice" key={choice}>
              {choice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestionContainer;
