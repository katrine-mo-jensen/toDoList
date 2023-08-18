import './App.scss'
import { Header } from './components/Header/Header'
import { ToDoList } from './components/toDoList/ToDoList'

function App() {
  
  return (
    <div className='appContainer'>
      <Header />
      <ToDoList />
    </div>
  )
}

export default App
