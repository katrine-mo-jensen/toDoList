import { useState } from "react"; 

export function ToDoList() {
    const [todo, setTodo] = useState('')
    return (
    <>
    <input type="text" onInput={event => setToDo(event.target.value)}/>
    <button onClick={}></button>
    </>
    )
}