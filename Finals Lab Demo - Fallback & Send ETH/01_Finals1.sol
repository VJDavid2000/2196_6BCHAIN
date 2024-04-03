// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

//Fallback & Receive
contract FallbackExample {
    event FallbackReceived (address sender, uint amount);
    // This Event is to log your received payment
    event PaymentReceived (address payer, uint256 amount);

    // This is Fallback function
    fallback() external payable {
        emit FallbackReceived (msg.sender, msg.value);
    }

    // It takes receiving Function within Ether
    receive() external payable {
        emit PaymentReceived(msg.sender, msg.value);
    }
}
