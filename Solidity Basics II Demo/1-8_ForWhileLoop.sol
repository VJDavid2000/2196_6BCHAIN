// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Loop {
    function loop() public pure {
        for (uint i = 0; i < 24; i++) {
            if (i == 4) {
                continue;
            }        
            if (i == 8) {
                break;
            }
        }

        uint j;
        while (j < 24) {
            j++;
       }
    }   
}
