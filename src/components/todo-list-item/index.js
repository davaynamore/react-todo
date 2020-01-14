import React, { useContext } from 'react';
import TodoContext from '../context';

const TodoListItem = () => {
    const {todos, filter, clickHandle} = useContext(TodoContext);

    return (
        todos.map(({id, title, completed}) => {
            let classNames = ['list-group-item', 'todo-list__item'];
            if (filter === completed || filter === undefined) {
                classNames.push('visible');
            }
            return (
                <li key={id} className={classNames.join(' ')}>
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