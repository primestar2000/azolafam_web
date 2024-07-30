import React from 'react';

export default function HowitWorksCards({ title, content, position, bgColor, imageFile }) {
    if (position === "left") {
        return (
            <div className={`w-[286px] lg:w-[350px] h-[107px] lg:h-[132px] ${bgColor} rounded-[16px] flex justify-center items-center`}>
                <div className='rounded-full w-[75px] h-[75px] bg-white flex justify-center items-center'>
                    <img src={imageFile} alt="" className='w-[45px] lg:w-[60px]' />
                </div>
                <div className='flex flex-col w-[70%] px-[13px]'>
                    <h3 className='font-[700] text-[16px] text-[#34434B]'>{title}</h3>
                    <p className='text-[12px] font-[400] text-[#34434B]'>{content}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className={`self-end w-[286px] lg:w-[350px] h-[107px] lg:h-[132px] ${bgColor} rounded-[16px] flex flex-row-reverse justify-center items-center`}>
                <div className='rounded-full w-[75px] h-[75px] bg-white flex justify-center items-center'>
                    <img src={imageFile} alt="" className='w-[45px] lg:w-[60px]' />
                </div>
                <div className='flex flex-col w-[70%] px-[13px]'>
                    <h3 className='font-[700] text-[16px] text-[#34434B]'>{title}</h3>
                    <p className='text-[12px] font-[400] text-[#34434B]'>{content}</p>
                </div>
            </div>
        );
    }
}
