import React, {useContext} from 'react';
import TodoContext from '../context';

import './counter.scss';

const Counter = () => {
    const {todos} = useContext(TodoContext);
    const uncomplitedCount = todos.filter(todo => todo.completed === false).length
    const complitedCount = todos.filter(todo => todo.completed === true).length
    return (
        <ul className="todo-counter">
            <li className="todo-counter__item">
                <span className="todo-counter__text">uncompleded todos: {uncomplitedCount}</span>
            </li>
            <li className="todo-counter__item">
                <span className="todo-counter__text">compleded todos: {complitedCount}</span>
            </li>
            <li className="todo-counter__item">
                <span className="todo-counter__text">total todos: {todos.length}</span>
            </li>
        </ul>
    );
}

export default Counter;