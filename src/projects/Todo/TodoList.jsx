import React from 'react'
import { MdCheck, MdDeleteOutline } from 'react-icons/md'

export const TodoList = ({data,checked,onHandleDeleteTodo,onHandleCheckedTodo}) => {
    return (
        <li 
         className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                <MdDeleteOutline />
            </button>
        </li>
    )
}

