import { useEffect, useState } from "react"
import "./Todo.css"
import {TodoForm} from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData,setLocalStorageTodoData} from "./TodoLocalStorage";



// const getLocalStorageTodoData=()=>{
    

// }
export const Todo = () => {
    const [task, setTask] = useState(()=>getLocalStorageTodoData());

    const handleFormSubmit = (inputValue) => {
        const{id,content,checked}=inputValue;

            if (!content) return;

            const ifTodoContentMatched=task.find((currTask)=>currTask.content===content);
            if (ifTodoContentMatched)return;

            setTask((prevTask) => [...prevTask, {id,content,checked}]);   
        };
    //todo add data to localStorage

    setLocalStorageTodoData(task)
    
   
    //todo handleDeleteTodo function
    const handleDeleteTodo=(value)=>{
        const updatedTask=task.filter((currTask)=>currTask.content !== value );
        setTask(updatedTask); 
    }

   // todo handleClearTodoData function
   const handleClearTodoData=()=>{
    setTask([])
   }
  
   //todo handleCheckedTodo function

   const handleCheckedTodo=(content)=>{
    const upadtesTask=task.map((currTask)=>{
        if(currTask.content===content){
            return{...currTask,checked:!currTask.checked}
        }else{
            return currTask;
        }
    });
    setTask(upadtesTask);

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
                        task.map((currTask) => {
                            return (
                                <TodoList key={currTask.id} data={currTask.content} onHandleDeleteTodo={handleDeleteTodo}
                                checked={currTask.checked}
                                onHandleCheckedTodo={handleCheckedTodo} />
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


