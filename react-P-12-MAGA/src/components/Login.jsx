import React ,{uesState, useState }from 'react'
import {Link,useNavigate} from'react-router-dom'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {login as authLogin} from '../Store/AuthStore'
import appService from '../Appwright/AppService'
import {Input} from "./index"


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register,handleSubmit}= useForm()
  const {error,setError} = useState("")

  const Login = async(data)=>{
    console.log(data)
    setError('')
    try {
      const session = await appService.login(data)
      if(session){
        const userData = appService.getCurrentStatus()
        if(uesState){
          dispatch(authLogin(userData))
          navigate('/')
        }
      }
      
    } catch (error) {
      setError(error)
    }
  }
  return (
    <>
    <div>Login</div>
    <form onSubmit={handleSubmit(Login)}>
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
          matchPatern:(value)=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || "Enter valid password"
        }
       })}/>
       <button
       type='submit'
       > Login</button>
    </form>
    </>
  )
}

export default Login