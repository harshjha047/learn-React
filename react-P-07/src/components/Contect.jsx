import React from 'react'
import {Link} from 'react-router-dom'

function Contect() {
  return (
    <>
    <main className='w-full flex flex-col items-center bg-[#FCFCFE]'>
    <div className="w-3/4 h-[90vh] flex justify-evenly  items-center mt-14">
        
    <div className="  w-1/2 h-full "><div className=" h-4/5 w-full"><img className=' h-full' src="https://img.freepik.com/premium-vector/businessman-sitting-table-office-flat-style-vector-illustration_1142-112075.jpg" alt="" /></div></div>
    <div className="  w-1/2 h-full ">
    <div className=" w-full h-1/5 flex justify-center items-center font-bold text-7xl"> Contect Us</div>
    <div className=" w-full h-4/5 flex frame justify-center items-center">
    <div className="w-3/5 h-[90%] flex  justify-evenly items-center flex-col">
    <input type="text" className='bg-[#FCFCFE] w-10/12 text-black h-8 outline-none border-b-2 border-zinc-800 ' placeholder='Full Name' />
    <input type="text" className='bg-[#FCFCFE] w-10/12 text-black h-8 outline-none border-b-2 border-zinc-800 ' placeholder='Email' />
    <input type="text" className='bg-[#FCFCFE] w-10/12 text-black h-8 outline-none border-b-2 border-zinc-800 ' placeholder='Message' />
    <Link to="/" className='w-10/12 h-10 rounded-full text-white bg-slate-800 flex justify-center items-center'>Contact Us</Link>
    </div>
    <div className="w-2/5 h-full flex justify-evenly p-2 items-center flex-col">
    <div className=" w-full h-28 flex justify-center  flex-col"><h1 className=' font-semibold text-3xl'>Contect</h1><p>abcd@Email.com</p></div>
    <div className=" w-full h-28 flex justify-center  flex-col"><h1 className=' font-semibold text-3xl'>Based In</h1><p>Noida Sector 31 </p></div>
    <div className=" w-full h-28 flex justify-evenly items-center"><div className="cir"></div>
    <div className="cir"></div>
    <div className="cir"></div></div></div>
    </div>
    </div>
    </div>
    </main>
    </>
  )
}

export default Contect