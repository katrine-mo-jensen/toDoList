import { useState } from 'react';

export function ToDoList() {
    const [todoArray, setToDoArray] = useState(['', ''])

    const [name, setName] = useState('')

    const addToArray = () => {
        let clone = [...todoArray]
        clone.push(name)
        console.log(clone);
        setToDoArray(clone)
    }


    return(
        <>
        {todoArray.map((item, index)=>
            <p key={index}>{item}</p>
        )}
        <input placeholder={"Skriv dit navn her"} value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={addToArray}>Add To Array</button>
        </>
    )
}
