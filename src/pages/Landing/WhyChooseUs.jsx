import React from 'react'
import SectionTitle from '../../assets/components/SectionTitle'
import bg from  ".././../assets/images/grass.jfif"

export default function WhyChooseUs() {
  return (
    <div className='w-full px-[20px] py-[50px]' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "center" }}>
        <div className='w-full bg-[#FFFFFF1A] text-white px-[12px] pb-[32px] flex flex-col  items-center justify-center backdrop-blur-sm rounded-[16px] border-[1px] border-white border-solid'>
            <SectionTitle title={"Why Choose Us"} />
            <div className='mx-[15px]'>
                <ol className='list-decimal'>
                    <li>Wide Range of Listings - Access a diverse selection of produce, equipment, and services.</li>
                    <li>User-Friendly Interface - Navigate and manage your listings with ease.</li>
                    <li>Secure Payments - Trust in our secure transaction system to handle your payments.</li>
                    <li>Community Support - Join a supportive community of farmers and experts.</li>
                </ol>
            </div>
        </div>
    </div>
  )
}
