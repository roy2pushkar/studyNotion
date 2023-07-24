import React from 'react';

import  { useState } from 'react';


import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';


const EtherumQuizPage = () => {
  const quizQuestions = [
    {
      question: 'Question 1: What is Solidity?',
      answers: {
        a: 'A decentralized exchange protocol.',
        b: 'A programming language for writing smart contracts.',
        c: 'An Ethereum-based cryptocurrency.',
        d: 'A consensus algorithm used in blockchain networks.',
        
       
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 2: Which keyword is used to declare a function in Solidity? ',
      answers: {
        a: 'func',
        b: 'function',
        c: 'def',
        d: 'contract',
        
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 3: What is the purpose of the "constructor" function in a Solidity smart contract?',
     answers: {
        a: 'To define the initial state variables of the contract',
        b: ' To restrict access to certain functions within the contract.',
        c: 'To handle arithmetic operations within the contract.',
        d: 'To create new instances of the contract.',
        
      },
      correctAnswer: 'a',
    },
     {
      question: 'Question 4: Which data type is used for storing Ethereum addresses in Solidity?',
      answers: {
        a: 'unit',
        b: 'address',
        c: 'string',
        d: 'bool',
        
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 5: What does the "view" keyword mean in a function declaration in Solidity?',
      answers: {
        a: 'The function cannot modify state variables.',
        b: 'The function can only be called by the contract owner.',
        c: 'The function is executed automatically upon contract deployment.',
        d: 'The function is executed asynchronously.',
        
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 6:What is the purpose of the "require" statement in Solidity?',
      answers: {
        a: 'To validate function inputs and conditions before proceeding.',
        b: 'To add a new contract to the Ethereum blockchain.',
        c: 'To specify the amount of gas required for contract execution.',
        d: 'To create an instance of a contract.',
        
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 7:Which of the following is NOT a visibility modifier in Solidity?',
       answers: {
        a: 'public',
        b: 'private',
        c: 'protected',
        d: 'internal',
        
      },
      correctAnswer: 'c',
    },
    {
      question: 'Question 8:How are events used in Solidity smart contracts?',
      answers: {
        a: 'To modify state variables within the contract.',
        b: 'To facilitate communication between different contracts.',
        c: 'To calculate gas fees for contract execution.',
        d: 'o create new tokens on the Ethereum blockchain.',
        
      },
      correctAnswer: 'b',
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





export default EtherumQuizPage;
