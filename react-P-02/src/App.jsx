import { useState } from 'react'


function App() {

  let[count,setCount]=useState(1)

  const add =()=>{
    if(count<20){
    count = count + 1
    setCount(count);
  }
  else{
    console.log("its 20");
  }

  }
  const remove =()=>{
    
    if(count>=1){
      count = count - 1
      setCount(count);
    }
    else{
      console.log("its 0 man");
    }
  }

  return (
<>
    <h1>hello harsh</h1>
    <p>count is : {count}</p>
    <button onClick={add}>add num</button>
    <button onClick={remove}>remove num</button>
</>
  )
}

export default App
