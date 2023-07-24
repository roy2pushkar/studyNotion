import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import logo from '../images/studyNotion.png';

const Crypto = () => {
  const navigate = useNavigate();

  function quizclickHandler(){
    navigate('/cryptoquiz')
  }
   function backclickHandler(){
    navigate('/mainpage')
  }

  return (
    <div className=" min-h-[100px] leading-relaxed bg-gray-700">
        <div className=' text- dark:text-gray-50 p-4 px-64 '>
            <h1 id='started with programming' className=' font-extrabold text-4xl lg:text-5xl '>
             Setting up a crypto wallet
            </h1>
            <p>
                <br/>
                <br />
            </p>
            <h1 id='' className=' font-extrabold text-2xl lg:text-3xl '>
          Introduction
            </h1>
                        <p>
                          To understand crypto wallets fully, we have to understand some concepts about the blockchain, which will help us in understanding how a wallet aids us. Let's start off.
                <br/>
                
            </p>
            <h1 id='' className=' font-extrabold text-2xl lg:text-3xl '>
           What is an address? 🤨
            </h1>
            <p>
                <br/>
                An address is a string of text generated using cryptography to represent your account on the blockchain. This address can be shared publicly with others, and is completely safe to do so. You can send and receive funds from and to your wallet address. Basically, the address is your unique identifier on the blockchain and represents your 'account.' 
            </p>
            <br />
            <div className='w-full bg-white text-black '>
              <p className='text-gray-500 mr-2'>
                An example of an Ethereum address is :
              </p>
              <p className='text-gray-500 mr-2'>
                 0x01573Df433484fCBe6325a0c6E051Dc62Ab107D1
              </p>
            </div>
            
            
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
               What are private keys? 🔐
            </h2>
            <p>
              A private key is the counterpart to an address. Each address has an associated private key. As the name suggests though, this is meant to be kept private and not shared with anyone.
            </p><p>
                <br/>
               You can think of it like a password, a really strong one, that contains a bunch of letters and numbers that allow you to prove ownership over your address. Anyone who has the private key has access to make transactions from your address i.e. send money from your address to theirs.
            </p>
            <div className='w-full bg-white text-black '>
              <p className='text-gray-500 mr-2'>
                  A private key looks something like this: 
              </p>
              <p className='text-gray-500 mr-2'>
E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262


              </p>
            </div>
            <p>
                <br/>
               If you think of your address as a username for your account, the private key is its password. Therefore sharing your address is okay, but never ever share your private key or someone might steal your funds - and then nothing can be done about it.
            </p>
            <div className='w-full bg-white rounded-md text-black '>
              <p className='text-gray-500 mr-2'>
                 <strong>Caution</strong>: Since blockchains are decentralized, there is no 'forgot password' option. If you lose your private key, you lose access to your account. Similarly, if someone steals your private key and steals your funds, you cannot do anything about it. It is VERY important to keep this private key safe.
              </p>
            
            </div>
            <p>
                <br/>
               For developers, we often use the private key as part of our codebase to perform certain transactions, such as deploying our own smart contracts to the Ethereum network. While you are still learning, we highly suggest you use a separate account entirely for development than you use for storing any sort of funds. Unfortunately, beginner developers often use the same account they have funds on, and accidentally share their codebase publicly - and hackers can see your private key in the codebase and end up stealing funds. Please take that as a tale of caution.
            </p>
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
              What is a seed phrase? 👮‍♀️
            </h2>
            <p>
                <br/>
               A seed phrase is like a master password - the password of passwords!
            </p>
            <p>
                <br/>
              Think of a password manager, something like Lastpass or 1Password. These applications, within them, store your usernames and passwords for other apps securely, and themselves have a password. So, if someone hacks your password manager, they also get access to all accounts stored within it.
            </p>
            <p>
                <br/>
              A crypto wallet is kind of like a password manager, where you can manage multiple blockchain accounts. If the private key is the password to a single account, the seed phrase is kind of like the master password for that wallet.
            </p>
            <p>
                <br/>
               When you create a new crypto wallet, you will be presented with a seed phrase you should absolutely securely store and back up. Any new accounts you generate from inside that wallet will all be linked to the seed phrase. That one seed phrase will always generate the same accounts, with the same private keys and addresses for each.
            </p>
            <p>
                <br/>
             So for example if you created a wallet, and then created 5 accounts within it, your seed phrase manages all 5. If you wanted to switch to a new wallet, you could either import the 5 wallets individually - by using their individual private keys - or import using the seed phrase, and it would regenerate the same 5 accounts.
            </p>
            <div className='w-full bg-white rounded-md text-black '>
              <p className='text-gray-500 mr-2'>
                  An example of a seed phrase is: dove lumber quote board young robust kit invite plastic regular skull history
              </p>
            
            </div>
             <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
              What is a crypto wallet then? 😛
            </h2>
            <p>
                <br/>
               Crypto wallets are a manager for your accounts, and mainly their private keys. They also allow you to interact with decentralized applications, and allow connecting to a dApp through the wallet, acting as a single sign-on for all applications built on the blockchain.
            </p>
            <p>
                <br/>
               At LearnWeb3 as well, you can go into the Settings and connect your crypto wallet (after you have set it up), which will let us know what your address is so we can send you some sick NFTs when you graduate from our tracks!
            </p>
            <br />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
              Setting up a Wallet 🎉
            </h2>
            <br />
            <h2 id='frontend technologies' className=' uppercase text-2xl font-semibold'>
                Important
            </h2>
            <p>
             Make sure to create a new wallet for development purposes only. <strong>Do NOT use your own wallet with live funds for any development purposes.</strong> Throughout this course we'll be expecting you to use this newly created development wallet whenever we mention to include the wallet details or its private keys.
            </p>
            <br/>
            <h2 id='frontend technologies' className=' uppercase text-2xl font-semibold'>
               Continuing 😎

 
            </h2>
            <p>
             For Ethereum, there are a number of wallet options available. The easiest to get started using, and most developer friendly, are either Metamask or Coinbase Wallet.
            </p>
            <p>
                <br/>
               Both are Ethereum crypto wallets that can be installed as browser extensions, or as a mobile apps. You can find the download links below. We suggest downloading any one of them, and setting it up, before proceeding with the track.
            </p>
          <a href='https://metamask.io/download/' className='' >
                <p className='text-blue-500 underline'>Download Metamask</p>
            </a>
            <a href='hhttps://www.coinbase.com/wallet'>
                <p className='text-blue-500 underline'>Download Coinbase Wallet</p>
            </a>
            <br />
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
             <div id="" className="h">
        <img src= {logo}  className="" alt="logo-img" /> 

      </div>
        </div>
    </div>
  );
};

export default Crypto;
