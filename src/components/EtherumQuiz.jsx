import React from 'react';

import  { useState } from 'react';


import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';


const EtherumQuizPage = () => {
  const quizQuestions = [
    {
      question: 'Question 1: How are smart contracts executed?',
      answers: {
        a: 'On Ethereum servers',
        b: 'On the Ethereum Virtual Machine (EVM)',
        c: 'Jeff Bezos runs them',
        
       
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 2: 🤔 Ethereum currently uses which consensus algorithm?',
      answers: {
        a: 'Proof of Work',
        b: 'Proof of Stake',
        c:'Proof of Authority',
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 3: WIn the Serenity patch... Ethereum moved from Proof of Work to Proof of Stake',
      answers: {
         a: 'True',
        b: 'False',
        
     
      },
      correctAnswer: 'a',
    },
     {
      question: 'Question 4: What is the native currency of Ethereum?',
      answers: {
        a: 'NEAR',
        b: ' ETH',
        c: 'BTC',
        d: 'MATIC'
     
      },
      correctAnswer: 'b',
    },
    
    {
      question: 'Question 5:You can create your own ERC-20 token without the permission of Ethereum.',
      answers: {
         a: 'True',
        b: 'False',
       
     
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 6:Which statement best describes Proof of Work?',
      answers: {
       a: 'Miners with the most currency are allowed to mine and add blocks to the blockchain',
        b: 'Miners compete to solve computational puzzles. The winner of this competition gets to add a block to the blockchain.',
        c : 'Miners work to compute an EVM routing problem. The first miner to solve the problem gets to add blocks to the Blockchain',
     
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





export default EtherumQuizPage;
