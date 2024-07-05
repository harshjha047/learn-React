import React, { useId } from 'react'

const Input=React.forwardRef(function Input({
    label,
    type="text",
    className="",
   ...props
},ref) {
    const id = useId();
  return (
    <div className='w-full'>
        {label && <label className=' text-xl' htmlFor={id}>{label}</label>}
        <input 
        type={type}
        className={` outline-none flex flex-col bg-transparent border-b-2 w-full border-black ${className}`}
        ref={ref}
        id={id}
        {...props}

         />
    </div>
  )
})

export default Input