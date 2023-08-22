
import React from "react";
import dark from '../images/dark-mode.png';
import day from '../images/day-mode.png';

function NavbarItems() {
  return (
    <div classNameName="App">
      <nav className="bg-blue-400 w-full fixed">
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
          <img src= {dark}  className=" cursor-pointer " alt="day-img" /> 
          </div>
          </div>
        
         
        </div>
        <div className="" >
          <div className="md:hidden ">
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
        
          <img src= {day}  className="" alt="day-img" /> 
          
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default NavbarItems;
