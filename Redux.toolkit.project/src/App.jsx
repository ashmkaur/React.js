import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodos'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-3xl font-bold'>Huhhaaaaa punjabi aage oyeeeeee</div>
      <AddTodo/>
      <Todos/>

    </>
  )
}

export default App
