import React, { useContext } from 'react';
import TodoContext from '../context';

const TodoListItem = () => {
    const {todos, filter, clickHandle} = useContext(TodoContext);

    return (
        todos
            .filter(todo => filter !== undefined ? filter === todo.completed : todo)
            .map(({id, title, completed}) => {
                return (
                    <li key={id} className='list-group-item todo-list__item'>
                        <label className='todo-list__label'>
                            <span>
                                <input
                                    checked={completed}
                                    type="checkbox"
                                    className='todo-list__input'
                                    onChange={() => clickHandle(id, 'change')}
                                />
                                <span className="todo-list__item-title">{title}</span>
                            </span>
                            
                            <button
                                type="button"
                                className="btn btn-danger todo-list__btn"
                                onClick={() => clickHandle(id, 'delete')}
                                >Delete</button>
                        </label>
                    </li>    
                )
            })
    );
}

export default TodoListItem;