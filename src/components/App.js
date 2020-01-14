import React, { useEffect, useState } from 'react';
import TodoList from './todo-list';
import Loader from './loader';
import Counter from './counter';
import Filter from './filter';
import TodoService from '../service';
import TodoContext from '../components/context';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    const todos = new TodoService();
    todos.getAllTodos()
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
        }, 3000);
      })
  }, []);

  const clickHandle = (id, type) => {
    let newTodos = todos.slice();
    const targetTodoIndex = newTodos.findIndex(todo => todo.id === id);

    if (type === 'change') {
      newTodos[targetTodoIndex].completed = !newTodos[targetTodoIndex].completed;
      setTodos(newTodos)
    } else if (type === 'delete') {
      setTodos([
        ...newTodos.slice(0, targetTodoIndex),
        ...newTodos.slice(targetTodoIndex + 1),
      ])
    }    
  }

  const filterTodos = (type) => {
    switch(type){
      case true:
        setFilter(true)
        break;
      case false:
        setFilter(false)
        break;
      default:
        setFilter()
        break;
    }
  }

  const contextValue = {
    todos,
    filter,
    clickHandle,
    filterTodos
  }

  return (
    <TodoContext.Provider value={contextValue}>

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Todo list</h1>
          </div>
        </div>
        {todos.length ? (
          <React.Fragment>
            <div className="row">
              <div className="col">
                <Counter />
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Filter />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <TodoList />
              </div>
            </div>
            </React.Fragment>
        ) : <Loader />}
      </div>

    </TodoContext.Provider>
  );
}

export default App;
