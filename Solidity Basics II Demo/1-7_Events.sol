// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Event {
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        emit Log(msg.sender, "Hello User1520!");
        emit Log(msg.sender, "Hi EVM!");
        emit AnotherLog();
    }
}
