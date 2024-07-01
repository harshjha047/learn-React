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
        {label && <label className='' htmlFor={id}>{label}</label>}
        <input 
        type={type}
        className={` bg-white ${className}`}
        ref={ref}
        id={id}
        {...props}

         />
    </div>
  )
})

export default Input