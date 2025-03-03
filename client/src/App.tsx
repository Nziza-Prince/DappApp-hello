import React, { useState } from "react";
import UpdateMessageComponent from "./components/UpdateMessageComponent";
import AddNumbersComponent from "./components/AddNumbersComponent";
import "./index.css";

function App() {
  const [account, setAccount] = useState<string>(""); // State for user's account address

  // Connect to MetaMask and fetch the user's account address
  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        // Request account access
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]); // Set the first account
      } catch (error) {
        console.error("User denied account access or error occurred:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  };

  return (
    <div className="app">
      <UpdateMessageComponent account={account} connectWallet={connectWallet} />
      <AddNumbersComponent account={account} connectWallet={connectWallet} />
    </div>
  );
}

export default App;