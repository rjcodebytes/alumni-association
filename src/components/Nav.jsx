import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo.png"
import Link from 'next/link'
export default function Nav() {
  return (
    <nav className='w-screen lg:h-20 bg-white px-10 py-2 shadow-md'>
        <div className="logo w-[115px] h-[62px]">
           <Link href=""><Image src={logo} /></Link>
        </div>
        <Link>Join</Link>
    </nav>
  )
}
