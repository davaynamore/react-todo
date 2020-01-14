import React from 'react';
import TodoListItem from '../todo-list-item';
import './todolist.scss';

const TodoList = () => {
    return (
        <ul className="list-group todo-list">
            <TodoListItem />
        </ul>
    )
    
}

export default TodoList;