import React from 'react'

const TodoListItem = ({ todo, index, handleDelete, handleToogle }) => {
    
    return (
        <li 
            className="list-group-item" 
            key={todo.id}>

            <p className={ `${ todo.done ? 'complete': '' }` } 
                onClick={ () => handleToogle(todo.id) }
            >
                { index + 1 }. { todo.description }
            </p>

            <button 
                onClick={ () => handleDelete(todo.id) }
                className="btn btn-danger">
                Borrar
            </button>
        </li>
    )
}

export default TodoListItem;