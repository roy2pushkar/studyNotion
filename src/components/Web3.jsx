import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import logo from '../images/studyNotion.png';

const Web3 = () => {
  const navigate = useNavigate();

  function quizclickHandler(){
    navigate('/web3quiz')
  }
   function backclickHandler(){
    navigate('/mainpage')
  }

  return (
    <div className=" min-h-[100px] leading-relaxed bg-gray-700">
        <div className=' text- dark:text-gray-50 p-4 px-64 '>
            <h1 id='started with programming' className=' font-extrabold text-4xl lg:text-5xl '>
               Intro to Web3.0
            </h1>
            <p>
                <br/>
                <br />
            </p>
            <h1 id='How to get started with programming' className=' font-extrabold text-2xl lg:text-3xl '>
              What is Web3.0 ??
            </h1>
            <p>
                <br/>
               In this module we'll explore what the term 'web3' means. It’s probably most helpful to think about Web3 in the context of previous internet paradigms, Web1 and Web2.


            </p>
            <br />
            <h1 id='How to get started with programming' className=' font-extrabold text-2xl lg:text-3xl '>
              Web1 (1980’s - early 2000’s)
            </h1>
            <p>
                <br/>
                <br />
               The first phase of the Internet, Web1, was mainly about providing the everyday consumer with online content and information.
            </p>
            <p>
                <br/>
              As consumers could only read information or content online, and not yet interact with it, Web1 was incredibly static.

            </p>
            <p>
                <br/>
               When you think about Web1, think Internet Explorer, Yahoo, or Netscape. While web1 was read-only, the companies we associate with web1 were built on open protocols (meaning pretty much any person or organization could build on the internet and know they were subject to the same rules as the next person or organization).

            </p>
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                What is Web2?
            </h2>
            <br />
            <p>
                <br/>
              Web2 is the version of the internet most of us know and use today. Where Web1 was static and “read-only,” Web2 is “read-write,” and interactive. Under Web2, the internet became more usable: Web2 was dynamic and users could consume, interact with, and create content on the internet themselves.

            </p>
            <p>
                <br/>
              Along the way, the internet became largely dominated by the four behemoths we know today as Apple, Amazon, Facebook, and Google. Web2 also saw an explosion in the use of smartphones, and most of internet use was through mobile apps and hardware built by these companies. While this meant more people could participate in the internet, it also meant the internet was becoming increasingly controlled by the leading digital platforms.

            </p>
            <p>
                <br/>
              Why is this a problem? In the centralized internet we know today, Apple can take a 30% cut on all paid-app downloads and in-app purchases, Twitter and Facebook can de-platform the President of the United States, and the everyday consumer has less privacy, security, and control over their online information than ever before.


            </p>
            <p>
                <br/>
             We also see a lot of data breaches happening all across Web2 leading to reduced security and privacy for one's personal data. When a user's data gets breached it's easy for them to become a victim of identity theft, personal attacks etc.



            </p>
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                What is Web3?
            </h2>
            <p>
              Web3, the future internet we’re moving towards, is a decentralized internet. Under Web3, the internet is shared online and governed by the collective “we,” rather than owned by centralized entities. The Web3 world is one that has open-source protocols at its foundation. Web3 is about rearchitecting internet services and products so that they benefit people rather than entities.


            </p><p>
                <br/>
               Web3 enhances the web we know today by making it decentralized, distributed, open, trustless and permissionless.
            </p>
            
                
               <ul>
                <li>
                    <p>
                <br/>
               It is getting built such that everything would happen in a decentralized distributed way giving no central authority access to control the system.
            </p>
                </li>
                <li>
                    <p>
                <br/>
              ‘Open’ as it would be open sourced software built by an open and accessible community of developers and executed in full view of the world.
            </p>
                </li>
                <li>
                    <p>
                <br/>
              ‘Trustless’ in that the network itself allows participants to interact publicly or privately without a trusted third party.
            </p>
                </li>
                <li>
                    <p>
                <br/>
              ‘Permissionless’ in that anyone, both users and suppliers, can participate without authorization from a governing body.
            </p>
                </li>
               </ul>
                 <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Summary
            </h2>
             <p>
                <br/>
             Web1: Read 📖
            </p>
             <p>
                <br/>
              Web2: Read-Write 📖 🖊️
            </p>
             <p>
                <br/>
             Web3: Read-Write-Own 📖 🖊️ 🔑
            </p>
             <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Resources
            </h2>
            <p>
                To learn more about blockchains, we highly suggest the following resources:
            </p>
            <a href='https://www.freecodecamp.org/news/what-is-web3/' className='' >
                <p className='text-blue-500 underline'>What is Web3</p>
            </a>
            <a href='https://www.xenonstack.com/blog/web3-features-and-challenges'>
                <p className='text-blue-500 underline'>Web3 Features and its Comparison Web3 vs Web2</p>
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
             <div id="" className="">
        <img src= {logo}  className="" alt="logo-img" /> 

      </div>
        </div>
    </div>
  );
};

export default Web3;
