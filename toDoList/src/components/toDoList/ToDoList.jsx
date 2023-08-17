import { useState } from 'react';

export function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
    <p>{title}</p>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}
