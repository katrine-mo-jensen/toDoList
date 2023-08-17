import './App.scss'
import { Header } from './components/Header/Header'
import { AddTodo } from './components/toDoList/ToDoList'

function App() {
  
  return (
    <div className='appContainer'>
      <Header />
      <AddTodo/>
    </div>
  )
}

export default App
