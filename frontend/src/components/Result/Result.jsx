import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import "./Result.css";
import { useState } from "react";
const Result = ({ questions, result, restartQuiz }) => {
  const [getScores, setGetScores] = useState(null);
  const navigate = useNavigate();
  // parse the token to get the information
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const saveScore = async () => {
    if (!token) {
      toast({
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "error",
        title: "Please login first and take the quiz!",
        closeOnClick: false,
        closeButton: false,
      });
      navigate("/login");
    }

    try {
      await axios.post(
        "http://localhost:5000/result",
        {
          email: JSON.parse(user).data.email,
          score: result.score,
          category: questions[0].topic,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(JSON.parse(user));

      toast("🚀 Scores Saved Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "success",
        theme: "light",
        closeOnClick: false,
        closeButton: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const showScores = async () => {
    if (!token) {
      toast({
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeOnClick: false,
        closeButton: false,
        theme: "light",
        type: "error",
        title: "Please login first and take the quiz!",
      });
      navigate("/login");
    }

    console.log(JSON.parse(user).data.email);

    try {
      const {
        data: { data },
      } = await axios.post(
        "http://localhost:5000/result/show",
        {
          email: JSON.parse(user).data.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      setGetScores(data);

      toast("Scores Retrieved! ✨", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "success",
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(getScores);

  return (
    <>
      <div className="result">
        <h3 className="result-title">Result</h3>
        <div className="result-text">
          Total Questions: <span>{questions.length}</span>
        </div>
        <div className="result-text">
          Correct Answers: <span>{result.correctAnswers}</span>
        </div>
        <div className="result-text">
          Wrong Answers: <span>{result.wrongAnswers}</span>
        </div>
        <div className="result-text">
          Score: <span>{result.score}</span>
        </div>

        <div className="btn-wrapper">
          <div className="score-btn-wrapper">
            <button className="score-btn" onClick={() => navigate("/")}>
              Main Page
            </button>
          </div>
          <div className="score-btn-wrapper">
            <button className="score-btn" onClick={restartQuiz}>
              Try Again
            </button>
          </div>
        </div>

        <div className="btn-wrapper">
          <div className="score-btn-wrapper">
            <button onClick={saveScore} className="score-btn">
              Save Score
            </button>
          </div>

          <div className="score-btn-wrapper">
            <button onClick={showScores} className="score-btn">
              Show Scores
            </button>
            <ToastContainer
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                width: "500px",
              }}
            />
          </div>
        </div>

        <div className="table-score">
          {getScores && (
            <div className="score-card-wrapper">
              <h1 className="score-card-title">
                Latest Scores - {JSON.parse(user).data.username}
              </h1>
              <div className="score-card">
                <span>{JSON.parse(user).data.username}</span>
                <span>{getScores.score}</span>
                <span>{getScores.category}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Result.propTypes = {
  questions: PropTypes.array.isRequired,
  result: PropTypes.object.isRequired,
  restartQuiz: PropTypes.func.isRequired,
};

export default Result;
