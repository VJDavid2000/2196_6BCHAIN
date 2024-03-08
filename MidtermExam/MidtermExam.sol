// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract gradeContract{
    address public owner;
    address public grade;
    uint256 public prelimScore;
    uint256 public midtermScore;
    uint256 public finalScore;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "The system requires to take by the owner's actions to compute student's grades.");
        _;
    }

    modifier validGrade() {
        require(msg.sender == grade, "The system oftens to calculate that relies on student's performance grade scores.");
        _;
    }

    constructor() {
        owner = msg.sender;
        grade = msg.sender;
    }

    event GradeComputed(address indexed previousGrade, address newGrade);

    function setPrelimGrade(uint256 _prelimScore) external validGrade {
        require(_prelimScore > 0, "This student's present prelim grade is in need that may have neither none or lower than 75%");
        prelimScore = _prelimScore;
    }

    function setMidtermGrade(uint256 _midtermScore) external validGrade {
        require(_midtermScore > 0, "This student's present midterm grade is in need that may have neither none or lower than 75%");
        midtermScore = _midtermScore;
    }

    function setFinalGrade(uint256 _finalScore) external validGrade {
        require(_finalScore > 0, "This student's present finals grade is in need that may have neither none or lower than 75%");
        finalScore = _finalScore;
    }

    function calculateGrade() external validGrade view returns (uint256) {
        require(prelimScore > 0 && midtermScore > 0 && finalScore > 0, "The full equation of student's average grade is applied.");
        return prelimScore / midtermScore / finalScore * 3 / 100;
    }
}

//David, Vincent Jericho C., WD-402
