import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, removeTodo, toggleTodo} from "../redux/store";

export const Todolist = () => {

    const dispatch = useDispatch();
    const NewTodo = () => {
        const handleSubmit = (event) => {
            event.preventDefault()
            dispatch(addTodo(event.target.title.value))
            event.target.reset()
            console.log(event.target.title.value)
        }

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add todo" name="title"/>
                <input type="submit"/>
            </form>
        )
    }

    const removeTodolist = (id) => {
        dispatch(removeTodo(id))
    }

    const changeTodolistStatus = (id) => {
        dispatch(toggleTodo(id));
    }

    const todos = useSelector(state => state)
    console.log(todos)
    return (
        <div>
            <NewTodo/>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => {removeTodolist(todo.id)}}>Delete</button>
                        <input type="checkbox" checked={todo.completed} onChange={() => {
                            changeTodolistStatus(todo.id)
                        }}/>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
