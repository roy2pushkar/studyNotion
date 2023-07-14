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
import BlockChain from "./components/BlockchainQuizPage";
import Frontend from "./components/Frontend";
import JavaScript from "./components/JavaScript";
import Metamask from "./components/Metamask";
import Solidity from "./components/Solidity";
import Crypto from "./components/Crypto";
import Login from "./components/Loginpage";
import Front from "./components/Front";
import MainPage from "./components/MainPage";
import BlockChainQuizPage from "./components/BlockchainQuizPage";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="App">
      <GetStarted />
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/blockchain" element={<BlockChain />} />

        <Route path="/crypto" element={<Crypto />} />

        <Route path="/solidity" element={<Solidity />} />

        <Route path="/metamask" element={<Metamask />} />

        <Route path="/javascript" element={<JavaScript />} />

        <Route path="/frontend" element={<Frontend />} />

        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/blockchainquizpage" element={<BlockChainQuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
