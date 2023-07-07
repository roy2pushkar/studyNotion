import "./App.css";
import "./index.css";
import React from "react";
import Navbar from "./components/NavbarItems";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import CourseTopic from "./components/CourseTopic";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <CourseTopic />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
