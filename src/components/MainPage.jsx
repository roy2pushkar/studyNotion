
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
  function metamaskclickHandler() {
     navigate("/metamask");
  }
  function javascriptclickHandler() {
     navigate("/javascript");
  }
  function frontendclickHandler() {
     navigate("/frontend");
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
    <div className="MainPage">
    <div className="sticky rounded-md outline-purple-200 shadow-white ">
      <nav className="bg-purple-400">
  <div className="flex justify-between items-center p-8 mx-6">
    <div>
      <a href="#" className="text-3xl font-extrabold">
        StudyNotion
      </a>
    </div>

    <div className="flex gap-4 mx-6 justify-between items-center">
      <a href="#home" className="hover:text-gray-600 hover:font-semibold">
        Home
      </a>
      <a href="#about-us" className="hover:text-gray-600 hover:font-semibold">
        About
      </a>
      <a href="#courses" className="hover:text-gray-600 hover:font-semibold">
        Courses
      </a>
      <a
        href="#contact-us"
        className="hover:text-gray-600 hover:font-semibold"
      >
        Contact
      </a>
      <div>
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
      <div className="Home flex justify-between p-8 items-center bg-purple-500">
        <div className="uppercase font-extrabold text-3xl">
          <h1 className=" text-orange-500 ">Blockchain Technology</h1>
        </div>
      
      <div id="home" className="hero-part p-8">
        <img src= {heroimage}  className="" alt="Hero-img" /> 

      </div>
    
    </div>
    <div className="About">
       <section class="bg-gray-200">
      <div className="p-8">
        <h2 id="about-us" class="text-2xl font-extrabold text-center uppercase">
          About us
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at
          praesentium quaerat quae officia quia blanditiis suscipit perferendis
          ut itaque! Temporibus dolorum dolore et voluptas obcaecati iusto
          cupiditate distinctio cumque? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Modi commodi quidem delectus possimus veniam et
          cumque asperiores harum, tempore recusandae architecto quasi eveniet
          provident perferendis corrupti assumenda inventore culpa sed. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi
          repellat eos aut soluta cupiditate animi iusto eum voluptatum
          explicabo pariatur, modi blanditiis minima nostrum, vitae voluptas
          ipsam et obcaecati? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Veniam magnam, quis corporis perferendis commodi
          voluptatibus facere enim quo molestiae vitae dolor expedita tenetur
          cum recusandae excepturi quaerat sequi tempore atque! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nihil rerum temporibus
          dolor! Labore unde, quos asperiores sint minus ut pariatur alias,
          molestiae veniam molestias architecto quo totam? Illo, similique
          dignissimos.
        </p>
      </div>
    </section>
    </div>
  
    <div className="CourseTopic">
     <section className="bg-purple-600">
      <div id="courses" class="bg-gray-300 p-8">
        <h2 className="text-2xl font-extrabold text-center uppercase">Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
       <Link to="/basicsprogramming">
        <div className="
           overflow-hidden hover:bg-gray-500">
            <div className="p-4">
              <h3 className="text-xl font-bold m-2 font-serif  ">Basic Programming</h3>
             
            </div>
            <div className="flex flex-col gap-2">
              <img src= {programming}  className="w-[360px] h-[250px]" alt="intro-to-programming" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Our experienced team of chartered accountants can help you
                optimize your tax strategy and minimize your tax liability.
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
              <h3 className="text-xl font-bold mb-2 font-serif">What is Blockchain ??</h3>
              
            </div>
             <div className="flex flex-col gap-2 ">
              <img src= {blockchain}  className="w-[360px] h-[250px]" alt="blockchain" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Our experienced team of chartered accountants can help you
                optimize your tax strategy and minimize your tax liability.
              </p>

            </div>
            <div className=" p-4">
             
              <button onClick={cryptoclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
        </Link>

       
         <Link to="/web3">
          <div className=" 
           overflow-hidden hover:bg-gray-500">
            <div class="p-4">
              <h3 className="text-xl font-bold mb-2 font-serif ">What is Web3.0 ??</h3>
              
            </div>
             <div className="flex flex-col gap-2">
              <img src= {web3}  className="w-[360px] h-[250px]" alt="web3" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Our experienced team of chartered accountants can help you
                optimize your tax strategy and minimize your tax liability.
              </p>

            </div>
           <div className=" p-4">
             
              <button onClick={solidityclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
        </Link>
          <Link to="/metamask">
          <div className=" 
           overflow-hidden hover:bg-gray-500">
            <div className="p-4">
              <h3 className
            ="text-xl font-bold mb-2 font-serif">What is Metamask ??</h3>
             
            </div>
             <div className="flex flex-col gap-2">
              <img src= {metamask}  className="w-[360px] h-[250px]" alt="metamask" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Our experienced team of chartered accountants can help you
                optimize your tax strategy and minimize your tax liability.
              </p>

            </div>
           <div className=" p-4">
             
              <button onClick={metamaskclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div></Link>
       
          <Link to="/crypto">
          <div className=" 
           overflow-hidden hover:bg-gray-500">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 font-serif">Setting up a Crypto Wallet </h3>
              
            </div>
             <div className="flex flex-col gap-2">
              <img src= {crypto}  className="w-[360px] h-[250px]" alt="crypto" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Our experienced team of chartered accountants can help you
                optimize your tax strategy and minimize your tax liability.
              </p>

            </div>
          <div className=" p-4">
             
              <button onClick={javascriptclickHandler}  className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
          </Link>
         <Link to="/solidity">
         
          <div className="
           overflow-hidden hover:bg-gray-500">
            <div className="p-4">
              <h3 class="text-xl font-bold mb-2 font-serif">Intro to Solidity</h3>
             
            </div>
             <div className="flex flex-col gap-2">
              <img src= {solidity}  className="w-[360px] h-[250px]" alt="solidity" /> 
               <p className="text-gray-700 leading-6 w-[350px]">
                Our experienced team of chartered accountants can help you
                optimize your tax strategy and minimize your tax liability.
              </p>

            </div>
           <div className=" p-4">
             
              <button onClick={frontendclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
         </Link>
        </div>
      </div>
    </section>
    </div>
    <div className="Contact">
      <section className="bg-gray-400">
      <div className="p-8 bg-purple-300">
        <h3
          id="contact-us"
          className="text-2xl font-extrabold text-center uppercase"
        >
          If You have any doubt,feel free to contact
        </h3>
        <form
          className="bg-purple-200 px-8 pt-6 pb-8 flex flex-col items-center"
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
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
         
          <a
            className="text-white text-3xl font-bold uppercase hover:text-gray-300"
            href="#"
            >StudyNotion</a
          >
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illum hic culpa, maiores quas iste architecto ex a. Eligendi,
            laboriosam vel.
          </p>
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
            href="#our-services"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >Services</a
          >
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >Projects</a
          >
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >Contact</a
          >
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-500 font-medium mb-6">
            Courses
          </div>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >Web design</a
          >
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >Development</a
          >
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >Hosting</a
          >
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >CMS</a
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
