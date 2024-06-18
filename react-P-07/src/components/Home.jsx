import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <main className='w-full flex flex-col items-center bg-[#FCFCFE]'>
    <div className="w-3/4 h-[70vh] flex justify-evenly items-center mt-14">
        <div className="w-[45%] h-[60vh]"><img className='h-full' src="https://img.freepik.com/premium-vector/businessman-sitting-table-office-flat-style-vector-illustration_1142-112075.jpg" alt="" /></div>
        <div className=" w-[45%] h-[60vh] flex relative items-center">
            <div className="w-full h-[32vh] flex flex-col justify-evenly">
                <h1 className='font-semibold text-right text-5xl'>Download Now</h1>
                <h2 className='font-semibold text-right text-3xl'>Lorem, ipsum.</h2>
                <h3 className=' ml-auto flex justify-end py-2 text-sm px-10 bg-red-600 rounded-md text-white'>Downloas Now</h3>
            </div>
            </div>
    </div>
    <div className="w-3/4 h-[60vh] flex justify-evenly items-center ">
        <div className="w-[45%] h-[60vh]"><img className='h-full' src="https://img.freepik.com/premium-vector/businessman-sitting-table-office-flat-style-vector-illustration_1142-112075.jpg" alt="" /></div>
 
    </div>
    </main>
    </>
  )
}

export default Home