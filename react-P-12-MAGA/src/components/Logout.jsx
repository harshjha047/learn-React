import React from 'react'
import appService from '../Appwright/AppService'
import {logout} from '../Store/AuthStore'
import { useDispatch } from 'react-redux'

function Logout() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        appService.logout()
        .then(()=>{
            dispatch(logout())
        })
        .catch(()=>{console.log("Failed to log out")})
        
    }
  return (
    <button onClick={logoutHandler}>Logout</button>
  )
}

export default Logout