import { useEffect, useState } from "react"
import "./Todo.css"
import {TodoForm} from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
    
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
            if (!inputValue) return;
            if (task.includes(inputValue))return;
            setTask((prevTask) => [...prevTask, inputValue]);   
        }
   
    //todo handleDeleteTodo function
    const handleDeleteTodo=(value)=>{
        const updatedTask=task.filter((currTask)=>currTask !== value );
        setTask(updatedTask); 
    }

   // todo handleClearTodoData function
   const handleClearTodoData=()=>{
    setTask([])
   }

   
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate/>
            </header>
            <TodoForm  onAddTodo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask, idx) => {
                            return (
                                <TodoList key={idx} data={currTask} onHandleDeleteTodo={handleDeleteTodo} />
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}


