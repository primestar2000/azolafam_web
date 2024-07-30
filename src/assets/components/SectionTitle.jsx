import React from 'react'

export default function SectionTitle({title, color}) {
  return (
    <div className={`text-[32px] ${color && `text-[${color}]`} font-[900] text-center my-[32px] w-fit mx-auto`}>
      { title }
      <span className='bg-[#52A742] backdrop-blur-sm h-[4px] w-[60%] block m-[auto] rounded'></span>
    </div>
  )
}
