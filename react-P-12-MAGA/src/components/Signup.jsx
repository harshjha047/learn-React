import React, { useState } from 'react'
import appService from '../Appwright/AppService'
import { useDispatch } from 'react-redux'
import {login} from '../Store/AuthStore'
import { useNavigate } from 'react-router-dom';
import {Input} from './index'
import {useForm} from 'react-hook-form'

function Signup() {

    const {error,setError} = useState;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm()

    const Create = (data)=>{
        console.log(data)
        setError('')
        try {
            const user = appService.createAccount(data)
            if (user) {
                const userStatus = appService.getCurrentStatus()
                if (userStatus) {
                    dispatch(login(userStatus))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.massage)
        }

    }
  return (
    <>
    <div className="">SignUp</div>
    <form onSubmit={handleSubmit(Create)}>
    <Input 
    label="name"
    type="text"
    placeholder='Full Name'
    {...register("name",{required:true})}
    />
    <Input 
      name='Email'
      label="Email"
      type="email"
      placeholder='Enter Email'
      {...register("Email",{
        required: true,
        validate:{
          matchPatern:(value)=>/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Enter a valid email",
        }
      })}/>
       <Input 
       name='Password'
       label= 'Password'
       type='password'
       placeholder='Enter Password'
       {...register("Password",{
        required:true,
        validate:{
          matchPatern:(value)=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || "Enter valid password",
        }
       })}/>
       <button
       type='submit'
       > Sign Up</button>
    </form>
    </>
  )
}

export default Signup