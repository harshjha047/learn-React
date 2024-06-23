import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>hello</h1>
 <AddTodo/>
 <Todo/>
    </>
  )
}

export default App
