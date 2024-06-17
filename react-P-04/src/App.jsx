import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor]=useState("")

  return (
    <>
  <div className=" w-full h-screen"
  style={{backgroundColor:color}}
  >
    <div className=" w-full h-20 flex flex-wrap justify-evenly items-center ">
      <button onClick={()=>{setColor("#000")}} className=" bg-zinc-900 text-white px-6 p-1 rounded-3xl">black</button>
      <button onClick={()=>{setColor("blue")}} className=" bg-blue-500  text-white px-6 p-1 rounded-3xl">blue</button>
      <button onClick={()=>{setColor("red")}} className=" bg-red-500 text-white px-6 p-1 rounded-3xl">red</button>
      <button onClick={()=>{setColor("yellow")}} className=" bg-yellow-500 text-white px-6 p-1 rounded-3xl">yellow</button>
      <button onClick={()=>{setColor("green")}} className=" bg-green-500 text-white px-6 p-1 rounded-3xl">green</button>
      <button onClick={()=>{setColor("#fff")}} className=" bg-zinc-100  px-6 p-1 rounded-3xl">white</button>
    </div>
  </div>
    </>
  )
}

export default App
