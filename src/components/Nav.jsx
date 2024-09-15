import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo.png"
import Link from 'next/link'
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets:["latin"]
})
 
export default function Nav() {
  return (
    <nav className='select-none w-screen flex justify-between h-20 bg-white px-10 items-center shadow-md'>
        <div className=" logo w-[120px] h-[68px]">
           <Link href=""><Image src={logo} /></Link>
        </div>
        <Link href={""} className={`bg-[#6E76E5] text-white w-28 h-9 p-2 flex justify-center items-center rounded-[40px] font-bold hover:shadow-md hover:bg-[#6369c6] ${poppins.className}`}>Join Now</Link>
        
    </nav>
  )
}
