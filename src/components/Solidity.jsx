import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import logo from '../images/studyNotion.png';

const Solidity = () => {
  const navigate = useNavigate();

  function quizclickHandler(){
    navigate('/solidityquiz')
  }
   function backclickHandler(){
    navigate('/mainpage')
  }

  return (
    <div className=" min-h-[100px] leading-relaxed bg-gray-700">
        <div className=' text- dark:text-gray-50 p-4 px-64 '>
            <h1 id='started with programming' className=' font-extrabold text-4xl lg:text-5xl '>
               Introduction to Solidity
            </h1>
            <p>
                <br/>
                <br />
            </p>
            <h1 id='How to get started with programming' className=' font-extrabold text-2xl lg:text-3xl '>
              Let's start with Solidity
            </h1>
            <p>
                <br/>
                <span>Solidity is an object-oriented, high-level language for implementing smart contracts. It is designed to target <a className='text-blue-500 underline' href='https://coinmarketcap.com/alexandria/glossary/ethereum-virtual-machine-evm'>Ethereum Virtual Machine(EVM).</a></span>
            </p>
            <p>
                <br/>
                <br />
               It is statically typed, supports inheritance, libraries and complex user-defined types among other features.
            </p>
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Building in Solidity
            </h2>
            <br />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                initializing Smart Contracts
            </h2>
            <br />
            <div className='bg-black text-white'>
              <p>
                pragma solidity ^0.8.19;
              </p>
              <br />
              <p>// Start by creating a contract named HelloWorld</p>
              <p>
                contract HelloWorld  { }


              </p>
            </div>
            <br />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Variables and Types
            </h2>
            <br />
            <p>
              There are 3 types of variables in Solidity
            </p><p>
                <br/>
               1 . Local
            </p>
            <p>
               Declared inside a function and are not stored on blockchain 
               
            </p>
            <p>
                <br/>
                This happens because of Web Standards. An organization known as the W3C (World Wide Web Consortium) sets standards, a set of explicit rules, that all companies such as Google, Microsoft, Mozilla, Apple, etc. must follow when building things like web browsers across different devices and across different operating systems. 
            </p>
            <p>
                <br/>
               2 . State
            </p>
            <p>
                Declared outside a function to maintain the state of the smart contract


            </p>
            <p>
               Stored on the blockchain
            </p>
            <p>
                
              3. Global
            </p>
            <p>
             Provide information about the blockchain. They are injected by the Ethereum Virtual Machine during runtime.   
            </p>
            <p>
              Includes things like transaction sender, block timestamp, block hash, etc.  
            </p>
            <p>
                <a href='https://docs.soliditylang.org/en/v0.8.19/units-and-global-variables.html' className=' text-blue-500 underline' >Examples of global variables</a>
            </p>
            <p>
                <br/>
               The scope of variables is defined by where they are declared, not their value. Setting a local variable's value to a global variable does not make it a global variable, as it is still only accessible within it's scope.
            </p>
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
               References
            </h2>
            <a href='https://solidity-by-example.org/' className='' >
                <p className='text-blue-500 underline'>Solidity By Example</p>
            </a>
            <br />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Resources for Learning extra
            </h2>
            
            <br />
            <a href='https://cryptozombies.io/' className='' >
                <p className='text-blue-500 underline'>Cryptozombies</p>
            </a>
            <a href='https://solidity-by-example.org/'>
                <p className='text-blue-500 underline'>Solidity by ExampleSolidity docs</p>
            </a>
            <br />
            
           <div className='flex justify-between items-center'>
             <div className=''>
             <button  onClick={backclickHandler}
        class="  transition-all focus-outline-none   flex items-center justify-center  border border-transparent text-base font-medium rounded-sm text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 h-10 cursor-pointer"
        type="button">
        Back
      </button>
        </div>
         <div className=''>
             <button  onClick={quizclickHandler}
        class="  transition-all focus-outline-none   flex items-center justify-center  border border-transparent text-base font-medium rounded-sm text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 h-10 cursor-pointer"
        type="button">
        Start Quiz
      </button>
        </div>
           </div>
        </div>
       

        <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
        <br />
      <div>
        <h3 className=' font-semibold text-2xl text-white px-28 '>
            want to ask anything ?
        </h3>
        <br></br>
        <div className='  px-8 flex justify-around items-center '>
          <input type='email' placeholder='enter your email' required className='rounded-sm h-10 w-1/3' >
          </input>
          
      
      
        <button 
        class="  transition-all focus-outline-none cursor-pointer  flex items-center justify-center  border border-transparent text-base font-medium rounded-sm text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 h-10 cursor-pointer"
        type="button">
        send
      </button>
      
    
     <div></div>
     <div></div>
     <var><div>
    </div></var>

        </div>
      </div>
      <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
        <br />
        <div className='flex justify-between px-8 '>
            <div className=''>
               <a href="#" className="text-3xl font-extrabold text-white">
              StudyNotion
            </a>
            </div>
            <div className='text-white'>
           © 2023 StudyNotion, Inc. All rights reserved
            </div>
             <div id="" className="">
        <img src= {logo}  className="" alt="logo-img" /> 

      </div>
        </div>
    </div>
  );
};

export default Solidity;
