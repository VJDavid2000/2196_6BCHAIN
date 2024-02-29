// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Structs1 {
    struct Car {
        string model;
        uint year;
        address owner;
    }
    Car public car;
    Car[] public cars;
    mapping(address => Car[]) public carsByOwner;

    function someApplications() external {
        Car memory honda = Car("Honda", 2002, msg.sender);
        Car memory pagani = Car({year:2010, model:"Pagani", owner:msg.sender });
        Car memory ford;

        ford.model = "Ford";
        ford.year = 1970;
        ford.owner = msg.sender;

        cars.push(honda);
        cars.push(pagani);
        cars.push(ford);

        cars.push(Car('Mitsubishi', 2006, msg.sender));

        Car storage _car = cars[0];
        _car.year = 2002;
        delete _car.owner;

        delete cars[1];
    }
}
