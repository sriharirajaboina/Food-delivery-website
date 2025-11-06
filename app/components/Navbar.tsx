"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const navItems=[
        {name:"Home",path:"/"},
        {name:"Browser Menu",path:"/browsermenu"},
        {name:"Special Offers",path:"/specialoffers"},
        {name:"Resturants",path:"/restrurants"},
        {name:"Track Order",path:"/trackorder"}
    ]
  return (
    <nav className="md:px-20 py-10">
        <div className="flex items-center justify-between font-semibold text-base">
            <Image
            src="/images/navbar/logo.png"
            alt="logo"
            width={500}
            height={300}
            className="w-50 h-15"/>
            <div className="flex items-center gap-5">
                <ul className="flex items-center gap-10">
                    {
                        navItems.map((items)=>(
                            <li key={items.name}
                            className={`cursor-pointer ${
                                items.name ==="Home" ? "bg-amber-500 py-2 px-8 text-[#ffffff] rounded-full":""
                            }`}>
                                <Link href={items.path}>
                                    {items.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <button className="flex items-center bg-[#03081F] text-[#ffffff]
                py-2 px-4 rounded-full gap-2">
                    <Image 
                    src="/images/navbar/login-male.png"
                    alt="male-user-login"
                    width={500}
                    height={300}
                    className="w-7 h-7"/>
                    <div>
                        <h4>Login/Signup</h4>
                    </div>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar