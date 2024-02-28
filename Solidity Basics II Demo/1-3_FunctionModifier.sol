// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract FunctionModifier {
    mapping(address => uint256) public valueMapping;

    modifier nonZeroValue(uint256 _value) {
        require(_value !=0, "Zero is not a value");
        _;
    }

    modifier valueHasBeenSet() {
        require(valueMapping[msg.sender] != 0, "Sender is in no value set");
        _;
    }

    function setValue(uint256 _value) public nonZeroValue(_value) {
        valueMapping[msg.sender] = _value;
    }

    function getValue() public view valueHasBeenSet returns (uint256) {
        return valueMapping[msg.sender];
    }
}
