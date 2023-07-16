import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const BlockChain = () => {
  const navigate = useNavigate();

  function quizclickHandler(){
    navigate('/basicprogrammingquiz')
  }
   function backclickHandler(){
    navigate('/mainpage')
  }

  return (
    <div className=" min-h-[100px] leading-relaxed bg-gray-700">
        <div className=' text- dark:text-gray-50 p-4 px-64 '>
            <h1 id='started with programming' className=' font-extrabold text-4xl lg:text-5xl '>
               Intro to Blockchain
            </h1>
            <p>
                <br/>
                <br />
            </p>
            <h1 id='How to get started with programming' className=' font-extrabold text-2xl lg:text-3xl '>
             What is Blockchain ??
            </h1>
            <p>
                <br/>
                A blockchain is a distributed, digital, immutable ledger that is used to record transactions and store data in a secure and transparent manner. It is based on a decentralized network of nodes that collectively maintain a single source of truth, allowing participants to interact with the system without the need for intermediaries.
            </p>
            <p>
                <br/>
                <br />
                A block is a container data structure that aggregates transactions for inclusion in the public ledger, the Blockchain. Each block in the chain contains a set of transactions that have been verified and recorded by the network of nodes through a process known as consensus. Once a block is added to the chain, it cannot be altered or deleted, creating an immutable record of all transactions on the network.
            </p>
            <br/>
                <br />
            <p>
                Blockchains were popularized by the anonymous person (or group) Satoshi Nakamoto, when they released the Bitcoin Network in 2009. Bitcoin is a cryptocurrency network, and it handles primarily the transfer of the BTC asset across the network, without a trusted middleman or authority, while ensuring the network itself is secure and cannot be hacked. (P.S. The bitcoin network is also likely the biggest bug bounty in the world - if you can hack it, you're an instant trillionaire).
            </p>
            <br/>
                <br />
            <p>
                Over time, this design of Bitcoin inspired other, more capable, blockchain networks to come out, like Ethereum. We will be learning a lot about Ethereum in the coming sessions.
            </p>
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                State Management
            </h2>
            <p>
              Blockchains start off with a Genesis State when they launch. Bitcoin's genesis state happened in 2009 when the public network launched. Ethereum's Genesis State happened in 2015, when it launched.
            </p><p>
                <br/>
               Every transaction on a blockchain modifies the global state that is replicated across all nodes.
            </p>
            <p>
                <br/>
               Since there are millions of transactions, transactions get grouped together in blocks, hence the name - Blockchain. These blocks are chained together in a cryptographically verifiable way so they are historically traceable. The current state of a network can be recalculated at any time by starting from the genesis block and transitioning the state according to each block's information up until now.
            </p>
            
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Nodes
            </h2>
            <p>
              The backend refers to that part of a software that allows it to operate and cannot be directly accessed by the user. Most private data, business logic, data processing, etc. happens on the backend, and the frontend is to provide a visual representation of that data.
            </p><p>
                <br/>
                For example, consider Instagram - Instagram has billions and billions of photos and videos on their platform. Some of those photos are posted by private accounts, photos that only people who follow that private account can see and anyone else cannot. The filtering of photos required for Instagram to show you your feed on the timeline vs. what they actually have available to them happens on their backend. It is important the backend is not directly accessible by users because otherwise private data can be leaked.
            </p>
            <p>
                <br/>
               If you've ever read news about some website getting hacked and user's private information - their address, names, credit cards, etc. - being leaked, that is because there was some bug in their backend that allowed a malicious actor to directly gain access to it. 
            </p>
            <p>
                <br/>
               It is our goal as software developers to build secure backends for our services and only allow the user access to information and data they should have access to. 
            </p>
           <p>
                <br/>
                Backend services can be written in a variety of programming languages - JavaScript, Rust, Go, Python, C#, and many more. As you're starting your journey however, since you're going to be learning JavaScript anyway for the frontend, you might as well use JavaScript for the backend as well. While each programming language has it's own pros and cons, they are not enough for a beginner to try to master multiple different languages and paradigms at once. I highly recommend that if you want to build on web technologies, you choose JavaScript because it works on both ends of the tech stack.
            </p>
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
            <div className='text-white'>
            soicials Link
            </div>
        </div>
    </div>
  );
};

export default BlockChain;
