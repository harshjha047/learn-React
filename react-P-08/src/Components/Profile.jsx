import { useContext } from "react"
// import React from 'react'
import UserContext from "../Context/UserContext"


function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1>login first</h1>
    else return <div className="">Welcome {user.username}</div>
    
}

export default Profile