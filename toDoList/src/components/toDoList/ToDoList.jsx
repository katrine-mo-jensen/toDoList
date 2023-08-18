import { useState } from "react";
import style from "./toDoList.module.scss";
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'

export function ToDoList() {
  const [todoArray, setToDoArray] = useState(["Køb havremælk", "Lav SCSS færdig"]);

  const [name, setName] = useState("");

  const addToArray = () => {
    let clone = [...todoArray];
    clone.push(name);
    console.log(clone);
    setToDoArray(clone);
  };

  const removeFromArray = () => {
    let slet = [...todoArray];
    slet.pop(name);
    console.log(slet);
    setToDoArray(slet);
  };

  return (
    <section className={style.toDo}>
      {todoArray.map((item, index) => (
        <div className={style.theList} key={index}>
          <p>{item}</p>
          <button onClick={removeFromArray}> <img src={minus} alt="" /> </button>
        </div>
      ))}

      <div className={style.inputAndAdd}>
      <input
        placeholder={"Tilføj en opgave"}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button className="addNew" onClick={addToArray}><img src={plus} alt="" /></button>
      </div>
    </section>
  );
}
