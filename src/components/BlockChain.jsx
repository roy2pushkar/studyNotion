import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import logo from '../images/studyNotion.png';

const BlockChain = () => {
  const navigate = useNavigate();

  function quizclickHandler(){
    navigate('/blockchainquiz')
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
             A blockchain network is managed autonomously through a peer-to-peer distributed network of computer nodes. Without going into too much detail, you can simply think of each node in the network as keeping a copy of the global transaction ledger. Therefore, each node can individually verify and audit transactions happening on the network and ensure there was no illicit behavior.


            </p><p>
                <br/>
              Another type of node, called a mining node, is responsible for grouping together new transactions being made on a network into a block, verifying them, and proposing the block to be included onto the global ledger by everyone else. Mining is computationally hard, and very important to do securely, so miners whose blocks get accepted are given a token reward for their hard work.


            </p>
            <p>
                <br/>
              The use of a blockchain confirms that each unit of value was transferred only once, and the ingenious mechanisms put forth by Satoshi Nakamoto solved the long-standing decentralized double-spending problem.
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
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Decentralization
            </h2>
            <p>
             By storing data in a peer to peer network of nodes, the blockchain is a decentralized network. This has significant benefits over the traditional approach of storing data in a centralized manner. There are significant examples of problems with centralization - a few of which we will list here:

            </p>
            <br />
            <br />
            <ul>
                <li>
                    Data breaches in centralized systems expose a lot of data.
                </li>
                <br />
                <li>
                    Centralized authorities can censor and shut down speech.
                </li>
                <br />
                <li>
                    Reliance on a central authority means upstream problems affect downstream consumers (e.g. AWS going down means most of the internet goes down with it)
                </li>
            </ul>
            <br />
            
            <p>
                <br/>
             On the other hand, decentralization brings about the opposite benefits.
            </p>
          <div>
              <ul>
                <li>
                   No censorship as there is no single authority or middleman that can censor you.
                </li>
                <br />
                <li>
                    No downtime as the overall network is running across 1000's of nodes across the globe.
                </li>
                <br />
                <li>
                  Highly attack resistant making it infeasible to manipulate or destroy data
                </li>
                
            </ul>
          </div>
        <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                use Cases
            </h2>
            
            <div>
                <ul>
                    <li>Cryptocurrency

</li>
                    <li>Smart Contracts</li>
                    <li>
Decentralized Finance</li>
                    <li>
Gaming
</li>
                    <li>Supply Chain Tracking</li>
                    <li>
Counterfeiting Protection</li>
                    <li>Data Privacy</li>
                    <li>Decentralized Governance</li>
                    <li>Verifiable ownership of assets

and many more...</li>
                </ul>
            </div>
             <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Resources
            </h2>
            <p>
                To learn more about blockchains, we highly suggest the following resources:
            </p>
            <a href='https://www.youtube.com/watch?v=bBC-nXj3Ng4' className='' >
                <p className='text-blue-500 underline'>But how does bitcoin actually work? by 3Blue1Brown</p>
            </a>
            <a href='https://andersbrownworth.com/blockchain/'>
                <p className='text-blue-500 underline'>Blockchain Demo by Anders Brownworth</p>
            </a>
            <br />
           <div className='flex justify-between items-center hover:text-blue-700 hover:text-underline '>
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
             <div id="" className="h">
        <img src= {logo}  className="" alt="logo-img" /> 

      </div>
        </div>
    </div>
  );
};

export default BlockChain;
