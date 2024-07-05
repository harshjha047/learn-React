import React from 'react'
import {Container,Logout} from './index'
import {Link,NavLink,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'



function header() {
  const authStatus = useSelector((state)=>state.auth?.status)//error
  const navigate = useNavigate()
  const navItems=[
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
      name:"All Posts",
      slug:"/allpost",
      active:authStatus
    },
    {
      name:"Login",
      slug:"/login",
      active:!authStatus
    },
    {
      name:"Sign Up",
      slug:"/signup",
      active:!authStatus
    },
    {
      name:"Add post",
      slug:"/addpost",
      active:authStatus
    },

  ]
  return (
    <>
    <header className='w-full bg-[#00000059] fixed z-10'>
      <Container>
        <nav className='w-full flex justify-between items-center h-14 '> 
          <Link to={"/"} className='w-1/6 h-full flex justify-evenly items-center text-4xl font-semibold text-white'>
            LOGO
          </Link>
          <ul className='h-full flex justify-evenly items-center font-semibold'>
            {navItems.map((item)=> item.active ? (
              <li key={item.name} className=''>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full hover:text-black text-white'
                >
                  {item.name}
                  </button>
              </li>
            ): null)}
          </ul>
          {authStatus && (
            <li><Logout/></li>
          )}
        </nav>
      </Container>
    </header>
    </>
  )
}

export default header