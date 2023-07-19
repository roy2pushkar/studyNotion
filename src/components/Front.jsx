import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

   function Front() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/mainpage");
  }
  return (
    <div>
      <div className="MainPage flex flex-col justify-center items-center bg-gray-950 h-screen">
      <section className="flex flex-col justify-center items-center">
        <div>
          <div className="text-center">
            <h6 className="text-center mx-auto inline-block text-white  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 max-w-md   text-lg font-bold  md:text-xl">
              Change World With Web3.0
            </h6>
          </div>
          <div>
            <h1 className="mx-auto mt-2 text-white max-w-xl  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-3xl font-normal sm:max-w-2xl sm:text-5xl lg:max-w-3xl lg:text-5xl">
              Become a Future Web3 developer
            </h1>
          </div>
          <div className="p-4">
            <p className="text-white font-bold text-lg">
              "Unlocking the Future with Web3: Embrace Decentralization, Empower Global Connectivity!"
            </p>
          </div>
        </div>
       
     
      
       <div class="flex items-center justify-center sm:flex sm:justify-center ">
      
      
        <button onClick={clickHandler}
        class="w-full  transition-all focus-outline-none cursor-pointer  flex items-center justify-center px-8 py-3 mb-4 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
        type="button">
        Explore
      </button>
      
    </div>
     
     
      </section>
    </div>
   
    </div>
  );
}



export default Front;