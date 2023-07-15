import "./App.css";
import "./index.css";
import React from "react";

import { Route, Routes } from "react-router-dom";

import Web3 from "./components/Web3";
import Metamask from "./components/Metamask";
import Solidity from "./components/Solidity";
import Crypto from "./components/Crypto";

import Front from "./components/Front";
import MainPage from "./components/MainPage";
import BasicProgrammingQuiz from "./components/BasicProgrammingQuiz";
import BasicProgramming from "./components/BasicProgramming";
import BlockChain from "./components/BlockChain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Front />} />

        <Route path="/crypto" element={<Crypto />} />
        <Route path="/blockchain" element={<BlockChain />} />

        <Route path="/solidity" element={<Solidity />} />

        <Route path="/metamask" element={<Metamask />} />

        <Route path="/web3" element={<Web3 />} />

        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/basicsprogramming" element={<BasicProgramming />} />
        <Route
          path="/basicprogrammingquiz"
          element={<BasicProgrammingQuiz />}
        />
      </Routes>
    </div>
  );
}

export default App;
