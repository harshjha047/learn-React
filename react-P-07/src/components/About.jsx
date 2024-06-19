import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function About() {
  return (
    <>
        <main className='w-full flex flex-col items-center bg-[#FCFCFE]'>
    <div className="w-3/4 h-[70vh] flex justify-evenly items-center mt-14">
        
    <div className="w-[45%] h-[60vh]"><img className='h-full' src="https://img.freepik.com/premium-vector/businessman-sitting-table-office-flat-style-vector-illustration_1142-112075.jpg" alt="" /></div>
        <div className=" w-[45%] h-[60vh] flex relative items-center">
            <div className="w-full h-[32vh] flex flex-col justify-evenly p-2">
                <h1 className='font-semibold  text-4xl'>About React</h1>
                <h2 className='font-semibold  '>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</h2>
                {/* <h3 className=' ml-auto flex justify-end py-2 text-sm px-10 bg-red-600 rounded-md text-white'>Downloas Now</h3> */}
            </div>
            </div>
    </div>
    </main>
    </>
  )
}

export default About