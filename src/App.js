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
import BlockChain from "./components/Blockchain";
import Frontend from "./components/Frontend";
import JavaScript from "./components/JavaScript";
import Metamask from "./components/Metamask";
import Solidity from "./components/Solidity";
import Crypto from "./components/Crypto";

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
        <Route path="/blockchain" element={<BlockChain />} />

        <Route path="/crypto" element={<Crypto />} />

        <Route path="/solidity" element={<Solidity />} />

        <Route path="/metamask" element={<Metamask />} />

        <Route path="/javascript" element={<JavaScript />} />

        <Route path="/frontend" element={<Frontend />} />
      </Routes>
    </div>
  );
}

export default App;
