import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import logo from '../images/studyNotion.png';

const Etherum = () => {
  const navigate = useNavigate();

  function quizclickHandler(){
    navigate('/etherumquiz')
  }
   function backclickHandler(){
    navigate('/mainpage')
  }

  return (
    <div className=" min-h-[100px] leading-relaxed bg-gray-700">
        <div className=' text- dark:text-gray-50 p-4 px-64 '>
            <h1 id='started with programming' className=' font-extrabold text-4xl lg:text-5xl '>
               What is Etherum ??
            </h1>
            <p>
                <br/>
                <br />
            </p>
            <h1 id='How to get started with programming' className=' font-extrabold text-2xl lg:text-3xl '>
              What is Etherum 
            </h1>
            <p>
                <br/>
               Ethereum is a decentralized blockchain that supports smart contracts. Unlike Bitcoin, which only supports the transfer of the Bitcoin token around the network, Ethereum is more general purpose.
            </p>
            <p>
                <br/>
                <br />
               Developers can build dApps, or decentralized applications, which can be executed on the Ethereum network on the Ethereum Virtual Machine (EVM). The global state of Ethereum therefore consists of more than just the balance of every account, but also the state of each dApp.
            </p>
            <p>
                <br/>
                <br />
               dApps are built on Ethereum using its programming language, Solidity. You can write smart contracts using Solidity and deploy the smart contracts to the Ethereum Network.
            </p>
             <p>
                <br/>
                <br />
               It maintains consensus across all the computers in its network with Proof of Stake (PoS). The Serenity Patch, introduced in September of 2022, made the switch for Ethereum going from Proof of Work to a Proof of Stake mechanism. We learn more about Proof of Work in the later Sophomore track.
            </p>
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Ethereum Basics
            </h2>
            <br />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                History
            </h2>
            <p>
              Ethereum was originally proposed by Vitalik Buterin, a young programmer and co-founder of the Bitcoin Magazine. He was a curious student, and a gifted programmer even at a young age. He used to play World of Warcraft from 2007-2010, however, when Blizzard decided to remove the damage component from his favorite warlock's Siphon Life skill, Buterin was very upset and quit the game altogether.
            </p><p>
                <br/>
                In 2011, he came across Bitcoin, and got quite fascinated by the idea. He wanted to formally contribute, so he started writing articles about it in exchange for a few Bitcoin per article. In late 2011, he co-founded the Bitcoin Magazine and went full time into crypto. He traveled across the world looking at various crypto projects, and realized it is possible to generalize the functionality of most of these projects by integrating a Turing-complete general-purpose programming language into a blockchain.
            </p>
            <p>
                <br/>
               Buterin tried to convince the Bitcoin core developers, among devs from other projects, that the blockchain technology can have much wider impact than just monetary exchanges and blockchain needed a general purpose programming language to go with it. However, after being refused by the existing projects, he decided to do it himself. He went ahead and proposed the development of a new blockchain platform with a Turing-complete programming language (Solidity), that went on to be what we know as Ethereum.
            </p>
            <p>
                <br/>
                In 2014, the project was publicly announced, and the core team consisted of Vitalik Buterin, Mihai Alise, Anthony Di Iorio, Charles Hoskinson, Joe Lubin and Gavin Wood. A few months later, the team held an Initial Coin Offering (ICO) for the Ether token to fund the development. The team raised over 31,000 BTC, which at the time was around $18 million USD. They then established the Ethereum Foundation, a non-profit based in Switzerland which was tasked with seeing Ethereum's open source development early on.
            </p>
            
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                What is Ether
            </h2>
            <p>
              Ethereum has a native currency called "Ether", or "ETH". This token is required to pay transaction fees for transactions done on the Ethereum network.
            </p>
             <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                What are Smart Contracts
            </h2>
            <p>
              <br />
              Smart contracts are small computer programs that are replicated and processed on all the computers on the Ethereum network without a central coordinator. Smart Contracts allow you to program contracts that can be automatically enforced by computer code.
            </p>
            <p>
              <br />
              The general-purpose nature of Ethereum allows for any number of possible applications to be built on top of it, which all inherit the security and decentralization benefits that come from running on the Ethereum blockchain.
            </p>
             <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
              ERC20 Tokens
            </h2>
            <p>
              <br />
             In addition to Ether, people can create and use their own currencies on Ethereum. The most common form of currency is ERC20 tokens. ERC20 Tokens are smart contracts that fit a specific standard. Developers can extend beyond the standard, but should meet the minimum requirements when making their own token. The standardization allows for digital wallets to easily support all types of tokens, without needing specialized code for each token created.
            </p>
             <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
              ERC721 and ERC1155 Tokens
            </h2>
            <p>
              <br />
             These are what are also called NFTs. These two standards, similar to ERC20, provide a base line for what requirements should be met when creating NFTs. They provide similar benefits as well, allowing wallets and NFT marketplaces to instantly be compatible with all NFT collections as they all follow one of these two standards.

and many more...
            </p>
          
         
            
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Resources
            </h2>
            <p>
                To learn more about Etherum, we highly suggest the following resources:
            </p>
            <a href='https://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/' className='' >
                <p className='text-blue-500 underline'>tps://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/</p>
            </a>
            <a href='https://ethereum.org/en/whitepaper/'>
                <p className='text-blue-500 underline'>https://ethereum.org/en/whitepaper/</p>
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

export default Etherum;
