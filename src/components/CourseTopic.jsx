
import React from "react";
import Courses from "./Courses";
import {useNavigate} from 'react-router-dom';
import {NavLink} from 'react-router-dom';



 const CourseTopic = () => {
 const navigate = useNavigate();
  function blockchainclickHandler() {
     navigate("/blockchain");
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
   return (
    <div className="CourseTopic">
     <section className="bg-blue-400">
      <div id="courses" class="bg-gray-300 p-8">
        <h2 className="text-2xl font-extrabold text-center uppercase">Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 uppercase">BlockChain</h3>
              <p className="text-gray-700 leading-6">
                Our experienced team of chartered accountants can help you
                optimize your tax strategy and minimize your tax liability.
              </p>
            </div>
            <NavLink>
              <div className="bg-gray-100 p-4">
             
              <button onClick={blockchainclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
            </NavLink>
          </div>
        
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 uppercase">crypto</h3>
              <p className="text-gray-700 leading-6">
                Our audit services ensure your financial statements are
                accurate, complete and comply with all relevant regulations.
              </p>
            </div>
            <div className="bg-gray-100 p-4">
             
              <button onClick={cryptoclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>

       
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-4">
              <h3 className="text-xl font-bold mb-2 uppercase">Solidity</h3>
              <p className="text-gray-700 leading-6">
                Our expert consultants can provide strategic advice to help your
                business grow and succeed.
              </p>
            </div>
           <div className="bg-gray-100 p-4">
             
              <button onClick={solidityclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
        
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 classNameN
            ="text-xl font-bold mb-2 uppercase">Metamask</h3>
              <p class="text-gray-700 leading-6">
                As fraud and financial crime lawyers, we offer a comprehensive
                range of services to address your legal needs. Our team is
                dedicated to providing expert guidance and support in navigating
                the complex world of fraud and financial crime.
              </p>
            </div>
           <div className="bg-gray-100 p-4">
             
              <button onClick={metamaskclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
       
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 uppercase">javascript</h3>
              <p className="text-gray-700 leading-6">
                In today's modern world, safeguarding intellectual property has
                become both crucial and challenging. However, navigating the
                complexities of intellectual property protection, enforcement,
                and avoidance of infringement can be daunting and risky without
                proper legal guidance.
              </p>
            </div>
          <div className="bg-gray-100 p-4">
             
              <button onClick={javascriptclickHandler}  className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
         
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 class="text-xl font-bold mb-2 uppercase">Frontend</h3>
              <p className="text-gray-700 leading-6">
                At LTM DFI Forensics lab, we utilize cutting-edge tools and
                techniques throughout the entire process, starting from
                gathering evidence, meticulously analysing data, and delivering
                exceptional results to our valued clients. Our commitment to
                excellence ensures that we consistently employ the finest
                industry tools, ensuring accurate and comprehensive solutions
                tailored specifically to your needs.
              </p>
            </div>
           <div className="bg-gray-100 p-4">
             
              <button onClick={frontendclickHandler} className="text-blue-600 font-bold hover:underline"> Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default CourseTopic;
