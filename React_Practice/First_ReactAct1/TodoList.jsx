import { Component } from 'react';
import React from 'react';

class TodoList extends React.Component {
    render() {
        return(
            <div>
                <p>My To-Do List</p>
                <h3>* Sweeping Dust Inside & Debris Outside</h3>
                <h3>* Washing Dishes</h3>
                <h3>* Cleaning Top Counters & Tables</h3><br/>
            </div>
        );
    }
}

export default TodoList;
