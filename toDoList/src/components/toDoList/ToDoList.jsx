import { useState } from "react"; 

export function ToDoList() {
    const [todoArray, setToDoArray] = useState(['opgave 1', 'Opgave 2'])

    const [name, setName] = useState('')

    const addToArray = () => {
        let clone = [...todoArray]
        clone.push(name)
        console.log(clone);
        setToDoArray(clone)
    }

    const removeFromArray = () => {
        let slet = [...todoArray]
        slet.pop(name)
        console.log(slet);
        setToDoArray(slet)
    }

    return(
        <>
            {todoArray.map((item, index)=>
                <div key={index}>
                    <p >{item}</p>
                    <button onClick={removeFromArray}>Delete</button>
                </div>
            )}
            <input placeholder={"Tilføj en opgave"} value={name} onChange={(event) => setName(event.target.value)} />
            <button onClick={addToArray}>Tilføj</button>
        </>
    )


}