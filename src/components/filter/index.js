import React, {useContext} from 'react';
import TodoContext from '../context';

const Filter = () => {
    const {filterTodos} = useContext(TodoContext);
    
    return (
        <div className="btn-group btn-group-lg mb-2" role="group" aria-label="...">
            <button
                type="button"
                className="btn btn-success"
                onClick={() => filterTodos(true)}
                >
                Completed</button>
            <button
                type="button"
                className="btn btn-danger"
                onClick={() => filterTodos(false)}
                >
                Uncompleted</button>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => filterTodos()}
                >
                All</button>
        </div>
    );
}


export default Filter;