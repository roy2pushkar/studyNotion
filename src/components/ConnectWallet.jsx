import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

// ...

function ConnectWallet() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    connectWeb3();
  }, []);

  const connectWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined' && typeof window.ethereum.request === 'function') {
      try {
        const provider = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(provider);
        setWeb3(web3Instance);
        subscribeToAccountChanges(web3Instance);
      } catch (error) {
        console.error('Error connecting to Web3:', error);
      }
    }
     else { console.warn('Web3 provider not found or does not support request method'); 
    }
  };

  const subscribeToAccountChanges = (web3Instance) => {
    web3Instance.eth.getAccounts()
      .then((accounts) => {
        setAccounts(accounts);
      });

    window.ethereum.on('accountsChanged', (updatedAccounts) => {
      setAccounts(updatedAccounts);
    });
  };

  return (
    <div>
      {web3 ? (
        <div>
          <p>Connected to Web3</p>
          <p>Wallet Address: {accounts[0]}</p>
        </div>
      ) : (
        
        <button onClick={connectWeb3}
        class="w-full  transition-all focus-outline-none cursor-pointer  flex items-center justify-center px-8 py-3 mb-4 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
        type="button">
        Connect Wallet
      </button>
      )}
    </div>
  );
}

export default ConnectWallet;
