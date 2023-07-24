import React from 'react';

import  { useState } from 'react';


import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';


const EtherumQuizPage = () => {
  const quizQuestions = [
    {
      question: 'Question 1: What is an address?',
      answers: {
        a: 'An address represents a crypto currency',
        b: 'An address represents your account on the blockchain',
        c: 'An address represents your crypto balance',
        
       
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 2: 🤔 Which one of the following is an Ethereum address?',
      answers: {
        a: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        b: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
        c:'@LearnWeb3WithStudyNotion',
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 3: What is a private key?',
      answers: {
         a: 'Private key is like a strong password for your account',
        b: 'Private key is another name for an address',
        c:'Private key refers to a crypto wallet',
     
      },
      correctAnswer: 'a',
    },
     {
      question: 'Question 4: What should you do with your private key?',
      answers: {
        a: 'You should share your private key with everyone',
        b: 'You should share your private key with only your friends and family',
        c: 'You should never share your private key',
     
      },
      correctAnswer: 'c',
    },
    {
      question: 'Question 5:What is a seed phrase?',
      answers: {
         a: 'Seed phrase is like a password for your address',
        b: 'Seed phrase is like a master password for your crypto wallet',
        c: 'Seed phrase is like a password for private key',
     
      },
      correctAnswer: 'b',
    },
    {
      question: 'Question 6:WWhat is an example of seed phrase?',
      answers: {
       a: 'correct horse battery staple',
        b: 'Y123456789',
        c : 'jealous expect hundred young unlock disagree major siren surge acoustic machine catalog',
     
      },
      correctAnswer: 'c',
    },
    {
      question: 'Question 7:What is a crypto wallet?',
      answers: {
        a: 'Crypto wallet manages your seed phrases',
        b: 'Crypto wallet manages the private keys associated with your addresses',
        c: 'Crypto wallet manages your crypto balance',
     
      },
      correctAnswer: 'b'
    },
    {
      question: 'Question 8:What is MetaMask?',
      answers: {
        a: 'An Ethereum wallet',
        b: 'A Bitcoin wallet',
        c: 'A Solana wallet',
     
      },
      correctAnswer: 'a',
    },
    {
      question: 'Question 8:Have you downloaded a wallet and set it up?',
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





export default EtherumQuizPage;
