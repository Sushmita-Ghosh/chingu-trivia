import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./QuizQuestionContainer.css";
import { resultInitialState } from "../../contants";
import Result from "../Result/Result";

const QuizQuestionContainer = () => {
  const { state } = useLocation();

  const { questions } = state;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null); // to track if the answer is correct
  const [result, setResult] = useState(resultInitialState); // keep track of score
  const [showResult, setShowResult] = useState(false);
  const { question, answer, choices } = questions[currentQuestion];

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
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <Result
          questions={questions}
          result={result}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
};

export default QuizQuestionContainer;
