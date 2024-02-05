import { useEffect, useState } from "react";
import "./QuizMain.css";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

function QuizMain() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("Choose Category");
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async () => {
    const response = await fetch(
      "https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json"
    );
    const result = await response.json();
    const grouped = Object.groupBy(result, (res) => res.topic);
    setCategories(Object.keys(grouped));
    setData(grouped);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Tech Trivia</h1>
      <h3 className="description">
        Are you ready to test your knowledge? Do you know a little about a lot?
        Put your skills to the test and see how much you really know with this
        quiz! Choose a category in which to play the Trivia Quiz from HTML, CSS
        and JS.
      </h3>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
          {category}
          <span>
            <AiFillCaretDown />
          </span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {categories.map((c) => (
              <div
                className="dropdown-item"
                key={c}
                onClick={() => {
                  setCategory(c);
                  setIsActive(false);
                }}
              >
                {c}
              </div>
            ))}
          </div>
        )}
      </div>

      {console.log(data[category])}

      <Link
        to="/quiz"
        state={{
          questions: data[category],
        }}
      >
        <button className="btn">Start Quiz</button>
      </Link>
    </div>
  );
}

export default QuizMain;
