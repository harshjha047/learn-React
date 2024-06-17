import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline bg-green-400" >Hello Harsh </h1>
    <Card name="laptop" />
    <Card name="computer" />
    </>
  )
}

export default App
