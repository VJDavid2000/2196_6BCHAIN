// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract IfElse {
    function foo(uint x) public pure returns (uint) {
        if (x < 24) {
            return 0;
        } else if (x < 48) {
            return 1;
        } else {
            return 2;
        }
    }    

    function ternary(uint _x) public pure returns (uint) {
        return _x < 24 ? 1 : 2;
    }
}
