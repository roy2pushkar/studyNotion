import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/studyNotion.png';

const GetStarted = () => {
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
               Started With Programming
            </h1>
            <p>
                <br/>
                <br />
            </p>
            <h1 id='How to get started with programming' className=' font-extrabold text-2xl lg:text-3xl '>
              How to get Started With Programming ??
            </h1>
            <p>
                <br/>
                To get started as a Web3 developer, we need some background knowledge of Web2. Whether you're interested in creating smart contracts, dev tooling, protocol level development, AI image generation, or anything else - there are a lot of topics that have existed for decades that are still highly relevant and useful. A large part of what you would like to do today if you're reading this is learning how to build on top of web technologies - things that a user can access through a web browser.
            </p>
            <p>
                <br/>
                <br />
                In this lesson, I will go over a few key terminologies you will definitely come across as you begin your journey, but more importantly talk about the mindset you should have as a developer who is just getting started on this journey.
            </p>
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Frontend Technologies
            </h2>
            <p>
               A frontend is the interface with which a user interacts. On the web, the frontend refers to a website you can browse around, click on things, maybe even write stuff. Mobile apps and desktop apps are also valid examples of frontend interfaces. 
            </p><p>
                <br/>
                For the purposes of this lesson, we're going to focus on web technologies. 
            </p>
            <p>
                <br/>
                Have you ever thought about how no matter what web browser you're using - Chrome, Firefox, Safari, Edge, etc - a website looks the exact same on all of them? 
            </p>
            <p>
                <br/>
                This happens because of Web Standards. An organization known as the W3C (World Wide Web Consortium) sets standards, a set of explicit rules, that all companies such as Google, Microsoft, Mozilla, Apple, etc. must follow when building things like web browsers across different devices and across different operating systems. 
            </p>
            <p>
                <br/>
                Particularly, these standards are set around the three key things every web developer needs to have some familiarity with - HTML, CSS, and JavaScript.
            </p>
            <p>
                <br/>
               HTML is the language used to visually place elements on your screen. Things like this paragraph you're reading right now, things like buttons, things like a dropdown menu. You visually place elements across the screen using HTML.


            </p>
            <p>
                <br/>
               CSS is a styling language used to add styles and your own custom flair to these elements. By default, HTML elements look boring and plain. Remember those old 90s websites? Yeah, that was plain HTML. CSS allows you to customize things about HTML elements. Such as making a button round instead of a rectangle, changing the font of a paragraph, having some bold text or underlined text, and so on.
            </p>
            <p>
                <br/>
                And finally, to tie it all together comes JavaScript. JavaScript is arguably the most important aspect of building on web technologies. It is a fully functional programming language that is used to add real functionality to your website. 
            </p>
            <p>
                <br/>
               With HTML and CSS, you can place elements on a screen and make them look nice - but they won't actually do anything. Your button wouldn't actually do anything if you click it, more posts on Instagram will not load as you kept scrolling down, and so on.
            </p>
            <p>
                <br/>
               JavaScript allows you to add real interactivity and functionality to your websites. It is, without a doubt, the language of the web - and you will find that most of the lessons here on LearnWeb3 will use JavaScript in one way or the other. A website without JavaScript has no functionality other than letting you look at things a certain way. 
            </p>
            <p>
                <br/>
                Anyway, going back to the W3C - the W3C sets standards around how a web browser like Chrome must understand, run, and display the code being written by a web developer using HTML, CSS, and JavaScript. Because of those standards, all browsers across all devices and all operating systems work similarly and you do not have to worry about it. That's the power of building on web technologies. Unlike building mobile apps, where iOS and Android differ a lot from each other, or how building for Windows is very different from building for macOS or building for Linux - the web allows you to write your code once, and have it work everywhere - and we are going to leverage that.
            </p>
            <br />
            <hr className='h-0.5 w-full bg-slate-600 dark:bg-gray-800 my-4' />
            <h2 id='frontend technologies' className='text-2xl font-semibold'>
                Backend Technologies
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
             <div id="" className="h">
        <img src= {logo}  className="" alt="logo-img" /> 

      </div>
        </div>
    </div>
  );
};

export default GetStarted;
