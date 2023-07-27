import "./App.css";
import "./index.css";
import React from "react";

import { Route, Routes } from "react-router-dom";

import Web3 from "./components/Web3";
import Etherum from "./components/Etherum";
import Solidity from "./components/Solidity";
import Crypto from "./components/Crypto";

import Front from "./components/Front";
import MainPage from "./components/MainPage";
import BasicProgrammingQuiz from "./components/BasicProgrammingQuiz";
import BasicProgramming from "./components/BasicProgramming";
import BlockChain from "./components/BlockChain";
import ConnectWallet from "./components/ConnectWallet";
import BlockChainQuiz from "./components/BlockChainQuiz";
import Web3Quiz from "./components/Web3Quiz";
import EtherumQuiz from "./components/EtherumQuiz";
import CryptoQuiz from "./components/CryptoQuiz";
import SolidityQuiz from "./components/SolidityQuiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/mainpage" element={<MainPage />} />

        <Route path="/crypto" element={<Crypto />} />
        <Route path="blockchain" element={<BlockChain />} />

        <Route path="solidity" element={<Solidity />} />

        <Route path="etherum" element={<Etherum />} />

        <Route path="web3" element={<Web3 />} />

        <Route path="mainpage" element={<MainPage />} />
        <Route path="basicsprogramming" element={<BasicProgramming />} />
        <Route path="basicprogrammingquiz" element={<BasicProgrammingQuiz />} />
        <Route path="blockchainquiz" element={<BlockChainQuiz />} />
        <Route path="web3quiz" element={<Web3Quiz />} />
        <Route path="etherumquiz" element={<EtherumQuiz />} />
        <Route path="Cryptoquiz" element={<CryptoQuiz />} />
        <Route path="solidityquiz" element={<SolidityQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
