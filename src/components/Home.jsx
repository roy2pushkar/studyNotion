
import React from "react";
import image from '../images/web-3.0.jpg'

function Home() {
  return (
    <div className="Home">
      <section className="bg-blue-400">
      <div id="home" className="hero-part p-8">
        <img src= {image}  className="w-full" alt="Home-img" /> 

      </div>
    </section>
    </div>
  );
}

export default Home;
