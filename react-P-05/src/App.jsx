import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length,setLength]=useState(8)
  const [Char,setChar]=useState(false)
  const [number,setNumber]=useState(false)
  const [password,setPassword]=useState("")


  const passwordRef = useRef(null)
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    console.log("copy");
  },[password])
  const  passwordGenerator = useCallback(()=>{
    console.log("new")
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number){str+="0123456789"}
    if(Char){str+="!@#$%^&*()_+-={}[]|:;'<>,.?/~`"}
    for (let i = 1; i <= length; i++) {
      let cher = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(cher);
    }
    setPassword(pass)
    console.log("new")
  }, [length,Char,number,setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,Char,number,passwordGenerator])

  return (
    <>
  <div className="w-full max-w-md bg-black mx-auto rounded-2xl px-4 my-8 text-white">
    <input 
    type="text" 
    value={password} 
    placeholder='Password' 
    className=' w-11/12 m-4 rounded-md text-blue-500 px-2 py-1 font-semibold: outline-none' 
    readOnly
    ref={passwordRef}
    />
    <button className='m-2' onClick={copyPassword}>copy</button>
    <button className='m-2' onClick={passwordGenerator}>new</button>
    <div className="w-full">
      <input 
      type="range" 
      className='my-3 mx-1'   
      min={8} 
      max={100} 
      onChange={(a)=>{setLength(a.target.value)}} 
      value={length} 
      id='length'
       /> 
      <label htmlFor="length" className=''>length-{length}</label>
      <input 
      type="checkbox" 
      id='number'
      className='mx-2'
      onChange={()=>{setNumber((prev)=>!prev)}}
      defaultChecked={number}
      /> 
      <label htmlFor="number">Number</label>
      <input 
      type="checkbox" 
      id='Char' 
      className='mx-2' 
      onChange={()=>{setChar((prev)=>!prev)}} 
      defaultChecked={Char} 
      />
      <label htmlFor="Char">Character</label>
         </div>
  </div>
    </>
  )
}

export default App

