// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

//Send ETH & SelfDestruct
contract SendEther {
    constructor() payable {}

    receive() external payable { }

    function sendViaTransfer (address payable _to) external payable { 
        _to.transfer (100);
    }
    function sendViaSend (address payable _to) external payable { 
        bool sent = _to.send(100);
        require(sent, "You have failed to Send.");
    }
    function sendViaCall (address payable _to) external payable { 
        (bool success, ) = _to.call{value: 100}("");
        require(success, "You have failed to Call.");
    }
}

contract ReceiveEther {
    event Log (uint amount, uint gas);

    receive() external payable {
    emit Log (msg. value, gasleft());
    }
}


contract SelfDestruct {
    event Deposit (uint amount); 
    event Withdraw(uint amount); 
    address public owner = msg.sender;

    receive() external payable { 
        emit Deposit (msg.value);
    }
    
    function withdraw() external {
        require(msg.sender == owner, "Owner's not valid!"); 
        emit Withdraw(address (this).balance); 
        payable(owner).transfer(address(this).balance);
    }
}
