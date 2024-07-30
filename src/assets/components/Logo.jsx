import React from 'react'
import LogoImage from "../images/logo.png"
export default function ({size}) {
  return (
    <div className='flex items-center'>
        <img src={LogoImage} alt="Azolafam Logo" className={`w-[40px] lg:w-[50px] mr-[8px]`}  />
        <p className='text-white text-[20px] lg:text-[25px]' style={{fontFamily: "YesevaOne"}}>Azolafam</p>
    </div>
  )
}
