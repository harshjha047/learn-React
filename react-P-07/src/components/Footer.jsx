import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Footer() {
  return (
    <footer className='w-full h-72  flex justify-center items-center bg-[#FCFCFE]'>
        <div className="w-3/4 h-72 b1 flex justify-evenly items-center flex-col p-1">
            <div className="w-full h-3/4  flex justify-evenly items-center"> 
                <div className=" w-2/4 h-full  flex justify-evenly items-center flex-col">
                    <div className=" w-full h-3/4  flex justify-evenly items-center"><h1 className=' font-black text-7xl'>HELLO</h1></div>
                    <div className=" w-full h-1/5  flex"></div>
                </div>
                <div className=" w-2/4 h-full  flex justify-evenly items-center">
                <ul className=" w-1/6 h-5/6 flex justify-evenly flex-col"><h1 className='font-bold'>Resorces</h1><Link className=' text-gray-800 font-medium text-sm'>Home</Link><Link className=' text-gray-800 font-medium text-sm'>About</Link></ul>
                <ul className=" w-1/6 h-5/6 flex justify-evenly flex-col"><h1 className='font-bold'>Follow Us</h1><Link className=' text-gray-800 font-medium text-sm'>GitHub</Link><Link className=' text-gray-800 font-medium text-sm'>Discord</Link></ul>
                <ul className=" w-2/6 h-5/6 flex justify-evenly flex-col"><h1 className='font-bold'>Legal</h1><Link className=' text-gray-800 font-medium text-sm'>privacy policy</Link><Link className=' text-gray-800 font-medium text-sm'>Terms & Conditions</Link></ul>
                </div>
            </div>
            <div className="w-full h-1/5  flex justify-evenly items-center">
                <div className=" w-2/4 h-full  flex  items-center text-sm"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></div>
                <div className=" w-2/4 h-full  flex relative items-center"><div className=" w-2/3 absolute right-0 flex justify-evenly items-center">
                <div className="cir "></div>
                <div className="cir "></div>
                <div className="cir "></div>
                <div className="cir "></div>
                <div className="cir "></div>
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer