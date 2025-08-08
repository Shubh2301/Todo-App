import { useEffect, useState } from "react"
import { MdCheck, MdDeleteOutline } from "react-icons/md";
import "./Todo.css"


export const Todo = () => {
    const [inputValue, setInputValue] = useState("");

    const [task, setTask] = useState([]);

    const[dateTime,setDateTime]=useState("")


    const handleInputChange = (value) => {
        setInputValue(value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    }

    //todo date and time

    useEffect(()=>{
        const interval=setInterval(() => {
        const now = new Date();
        const updatedDate = now.toLocaleDateString();
        const updatedTime = now.toLocaleTimeString();
        setDateTime(`${updatedDate} - ${updatedTime}`)
    }, 1000)
    return()=>clearInterval(interval);


    },[]);



    

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" autoComplete="off" className="todo-input" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                    <button type="submit" className="todo-btn">Add Task</button>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask, idx) => {
                            return <li key={idx} className="todo-item">
                                <span>{currTask}</span>
                                <button className="check-btn">
                                    <MdCheck />
                                </button>
                                <button className="delete-btn">
                                    <MdDeleteOutline />
                                </button>
                            </li>
                        })
                    }
                </ul>

            </section>
        </section>
    )
}