import "./App.css";
import "./index.css";
import React from "react";
import Navbar from "./components/NavbarItems";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import CourseTopic from "./components/CourseTopic";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <CourseTopic />
      <Contact />
      <Footer />

      <Routes>
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/coursetopic" element={<CourseTopic />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
