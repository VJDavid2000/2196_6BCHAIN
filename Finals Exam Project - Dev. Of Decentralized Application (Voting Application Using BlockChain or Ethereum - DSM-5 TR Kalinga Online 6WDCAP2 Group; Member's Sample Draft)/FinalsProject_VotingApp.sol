// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Election {
    bytes32[] public representatives;

    mapping(bytes32 => uint256) public votes;

    function addRepresentative(bytes32 representative) public {
        representatives.push(representative);
    }

    function vote(bytes32 representative) public {
        require(validRepresentative(representative));
        votes[representative] += 1;
    }

    function validRepresentative(bytes32 representative) view public returns (bool) {
        for(uint i = 0; i < representatives.length; i++) {
            if(representatives[i] == representative) {
                return true;
            }
        }
        return false;
    }
}
