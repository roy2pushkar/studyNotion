import React from 'react';

import  { useState } from 'react';


import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';


const Web3QuizPage = () => {
  const quizQuestions = [
    {
      question: 'Question 1: Web2 applications tend to be centralized',
      answers: {
        a: 'True',
        b: 'False',
        
       
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 2: It is easier for data breaches to happen in Web2 applications',
      answers: {
        a: 'True',
        b: 'False',
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 3: Web3 applications tend to be centralized',
      answers: {
         a: 'True',
        b: 'False',
     
      },
      correctAnswer: 'b',
    },
     {
      question: 'Question 4: Web3 does not require permission to enter',
      answers: {
        a: 'True',
        b: 'False',
     
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 5:Web3 applications tend to be centralized',
      answers: {
         a: 'True',
        b: 'False',
     
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 6:Web3 applications tend to be distributed',
      answers: {
       a: 'True',
        b: 'False',
     
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 7:Web3 does not require trust on a central authority',
      answers: {
        a: 'True',
        b: 'False',
     
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 8:Web3 is open and inclusive for all',
      answers: {
        a: 'True',
        b: 'False',
     
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



  const navigate = useNavigate();

  
   function backtoCourses(){
    navigate('/mainpage')
  }
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
    <button  onClick={backtoCourses}
        class="  transition-all focus-outline-none m-4  flex items-center justify-center  border border-transparent text-base font-medium rounded-sm text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 h-10 cursor-pointer"
        type="button">
        Back to HomePage
      </button>
    </div>
  );
};





export default Web3QuizPage;
