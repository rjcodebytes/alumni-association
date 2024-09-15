import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"]
})
export default function Comp1() {
    return (
        <div className='w-full mx-auto flex flex-col '>
            <div className='items-start px-1 lg:px-11 py-2 lg:py-6'>
                <div className='w-full text-gray-400'>
                    <p className={`${poppins.className} text-[26px] md:text-[60px] lg:text-[60px] font-semibold`}>Reunite,Engage,</p>
                </div>
            </div>
            <div className='py-3 mx-auto w-full h-fit flex-col lg:flex-row md:flex-row shadow-lg md:h-[150px] md:w-[1000px] lg:h-[150px] lg:w-[1000px] rounded-[30px] bg-[#FBF9F9] flex justify-around items-center'>
                <div className='flex flex-col my-2  justify-between items-center'>
                    <p className={`${poppins.className} text-[30px] lg:text-[48px] font-semibold bg-gradient-to-r text-transparent from-[#6EE5D0] to-[#2629B4] bg-clip-text`}>1000+</p>
                    <p className={`${poppins.className} font-semibold text-28px lg:text-lg text-gray-400`}>Alumni Registered</p>
                </div>
                <div className='flex flex-col my-2 justify-between items-center'>
                    <p className={`${poppins.className} text-[30px] lg:text-[48px] font-semibold bg-gradient-to-r text-transparent from-[#6EE5D0] to-[#2629B4] bg-clip-text`}>500+</p>
                    <p className={`${poppins.className} font-semibold text-28px lg:text-lg text-gray-400`}>Successfull Connections</p>
                </div>
                <div className='flex flex-col my-2 justify-between items-center'>
                    <p className={`${poppins.className} text-[30px] lg:text-[48px] font-semibold bg-gradient-to-r text-transparent from-[#6EE5D0] to-[#2629B4] bg-clip-text`}>95%</p>
                    <p className={`${poppins.className} font-semibold text-28px lg:text-lg text-gray-400`}>Satisfication Rate</p>
                </div>
            </div>
        </div>
    )
}
