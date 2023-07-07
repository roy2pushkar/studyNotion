
import React from "react";

function ContactForm() {
  return (
    <div className="Contact">
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
  );
}

export default ContactForm;
