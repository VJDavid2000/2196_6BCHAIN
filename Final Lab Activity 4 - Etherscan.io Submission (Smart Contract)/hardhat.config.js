/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
//require("@nomiclabs/hardhat-etherscan");
//require("@nomicfoundation/hardhat-toolbox");

const { API_URL, PRIVATE_KEY } = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url:  API_URL,
      accounts: ['0x{PRIVATE_KEY}']
    }
  },
  etherscan: {
    //Your API Key for Etherscan
    //Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
}

//Contract deployed at: 0x44a9ABc18BA4ae73814ffeE67885495BE273dFf0
