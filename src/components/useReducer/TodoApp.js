import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer';
import TodoList from './TodoList';

import './styles.css';
import TodoAdd from './TodoAdd';

const initialState = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [todos, dispatch ] = useReducer(todoReducer, [], initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    
    const handleDelete = (todoId) => {
        dispatch({ 
            type: 'delete', 
            payload: todoId 
        });
    }
    
    const handleToogle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        handleDelete={ handleDelete }
                        handleToogle={ handleToogle } />
                </div>

                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo } 
                    />
                </div>
            </div>
            

        </div>
    )
}

