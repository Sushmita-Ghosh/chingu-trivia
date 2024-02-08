import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./QuizQuestionContainer.css";
import { resultInitialState } from "../../contants";
/* eslint-disable react/prop-types */
const QuizQuestionContainer = () => {
  const { state } = useLocation();

  const { questions } = state;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null); // to track if the answer is correct
  const [result, setResult] = useState(resultInitialState); // keep track of score
  const [showResult, setShowResult] = useState(false);
  const { question, answer, choices } = questions[currentQuestion];

  // console.log(questions[currentQuestion]);
  // console.log(Object.values(choices));

  // console.log(questions);

  const handleChoiceClick = (choice, index) => {
    setAnswerIdx(index);
    if (choices[answer] === choice) {
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  };

  const handleNextClick = () => {
    setAnswerIdx(null);

    setResult((prev) =>
      correctAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };

  return (
    <div className="quiz-question-container">
      {!showResult ? (
        <div className="question-container">
          <div className="question-title">
            <span className="active-question-number">
              Question {currentQuestion + 1}
            </span>
            <span className="total-question-number">/{questions.length}</span>
          </div>
          <h2 className="question">{question}</h2>

          <div className="choices-cointainer">
            {Object.values(choices).map((choice, index) => (
              <div
                className={`choice ${answerIdx === index ? "active" : ""}`}
                key={index}
                onClick={() => handleChoiceClick(choice, index)}
              >
                {choice}
              </div>
            ))}
          </div>

          <div className="next-question-btn-container">
            <button
              className="next-question-btn"
              onClick={handleNextClick}
              disabled={answerIdx === null}
            >
              {currentQuestion === questions.length - 1
                ? "Finish"
                : "Next Question"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3 className="result-title">Result</h3>
          <p className="result-text">
            Total Questions: <span>{questions.length}</span>
          </p>
          <p className="result-text">
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p className="result-text">
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <p className="result-text">
            Score: <span>{result.score}</span>
          </p>

          <div className="btn-container">
            <Link to="/">
              <button className="main-page-btn">Main Page</button>
            </Link>

            <button className="try-again-btn" onClick={restartQuiz}>
              {" "}
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestionContainer;
