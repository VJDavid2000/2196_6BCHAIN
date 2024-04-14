const alchemyKey = "wss://eth-sepolia.g.alchemy.com/v2/cwNe9oP8QMXTc2EZO515OAfSrG67FLxG"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = request('../contract-abi.json');
const contractAddress = 0x44a9ABc18BA4ae73814ffeE67885495BE273dFf0;

export const helloWorldContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const loadCurrentMessage = async () => {
  const message = await helloWorldContract.methods.message().call();
  return message;
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Write a message in text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "Inaccessible" + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            {" "}
            <a target="_blank" href={'https://metamask.io/download'}>You must install MetaMask, a virtual Ethereum wallet right into your browser.</a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Write a message in text-field above.",
        };
      } else {
        return {
          address: "",
          status: "Connect to MetaMask using top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "Inaccessible" + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            {" "}
            <a target="_blank" href={'https://metamask.io/download'}>You must install MetaMask, a virtual Ethereum wallet right into your browser.</a>
          </p>
        </span>
      ),
    }
  }
};

export const updateMessage = async (address, message) => {
  if (!window.ethereum || address === null) {
    return {
      status:
      "Connect your MetaMask wallet to update a message on Blockchain",
    };
  }

  if (message.trim() === "") {
    return {
      status: "Your message can't be as an empty string.",
    };
  }

  const transactionParameters = {
    to: contractAddress,
    from: address,
    data: helloWorldContract.methods.update(message).encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: (
        <span>
            {" "}
            <a target="_blank" href={`https://sepolia.etherscan.io/tx/${txHash}`}>View the status of your transaction on Etherscan!.</a><br />
            Once the transaction is verified bynetwork, a message will be updated automatically.
        </span>
      ),
    };
  } catch (error) {
    return {
      status: "Inaccessible" + error.message,
    }
  }
};
