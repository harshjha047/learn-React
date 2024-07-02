import React, { forwardRef, useId } from 'react'

function Select({
    name,
    options,
    label,
    className,
   ...props
},ref) {
   const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor="id" className=''></label>}
        <select 
        name={name} 
        id={id}
        className={`bg-white ${className}`}
        ref={ref}  
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)