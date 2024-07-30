import React, { useState } from 'react'
import Header from './Header'
import NavBar from '../../assets/components/NavBar'
import SideNav from '../../assets/components/SideNav'
import { LandingPageContext } from '../../assets/context/LandingPage'
import About from './About'
import HowItWorks from './HowItWorks'
import WhyChooseUs from './WhyChooseUs'
export default function LandingPage() {
  const [sideNavActive, setSideNavActive] = useState(false);
  return (
    <>
    <LandingPageContext.Provider value={{sideNavActive, setSideNavActive}}>
        <Header>
            <NavBar />
        </Header>
        <SideNav />
        <About />
        <HowItWorks />
        <WhyChooseUs />
    </LandingPageContext.Provider>
    </>

  )
}
