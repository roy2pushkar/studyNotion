import React from 'react';

import  { useState } from 'react';




const BlockChainQuizPage = () => {
  const quizQuestions = [
    {
      question: 'Question 1: What is the capital of France?',
      answers: {
        a: 'Paris',
        b: 'London',
        c: 'Berlin',
        d: 'Berlin'
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 2: Who painted the Mona Lisa?',
      answers: {
        a: 'Leonardo da Vinci',
        b: 'Pablo Picasso',
        c: 'Vincent van Gogh',
      },
      correctAnswer: 'a',
    },
    // Add more questions...
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const totalQuestions = quizQuestions.length;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const displayQuizQuestion = () => {
    const { question, answers } = currentQuestion;

    return (
      <div className='pb-4'>
        <p className=' font-bold text-xl  '>{question}</p>
        {Object.keys(answers).map((option) => (
          <label key={option} className="block">
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={(e) => handleAnswerChange(e.target.value)}
              checked={userAnswers[currentQuestionIndex] === option}
            />
            <span className="ml-2 pt-2 p-4 ">{option}: {answers[option]}</span>
          </label>
        ))}
        <div className="flex justify-between pt-2">
          {currentQuestionIndex > 0 && (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePreviousQuestion}
            >
              Back
            </button>
          )}
          {currentQuestionIndex === totalQuestions - 1 ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pt-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded pt-2"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  };

  const handleAnswerChange = (selectedAnswer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: selectedAnswer,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    let score = 0;

    for (let i = 0; i < totalQuestions; i++) {
      if (userAnswers[i] === quizQuestions[i].correctAnswer) {
        score++;
      }
    }

    return score;
  };

  const displayQuizResults = () => {
    const score = calculateScore();
    const percentage = (score / totalQuestions) * 100;

    let result = `You scored ${score}/${totalQuestions}. `;
    result += `(${percentage}%) `;

    let resultClassName = '';
    if (percentage >= 70) {
      result += 'Congratulations! You passed the quiz.';
      resultClassName = 'result-container pass animate-cheer';
    } else {
      result += 'Sorry, you failed the quiz.';
      resultClassName = 'result-container fail';
    }

    return (
      <div className={resultClassName}>
        <div className="result-content">{result}</div>
      </div>
    );
  };

  return (
    <div className='bg-slate-400 flex flex-col justify-center items-center h-screen '>
      <div className="max-w-md mx-auto p-8 bg-gray-300">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      {showResult ? (
        displayQuizResults()
      ) : (
        <div className="mb-4">{displayQuizQuestion()}</div>
      )}
    </div>
    </div>
  );
};





export default BlockChainQuizPage;
