// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract salaryCalculation{
    address public owner;
    uint256 public age;
    uint256 public hoursWorked;
    uint256 public hourlyRate;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "This source is for Owner's input of applied calculations upon Worker's Hourly Salary");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setAge(uint256 _age) external onlyOwner {
        age = _age;
    }

    function setHrsWrk(uint256 _hoursWorked) external onlyOwner {
        require(_hoursWorked > 0, "The amount of Working Hours must applied either never or greater than 0");
        hoursWorked = _hoursWorked;
    }

    function setRate(uint256 _hourlyRate) external onlyOwner {
        require(_hourlyRate > 0, "The amount of Rated Hours must applied either never or greater than 0");
        hourlyRate = _hourlyRate;
    }

    function calculateTolSat() external onlyOwner view returns (uint256) {
        require(hourlyRate > 0 && hoursWorked > 0, "The full sum of Worker's Total Salary must applied either never or greater than 0");
        return hourlyRate * hoursWorked;
    }
}

//David, Vincent Jericho C., WD-402
