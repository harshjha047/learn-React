import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import '../App.css'
// import( useLoaderData)
function GitHub() {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/harshjha047')
    //     .then(responce=> responce.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <>

    
    <main className='w-full flex flex-col items-center bg-[#FCFCFE]'>
    <div className="w-3/4 h-[70vh] flex justify-center items-center mt-14">
        
    <div className="w-[45%] h-[60vh] flex justify-center items-center ">
        <div className="dp"style={{backgroundImage:`URL(${data.avatar_url})`}}></div>
        </div>
        <div className=" w-[45%] h-[60vh] flex items-center">
            <div className="w-full h-full flex flex-col justify-evenly p-2 ">
                <h1 className='font-semibold  text-4xl'>{data.name}</h1>
                <h1 className=' text-2xl font-semibold'>#{data.login}</h1>
                <h1 className=' text-2xl font-semibold'>{data.location}</h1>
                <div className=" h-[35%] w-full  flex justify-center items-center flex-col">
                    <div className=" w-full h-2/5  flex justify-evenly items-center ">
                    <div className=" w-2/5 h-[88%] rounded-md flex justify-evenly items-center text-xl font-semibold">Following : {data.following}</div>
                    <div className=" w-2/5 h-[88%] rounded-md flex justify-evenly items-center text-xl font-semibold">Repository : {data.public_repos}</div>
                    </div>
                    <div className=" w-full h-2/5 flex justify-evenly items-center ">
                    <Link to={`${data.html_url}`} className=" w-full h-full rounded-md flex justify-evenly items-center text-xl font-semibold bg-red-600 text-white">Followers : {data.followers}</Link>
                    </div>
                </div>
            </div>
            </div>
    </div>
    </main>
    {/* <h1 className=' text-2xl font-semibold'>followers: {data.followers}</h1> */}

    </>
  )
}

export default GitHub

export const githubInfoLoader = async ()=>{
  const responce = await fetch('https://api.github.com/users/harshjha047')
    return responce.json()
}