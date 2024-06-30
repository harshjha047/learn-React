import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import appService from './Appwright/AppService'
import{login,logout}from'./Store/AuthStore'
import {Header,Footer,Home} from './components'
import {Outlet} from "react-router-dom"
import './App.css'

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    appService.getCurrentStatus()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  }, [])

  return !loading ? (<div className=' min-h-screen w-full bg-slate-400'>
    <Header></Header>
    <main>
    <Home></Home> 
    {/* <Outlet/> */}
    </main>
    <Footer></Footer>
    </div>)
    :
    (
  <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
    <span className='sr-only'>Loading...</span>
   <div className='h-8 w-8 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
   <div className='h-8 w-8 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
   <div className='h-8 w-8 bg-slate-300 rounded-full animate-bounce'></div>
 </div>)
}

export default App