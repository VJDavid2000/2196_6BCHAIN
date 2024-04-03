// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract EtherWallet {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    // This Function does allows for the owner to contract and receive Ether
    receive() external payable {}

    // Function as to deposit Ether into its contract
    function deposit() external payable {
    }

    // Function to make owner's funds in withdraw Ether from the contract
    function withdraw(uint256 _amount) external {
        require(msg.sender == owner, "Owner's Funds can allow only to Withdraw them");
        require(address(this).balance >= _amount, "You own contract is in current Insufficient balance or remained funds");
        owner.transfer(_amount);
    }

    // It Functions to get the balance of its owner's contract
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}

