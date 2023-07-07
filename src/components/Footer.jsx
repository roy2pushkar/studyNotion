
import React from "react";

function Footer() {
  return (
    <div classNameName="App">
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

export default Footer;
