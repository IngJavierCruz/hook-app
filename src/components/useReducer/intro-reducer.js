const inititalState = [{
        id: 1,
        todo: 'Comprar audifonos',
        done: false
    }
]

const todoReducer = (state = inititalState, action) => {

    if (action?.type === 'Agregar') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const nuevoTodo = {
    id: 2,
    todo: 'Comprar equipo de pc',
    done: false
}

const agregarTodo = {
    type: 'Agregar',
    payload: nuevoTodo
}


todos = todoReducer(todos, agregarTodo);

console.log(todos);