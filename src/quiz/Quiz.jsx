import React, { useEffect, useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [quesIdx, setQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOpion] = useState("");
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://dummyjson.com/c/3cbd-1cdb-462a-a286"
      );
      const data = await response.json();
      console.log(data);
      setQuestions(data);
    }
    fetchData();
  }, []);
  const handleNextQuestion = () => {
    if (selectedOption !== "") {
      if (selectedOption === questions[quesIdx].correct) {
        setScore((prev) => prev + 1);
      }
      if (quesIdx === questions.length - 1) {
        setQuizComplete(true);
      } else {
        setQuestionIdx((prev) => prev + 1);
        setSelectedOpion("");
      }
    } else {
      alert("Please select an option before proceeding!");
    }
  };

  const handleRestart = () => {
    window.location.reload();
  };
  if (quizComplete) {
    return (
      <div>
        <h1>Quiz Complete</h1>
        <p>
          Score: {score}/{questions.length}
        </p>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h1>Quiz App</h1>
      </div>
      <div>
        <div></div>
        {questions.length > 0 && (
          <>
            <h2>Question No: {quesIdx + 1}</h2>
            <h2>{questions[quesIdx].question}</h2>
            <div>
              <label>
                <input
                  type="radio"
                  value="a"
                  checked={selectedOption === "a"}
                  onChange={(e) => setSelectedOpion(e.target.value)}
                />
                {questions[quesIdx].a}
              </label>
              <label>
                <input
                  type="radio"
                  value="b"
                  checked={selectedOption === "b"}
                  onChange={(e) => setSelectedOpion(e.target.value)}
                />
                {questions[quesIdx].b}
              </label>
              <label>
                <input
                  type="radio"
                  value="c"
                  checked={selectedOption === "c"}
                  onChange={(e) => setSelectedOpion(e.target.value)}
                />
                {questions[quesIdx].c}
              </label>
              <label>
                <input
                  type="radio"
                  value="d"
                  checked={selectedOption === "d"}
                  onChange={(e) => setSelectedOpion(e.target.value)}
                />
                {questions[quesIdx].d}
              </label>
            </div>
            <button onClick={handleNextQuestion}>Next Question</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
