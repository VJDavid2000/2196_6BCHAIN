import React from "react";
import { useEffect, useState } from "react";
import {
  helloWorldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentWalletConnected,
} from "./util/interact.js";

import alchemylogo from "./alchemylogo.svg";

const HelloWorld = () => {
  
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("Your Network Has Not Been Connected.");
  const [newMessage, setNewMessage] = useState("");

  //One-off Call action In-use only
  useEffect(() => {
    async function fetchMessage() {
      const message = await loadCurrentMessage();
      setMessage(message);
    }
    fetchMessage();
    addSmartContractListener();

    async function fetchWallet() {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
    }
    fetchWallet();
    addWalletListener();

    async function fetchWallet() {
      const {address, status} = await getCurrentWalletConnected();
    }
    fetchWallet
  }, []);

  function addSmartContractListener() {
    helloWorldContract.events.UpdatedMessages({}, (error, data) => {
      if (error) {
        setStatus("Inaccessible" + error.message);
      } else {
        setMessage(data.returnValues[1]);
        setNewMessage("");
        setStatus("Hoorah, Your message has been updated!");
      }
    });
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Write your message here in top placed text-field.");
        } else {
          setWallet("");
          setStatus("Connect to MetaMask using top right button.");
        }
      });
    } else {
      setStatus(
        <p>
            {" "}
            {" "}
            <a target="_blank" href={'https://metamask.io/download'}>You must install MetaMask, a virtual Ethereum wallet right into your browser.</a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => { 
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onUpdatePressed = async () => { 
    const { status } = await updateMessage(walletAddress, newMessage);
    setStatus(status);
  };

  // UI Component
  return (
    <div id="container">
      <img id="logo" src={alchemylogo}></img>
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Actively Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <h2 style={{ paddingTop: "50px" }}>Feature Current Message:</h2>
      <p>{message}</p>

      <h2 style={{ paddingTop: "18px" }}>New Message Entry:</h2>

      <div>
        <input
          type="text"
          placeholder="Please Update your message in this smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        <button id="publish" onClick={onUpdatePressed}>
          Update
        </button>
      </div>
    </div>
  );
};

export default HelloWorld;
