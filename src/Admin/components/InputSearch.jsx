import React from 'react'

export default function InputSearch({
    height=2,
    width=10,
    searchboxClassname = '',
    inputClassName = '',
    icon,
    paddingY=0,
    paddingX=0,
    ...props 
}) {
  return (
    <div className={`border-1 border-[#DDE1EF] h-[${height}rem] w-[${width}rem]  py-[${paddingY}rem] px-[${paddingX}rem] ${searchboxClassname} flex items-center gap-2` }>
        <span className='text-lg'>{icon}</span>
      <input type="text" className={` ${inputClassName} outline-none`}  {...props} />
    </div>
  )
}
