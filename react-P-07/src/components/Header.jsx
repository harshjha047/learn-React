import React from 'react'
import {Link,NavLink} from "react-router-dom"
import '../App.css'

function Header() {
  return (
    <header className=' w-full h-16  flex justify-center items-center fixed bg-[#FCFCFE] z-10 '>
    <nav className=' w-3/4 h-16  flex justify-between items-center b1 '>
      <div className=' w-2/12 h-16  flex justify-evenly items-center  '><h1 className=' font-bold text-2xl'>LOGO</h1></div>
      <div className=' w-5/12 h-16  flex justify-evenly items-center'>
      <NavLink className={({isActive})=>`${isActive ? " text-red-600" :" text-zinc-800"} font-semibold text-base`} to="/">Home</NavLink>
      <NavLink className={({isActive})=>`${isActive ? " text-red-600" :" text-zinc-800"} font-semibold text-base`} to="/about">About</NavLink>
      <NavLink className={({isActive})=>`${isActive ? " text-red-600" :" text-zinc-800"} font-semibold text-base`} to="/contect">Contact</NavLink>
      <NavLink className={({isActive})=>`${isActive ? " text-red-600" :" text-zinc-800"} font-semibold text-base`} to="/gitHub">GitHub</NavLink>
      </div>
      <div className=' w-1/5 h-16  flex justify-evenly  items-center  '>
      <Link className='font-semibold'>Log in</Link>
      <Link  className=' font-semibold px-5 py-1 bg-red-500 rounded-md text-white'>Get Started</Link>
      </div>
    </nav>
  </header>
  )
}

export default Header