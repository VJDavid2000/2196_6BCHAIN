const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/helloworld-alchemy.sol/helloworldAlchemy.json");

console.log(JSON.stringify(contract.abi));

const ethers = require('ethers');

const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloworldalchemyContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  const message = await helloworldalchemyContract.message();
  console.log("In this message: " + message);

  console.log("Hold in for updating its message...");
  const tx = await helloworldalchemyContract.update("New Message Appeared.");
  await tx.wait();
}
