import React from 'react'
import SectionTitle from '../../assets/components/SectionTitle'
import HowitWorksCards from '../../assets/components/HowitWorksCards'
import image1 from "../../assets/images/profile.png"
import image2 from "../../assets/images/mall.png"
import image3 from "../../assets/images/plus.png"
import image4 from "../../assets/images/cash.png"
import iphone from "../../assets/images/iphone2.png"
import playstore from "../../assets/images/playstore.png"
import appStore from "../../assets/images/appStore.png"
export default function HowItWorks() {
  return (
    <div className='max-w-[724px] mx-auto flex flex-col '>
        <SectionTitle title={"How it Works"} />
        <div className='py-[32px]'>
            <div className='flex flex-col lg:h-[254px] lg:flex-row justify-between gap-[16px]  p-[20px]'>
                <HowitWorksCards imageFile={image1} bgColor={"bg-[#D2DBE0]"} position={"left"} title={"Create your profile"} content={"Fill basic information requested by the app and get verified."}/>
                <HowitWorksCards imageFile={image2} bgColor={"bg-[#FFF2CC]"} position={"right"} title={"Explore the market"} content={"Browse through our vast collection of produce, equipment and services."}/>
            </div>
            <div className='flex flex-col lg:h-[254px] md:mt-[-10%] lg:flex-row justify-between gap-[16px]  p-[20px]'>
                <HowitWorksCards imageFile={image3} bgColor={"bg-[#BDE2B6]"} position={"left"} title={"Create your profile"} content={"Fill basic information requested by the app and get verified."}/>
                <HowitWorksCards imageFile={image4} bgColor={"bg-[#DCEFDD]"} position={"right"} title={"Explore the market"} content={"Browse through our vast collection of produce, equipment and services."}/>
            </div>
        </div>
        <div className='w-full py-[64px] flex flex-col items-center justify-center'>
            <div className='relative  w-[130px] h-[130px] bg-[#52A742] rounded-full overflow-ellipsis'>
                <img src={iphone} alt="phone image" className='relative w-[162.5px] h-[162.5px] top-[-32.44px] left-[1.39px]'/>
            </div>
                <h2 className='text-[#163423] text-[25px] text-center font-[700]'>Download Azolafam app</h2>
                <p className='font-[400] text-[#163423] text-[21px] text-center'>Available on</p>
                <div className='w-[281px] h-[44px] flex justify-between mt-[12px]'>
                    <button className='bg-[#214E34] w-[137px] h-full rounded-[8px] gap-[8px] text-white font-bold flex justify-center items-center'>
                        <img src={playstore} alt="" className='w-[35px] h-[35px]' />
                        Playstore
                    </button>
                    <button className='bg-[#214E34] w-[137px] h-full rounded-[8px] gap-[8px] text-white font-bold flex justify-center items-center'>
                        <img src={appStore} alt="" className='w-[35px] h-[35px]' />
                        Playstore
                    </button>
                </div>
        </div>
    </div>
  )
}
