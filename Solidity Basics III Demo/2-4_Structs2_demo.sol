// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Todos {
    Todo[] public todos;

    struct Todo {
    string text;
    bool completed;
}
}
