import './App.scss'
import { Header } from './components/Header/Header'
import { ToDoList } from './components/toDoList/ToDoList'
import { AddTodo } from './components/toDoList/ToDoList'


function App() {
  
  return (
    <div className='appContainer'>
      <Header />
      <ToDoList />
      <AddTodo/>
    </div>
  )
}

export default App
