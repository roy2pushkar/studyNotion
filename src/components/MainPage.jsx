
import React from "react";
import dark from '../images/dark-mode.png';
import day from '../images/day-mode.png';
import image from '../images/web-3.0.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import heroimage from '../images/heroimage.jpg'
import crypto from '../images/crypto.jpg';
import blockchain from '../images/blockchain.jpg';
import metamask from '../images/metamask.jpg';
import solidity from '../images/solidity.jpg';
import web3 from '../images/web3.jpg';
import programming from '../images/programming.jpg';
import  { useEffect, useState } from 'react';
import Web3 from 'web3';
import logo from '../images/studyNotion.png';

function MainPage() {
  const navigate = useNavigate();
  function basicprgclickHandler() {
       
     navigate("/basicsprogramming");
  }
  function cryptoclickHandler() {
     navigate("/crypto");
  }
  function solidityclickHandler() {
     navigate("/solidity");
  }
  function etherumclickHandler() {
     navigate("/etherum");
  }
  function web3clickHandler() {
     navigate("/web3");
  }
  function blockchainclickHandler() {
     navigate("/blockchain");
  }
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    connectWeb3();
  }, []);

  const connectWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined' && typeof window.ethereum.request === 'function') {
      try {
        const provider = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(provider);
        setWeb3(web3Instance);
        subscribeToAccountChanges(web3Instance);
      } catch (error) {
        console.error('Error connecting to Web3:', error);
      }
    }
     else { console.warn('Web3 provider not found or does not support request method'); 
    }
  };

  const subscribeToAccountChanges = (web3Instance) => {
    web3Instance.eth.getAccounts()
      .then((accounts) => {
        setAccounts(accounts);
      });

    window.ethereum.on('accountsChanged', (updatedAccounts) => {
      setAccounts(updatedAccounts);
    });
  };
 
  return (
    <div className="MainPage bg-gray-400">
    <div className="sticky rounded-md bg-gray-800 shadow-white ">
      <nav className="">
  <div className="flex justify-between items-center p-8 mx-6">
    <div>
      <a href="#" className="text-3xl text-white font-extrabold">
        StudyNotion
      </a>
    </div>

    <div className="flex gap-4 mx-6 justify-between items-center">
      <a href="#home" className="hover:text-gray-600 hover:font-semibold text-white">
        Home
      </a>
      <a href="#about-us" className="hover:text-gray-600 hover:font-semibold text-white">
        About
      </a>
      <a href="#courses" className="hover:text-gray-600 hover:font-semibold text-white">
        Courses
      </a>
      <a
        href="#contact-us"
        className="hover:text-gray-600 hover:font-semibold text-white"
      >
        Contact
      </a>
      <div className="hidden">
        <img src={dark} className="cursor-pointer" alt="day-img" />
      </div>

      {/* Connect Wallet Button */}
      {web3 ? (
        <div>
          <p>Connected to Web3</p>
          <p>Wallet Address: {accounts[0]}</p>
        </div>
      ) : (
        
        <button onClick={connectWeb3}
        class="w-full  transition-all focus-outline-none cursor-pointer  flex items-center justify-center px-8 py-3 mb-4 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
        type="button">
        Connect Wallet
      </button>
      )}

    </div>
  </div>
  <div className="">
    <div className="md:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
        </svg>
      </button>
    </div>

    <div className="md:hidden">
      <img src={day} className="" alt="day-img" />
    </div>
  </div>
</nav>

    </div>
      <div className="Home flex flex-col justify-between p-8 items-center ">
        <div className="uppercase font-extrabold text-3xl">
          <h1 className=" text-black ">Blockchain Technology</h1>
        </div>
      
      <div id="home" className="hero-part p-8">
        <img src= {heroimage}  className="" alt="Hero-img" /> 

      </div>
    
    </div>
    <div className="About">
       <section class="bg-gray-400">
      <div className="p-12 m-12">
        <h2 id="about-us" class="text-2xl font-extrabold text-center uppercase">
          About us
        </h2>
        <p className="text-lg">
          Welcome to our cutting-edge Web3 course provider website! We are passionate about empowering individuals with the latest knowledge and skills in blockchain technology and decentralized applications
        </p>
        <br />
        
        <p className="text-lg">Join us on this transformative journey to understand the future of the internet and revolutionize the way we interact and transact online. Embrace the decentralized world with confidence through our comprehensive and hands-on Web3 courses!</p>
        <br />
        <p className="text-lg">Unlock the potential of Web3 and explore the limitless possibilities of blockchain technology with our dynamic and interactive online courses. Stay ahead of the curve and be part of the decentralized revolution today!</p>
      </div>
    </section>
    </div>
  
    <div className="CourseTopic">
     <section className="">
      <div id="courses" class="bg-gray-400 p-8">
        <h2 className="text-2xl font-extrabold text-center uppercase">Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
       <Link to="/basicsprogramming">
        <div className="
           overflow-hidden hover:bg-gray-500">
            <div className="p-4">
              <h3 className="text-xl font-bold m-2 font-serif text-center ">Basic Programming</h3>
             
            </div>
            <div className="flex flex-col gap-2 m-8">
              <img src= {programming}  className="w-[360px] h-[250px] rounded-md" alt="intro-to-programming" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Discover the fundamentals of programming with our beginner-friendly courses. Dive into the world of coding, develop problem-solving skills, and unlock a world of endless opportunities in the digital realm.
              </p>

            </div>
            
              <div className=" p-4">
             
              <button onClick={basicprgclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
            
          </div>
       </Link>
        
        <Link to="/blockchain">
            <div className="
           overflow-hidden hover:bg-gray-500">
            <div className="p-4 hover:outline-white ">
              <h3 className="text-xl font-bold mb-2 font-serif text-center ">What is Blockchain ??</h3>
              
            </div>
             <div className="flex flex-col gap-2 m-8 ">
              <img src= {blockchain}  className="w-[360px] h-[250px] rounded-md" alt="blockchain" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Blockchain is a revolutionary decentralized technology that enables secure and transparent digital transactions. It operates as an immutable and distributed ledger, ensuring trust, traceability, and accountability across various industries and applications.
              </p>

            </div>
            <div className=" p-4">
             
              <button onClick={blockchainclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
        </Link>
       
         <Link to="/web3">
          <div className=" 
           overflow-hidden hover:bg-gray-500">
            <div class="p-4">
              <h3 className="text-xl font-bold mb-2 font-serif text-center ">What is Web3.0 ??</h3>
              
            </div>
             <div className="flex flex-col gap-2 m-8">
              <img src= {image}  className="w-[360px] h-[250px] rounded-md" alt="web3" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
              Web3.0, often referred to as the "decentralized web," represents the next generation of the internet, where blockchain technology plays a pivotal role. It empowers users with full control over their data, enables peer-to-peer interactions, and fosters a new era of trust, privacy, and autonomy online.
              </p>

            </div>
           <div className=" p-4">
             
              <button onClick={web3clickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
        </Link>
          <Link to="/etherum">
          <div className=" 
           overflow-hidden hover:bg-gray-500">
            <div className="p-4">
              <h3 className
            ="text-xl font-bold mb-2 font-serif text-center ">What is Etherum ??</h3>
             
            </div>
             <div className="flex flex-col gap-2 m-8">
              <img src= {metamask}  className="w-[360px] h-[250px] rounded-md" alt="metamask" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Ethereum is a decentralized blockchain platform that allows developers to build and deploy smart contracts and decentralized applications (DApps). It utilizes its native cryptocurrency, Ether (ETH), to facilitate transactions and incentivize network participants.
              </p>

            </div>
           <div className=" p-4">
             
              <button onClick={etherumclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div></Link>
       
          <Link to="/crypto">
          <div className=" 
           overflow-hidden hover:bg-gray-500">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 font-serif text-center">Setting up a Crypto Wallet </h3>
              
            </div>
             <div className="flex flex-col gap-2 m-8">
              <img src= {crypto}  className="w-[360px] h-[250px] rounded-md" alt="crypto" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
               Cryptocurrency, often referred to as crypto, is a digital or virtual form of currency secured by cryptography, making it nearly impossible to counterfeit. It operates on decentralized networks, like blockchain, enabling secure and transparent transactions worldwide.
              </p>

            </div>
          <div className=" p-4">
             
              <button onClick={cryptoclickHandler}  className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
          </Link>
         <Link to="/solidity">
         
          <div className="
           overflow-hidden hover:bg-gray-500">
            <div className="p-4">
              <h3 class="text-xl font-bold mb-2 font-serif text-center">Intro to Solidity</h3>
             
            </div>
             <div className="flex flex-col gap-2 m-8">
              <img src= {solidity}  className="w-[360px] h-[250px] rounded-md" alt="solidity" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Solidity is a high-level programming language used for writing smart contracts on the Ethereum blockchain and other compatible platforms. It provides a secure and efficient way to implement complex functionalities within decentralized applications (DApps).
              </p>

            </div>
           <div className=" p-4">
             
              <button onClick={solidityclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
         </Link>
        </div>
      </div>
    </section>
    </div>
    <div className="Contact">
      <section className="bg-gray-400">
      <div className="p-8">
        
        <h3
          id="contact-us"
          className="text-2xl text-blue-600 font-extrabold text-center uppercase"
        >
         contact-us
        </h3>
        <h3
          id="contact-us"
          className="text-2xl font-extrabold text-center uppercase"
        >
          If You have any doubt,feel free to contact
        </h3>
        <form
          className="bg-gray-400 px-8 pt-6 pb-8 flex flex-col items-center"
        >
          
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required:"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4 w-1/2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required:"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 w-1/2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required:"
              id="Subject"
              type="text"
              placeholder="Subject"
            />

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required:"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div
            className="flex items-center justify-center sm:flex sm:justify-center"
          >
            <button
              className="w-full flex items-center justify-center px-8 py-3 mb-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    </div>
    <footer className="bg-gray-800 sm:mt-10 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex justify-between ">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
         
          <div className="flex flex-col justify-center items-center gap-2">
           <div>
             <a
            className="text-white text-3xl font-bold  uppercase hover:text-gray-300"
            href="#"
            >StudyNotion</a
          >
           </div>
          <div id="" className="">
        <img src= {logo}  className="" alt="logo-img" /> 

      </div>
          </div>
          <div className="hidden">
        <img src={dark} className="cursor-pointer" alt="day-img" />
      </div>
          
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-500 font-medium mb-6">
            Links
          </div>
          <a
            href="#about-us"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >About</a
          >
         
          <a
            href="#home"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >Home</a
          >
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >Contact</a
          >
        </div>

        

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-500 font-medium mb-6">
            Contact
          </div>
          <p
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            <a href="#"> 1234 Some Address, Suite #000 </a>
          </p>
          <p
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            <a href="#"> +1 123 456 7890 </a>
          </p>
          <p
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            <a href="#"> email@example.com </a>
          </p>
          <p
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            <a href="#">
              <p
                className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
              >
                Linkedin
              </p>
            </a>
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default MainPage;
