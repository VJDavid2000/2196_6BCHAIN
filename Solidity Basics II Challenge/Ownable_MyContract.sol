// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Ownable {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    event OwnershipTransferred(address indexed previousOwner, address newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "Owner not have occurred");
        _;    
    }

    function setOwner(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "Address unobtainable");
        owner = _newOwner;
    }

    function onlyOwnerCanCallThisFunc() external onlyOwner {
        //code
    }
    
    function anyOneCanCall() external{
        //code
    }
}

contract MyContract is Ownable {
    uint256 public setSomeValue;
}
