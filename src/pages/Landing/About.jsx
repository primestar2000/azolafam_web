import React from 'react'
import bgMobile from "../../assets/images/aboutBgMobile.jfif"
import AboutBg from "../../assets/images/aboutBg.jfif"
import SectionTitle from '../../assets/components/SectionTitle'
export default function About() {
  return (
    <div className='w-full   ' style={{ backgroundImage: `url(${bgMobile})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "center" }}>
        <div className='w-full h-full bg-[#214E3480] backdrop-blur-0 p-[32px] flex flex-col gap-[24px]'>
            <SectionTitle title={"About"} color={"#FFFFFF"} />
            <div className='w-full'>
                <h2 className='text-white leading-18 text-[21px] font-[700] text-center mb-[8px]'>Our Mission</h2>
                <p className='text-white leading-18 text-[18px] font-[400] text-center'>Azolafam is dedicated to bridging the gap between farmers and buyers, creating a transparent and equitable agricultural marketplace that fosters sustainability, profitability, and community growth. We strive to empower farmers, delight customers, drive innovation in the agricultural industry, and bring light to the agricultural sector of the world, by creating a mobile platform for Farmers and Buyers (consumers) to meet and transact business at the best price.</p>
            </div>
            <div className='w-full'>
                <h2 className='text-white leading-18 text-[21px] font-[700] text-center mb-[8px]'>Our Vision</h2>
                <p className='text-white leading-18 text-[18px] font-[400] text-center'>To be the world's Leading agricultural E-Commerce platform, revolutionizing the way farmers and buyers connect, trade, and grow. Azolafam aims to create a future where agriculture is sustainable, profitable, and accessible to all, driving economic development, social progress, and environmental stewardship.</p>
            </div>
        </div>
    </div>
  )
}
