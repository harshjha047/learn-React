import React from 'react'
import {Container,Logout} from './index'
import {Link,useNavigate} from 'react-router-dom'
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
    <header>
      <Container>
        <nav>
          <Link to={"/"}>
            LOGO
          </Link>
          <ul>
            {navItems.map((item)=> item.active ? (
              <li key={item.name}>
                <Link to={navigate(item.slug)}>{item.name}</Link>
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