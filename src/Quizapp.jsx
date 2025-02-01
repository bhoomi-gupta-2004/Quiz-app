import React, { useState, useEffect } from "react";
import axios from "axios";
// import Confetti from "react-confetti";
import "./Quizapp.css"; // Importing external CSS for styling

// Function to shuffle questions (Fisher-Yates algorithm)
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const Quizapp = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);

  // Fetch & Shuffle Questions on Initial Load
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("/api");
        console.log("API Response:", response.data.questions);
        
        // Shuffle questions before setting state
        setQuizData(shuffleArray(response.data.questions));
      } catch (err) {
        setError(err.message || "Error fetching quiz data");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("wrong");
    }

    setTimeout(() => {
      setAnswerStatus(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResults(true);
      }
    }, 1000); // Delay before next question
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    
    // Fetch new questions and shuffle again
    setQuizData(shuffleArray(quizData));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="quiz-container">
      <h1>Quiz App 🎯</h1>

      {showResults ? (
        <div className="results">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: <span className="score">{score} / {quizData.length}</span>
          </p>
          {score === quizData.length && <Confetti />} {/* 🎉 Confetti for full score */}
          <button className="restart-btn" onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        quizData.length > 0 && (
          <div className="quiz-card">
            <div className="progress-bar">
              <div style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}></div>
            </div>

            <h2>Question {currentQuestion + 1} / {quizData.length}</h2>
            <p className="question">{quizData[currentQuestion].description}</p>

            <ul className={`options ${answerStatus}`}>
              {quizData[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <button className="option-btn" onClick={() => handleAnswerClick(option.is_correct)}>
                    {option.description}
                  </button>
                </li>
              ))}
            </ul>

            {answerStatus === "correct" && <p className="correct-msg">✅ Correct!</p>}
            {answerStatus === "wrong" && <p className="wrong-msg">❌ Wrong!</p>}
          </div>
        )
      )}
    </div>
  );
};

export default Quizapp;
