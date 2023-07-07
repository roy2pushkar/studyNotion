import React from 'react';

function Courses () {
    return (

        <div>
            
    <nav className="bg-white">
      <div className="flex justify-between items-center p-8 mx-6">
        <div>
          <a href="#" className="text-3xl font-extrabold">StudyNotion</a>
        </div>
        <div className="flex gap-4 mx-6 justify-between items-center">
          <a href="#home" className="hover:text-gray-600 hover:font-semibold"
            >Home</a
          ><a href="#about-us" className="hover:text-gray-600 hover:font-semibold"
            >About</a
          ><a href="#courses" className="hover:text-gray-600 hover:font-semibold"
            >Courses</a
          ><a href="#contact-us" className="hover:text-gray-600 hover:font-semibold"
            >Contact
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <button
         className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
        >
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
    </nav>
    <section className="bg-blue-400">
      <div id="home" className="hero-part p-8">
        <img src="images/web-3.0.jpg" className="w-full" />
      </div>
    </section>
    <section className="bg-gray-200">
      <div className="p-8">
        <h2 id="about-us" className="text-2xl font-extrabold text-center uppercase">
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
    <section className="bg-blue-400">
      <div id="courses" className="bg-gray-300 p-8">
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
            <div className="bg-gray-100 p-4">
              <a href="./Courses.jsx" className="text-blue-600 font-bold hover:underline"
                >Learn More</a
              >
            </div>
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
              <a href="#" className="text-blue-600 font-bold hover:underline"
                >Learn More</a
              >
            </div>
          </div>

         
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 uppercase">Solidity</h3>
              <p className="text-gray-700 leading-6">
                Our expert consultants can provide strategic advice to help your
                business grow and succeed.
              </p>
            </div>
            <div className="bg-gray-100 p-4">
              <a href="#" className="text-blue-600 font-bold hover:underline"
                >Learn More</a
              >
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 uppercase">Metamask</h3>
              <p className="text-gray-700 leading-6">
                As fraud and financial crime lawyers, we offer a comprehensive
                range of services to address your legal needs. Our team is
                dedicated to providing expert guidance and support in navigating
                the complex world of fraud and financial crime.
              </p>
            </div>
            <div className="bg-gray-100 p-4">
              <a
                href="/src/Fraud&FinancialCrimeLawyers.html"
             className="text-blue-600 font-bold hover:underline"
                >Learn More</a
              >
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
              <a
                href="./IntellectualPropertyRights.html"
             className="text-blue-600 font-bold hover:underline"
                >Learn More</a
              >
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 uppercase">Frontend</h3>
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
              <a
                href="./DFI.html"
             className="text-blue-600 font-bold hover:underline"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-400">
      <div className="p-8 bg-gray-100">
        <h3
          id="contact-us"
         className="text-2xl font-extrabold text-center uppercase"
        >
          If You have any doubt,feel free to contact
        </h3>
        <form
         className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-center"
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
             className="block text-gray-700 text-sm font-bold mb-2"
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
    
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          
          <a
         className="text-white text-3xl font-bold uppercase hover:text-gray-300"
            href="#"         >StudyNotion</a
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
    
  
        </div>
    )

}
export default Courses ;
