// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract ValueTypes {
    bool public b = true;
    uint public u = 123;

    int public i = -123;

    int public minInt = type(int).min;

    address public addr = 0x4011B7D3535d61e58Af95F6536df0bE24254F63e;
}