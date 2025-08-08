import React from 'react'
import {useState } from "react"

export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState("");

     const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onAddTodo(inputValue)
        setInputValue("");
    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <input type="text" autoComplete="off" className="todo-input" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                <button type="submit" className="todo-btn">Add Task</button>
            </form>
        </section>
    )
}

