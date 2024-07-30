import React, { useContext, useState } from 'react'
import { LandingPageContext } from '../context/LandingPage';

export default function SideNav({openedNav}) {
  const {sideNavActive, setSideNavActive} = useContext(LandingPageContext);

  return (
    <div className={`z-10 absolute lg:hidden top-0  w-full h-[100vh]  ${sideNavActive && "bg-[#00000080]"} flex ${sideNavActive ? "left-[0]" : "left-[-100%]"} transition-all ease-out delay-75 `}>
        <div className='h-full w-[314px] bg-white p-[20px] pt-[50px] '>
            <p className='text-[23px] font-[400] mb-[33px]' style={{fontFamily: "YesevaOne"}}>Menu</p>
            <ul className='text-[16px] font-[400] flex flex-col gap-[24px] text-[#163423] '>
                <li className='leading-16'>Home</li>
                <li className='leading-16'>About Us</li>
                <li className='leading-16'>How it Works</li>
                <li className='leading-16'>Why Choose Us</li>
                <li className='leading-16'>Blog</li>
            </ul>
            <div className='flex items-center justify-center gap-[32px]  mt-[33px]'>
              <button className='text-[16px] text-[#52A742] font-[700]'>Log In</button>
              <button className='h-[40px] w-[125px] bg-[#52A742] rounded-[16px] flex justify-center items-center text-[16px] text-[#FFFFFF] font-[700]'>
                Sign Up
              </button>
            </div>
        </div>
        <div className='flex-1 ' onClick={()=>{setSideNavActive(false)}}>

        </div>
    </div>
  )
}
