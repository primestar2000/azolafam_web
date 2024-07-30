import React, { useContext } from 'react'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { LandingPageContext } from '../context/LandingPage';
export default function NavBar() {
  const {sideNavActive, setSideNavActive} = useContext(LandingPageContext);
  return (
    <div className='w-full h-[60px] lg:h-[100px] bg-[#16342399]  backdrop-blur-sm  flex items-center justify-between px-[20px] lg:px-[100px] '>
        <Logo />
        <div className='max-w-[500px] flex-1 hidden lg:block '>
            <ul className='flex justify-evenly text-[18px] text-[#FFFFFF80]'>
                <li>Home</li>
                <li>About</li>
                <li>How it Works</li>
                <li>Why Choose Us</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className=' gap-[20px] items-center hidden lg:flex '>
            <p className='font-[700] text-[18px] text-white'>Log In</p>
            <button className='w-[125px] h-[47px] bg-[#FFFFFF] rounded-[16px] text-[18px] font-[700] text-[#163423]'>Sign Up</button>
        </div>
        <button onClick={()=>{setSideNavActive(true)}}>
          <FontAwesomeIcon icon={faBars} className='text-[20px] text-white lg:hidden' />
        </button>
    </div>
  )
}
