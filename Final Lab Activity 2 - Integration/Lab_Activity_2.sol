// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract MyFinalsActivity2 {
    address payable public owner;
    uint256 public creationTime;
    uint256 constant INITIAL_ETH_AMOUNT = 2 ether;
    uint256 public remainingEth;

    event EtherReceived(address indexed sender, uint256 amount);
    event EtherSent(address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "This Owner can only call this function");
        _;
    }

    constructor() {
        owner = payable(msg.sender);
        creationTime = block.timestamp;
        remainingEth = INITIAL_ETH_AMOUNT;
    }

    receive() external payable {
        _receive(msg.sender, msg.value);
    }

    function _receive(address _sender, uint256 _amount) private {
        remainingEth += _amount;
        emit EtherReceived(_sender, _amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function sendEther(address payable _recipient, uint256 _amount) public onlyOwner payable {
        require(_amount <= remainingEth, "Insufficient balance or remained funds");

        remainingEth -= _amount;
        _recipient.transfer(msg.value); //It can Transfer the value sent within transaction
        emit EtherSent(_recipient, msg.value); // Emit in the event with its sending value
    }

    function withdraw() public onlyOwner {
        uint256 contractBalance = address(this).balance;
        owner.transfer(contractBalance);
    }
}
