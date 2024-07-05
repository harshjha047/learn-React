import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children,authentication=true}) {
    const [loader,setloader] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth?.status)
    useEffect(()=>{
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setloader(false)
    },[authStatus,authentication,navigate])

  return loader ? <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'><span className='sr-only'>Loading...</span><div className='h-8 w-8 bg-slate-950 rounded-full animate-bounce [animation-delay:-0.3s]'></div><div className='h-8 w-8 bg-slate-950 rounded-full animate-bounce [animation-delay:-0.15s]'></div><div className='h-8 w-8 bg-slate-950 rounded-full animate-bounce'></div></div> : <>{children}</>;
  
}
