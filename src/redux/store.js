import {createStore} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
// Reducer
const todolistReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {id: Date.now(), title: action.title, completed: false}]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'CHANGE_STATUS':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}

// action creators

export const addTodo = (title) => ({
    type: 'ADD_TODO',
    title
})

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id
})

export const toggleTodo = (id) => ({
    type: 'CHANGE_STATUS',
    id
})
export const store = createStore(
    todolistReducer, devToolsEnhancer()
);
