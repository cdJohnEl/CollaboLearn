"use client"


import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { Layout, Mail, Search, Shield } from 'lucide-react'

function SideBarNav() {
    const pathName=usePathname();
    console.log(pathName)

    const menuList = [
        {
            id: 1,
            name: 'Browse',
            icon:Search,
            path: '/browse'
        },
        {
            id: 2,
            name: 'Dashboard',
            icon:Layout,
            path: '/dashboard'
        },
        // {
        //     id: 3,
        //     name: 'Upgrade',
        //     icon:Shield,
        //     path: '/upgrade'
        // },
        {
            id: 4,
            name: 'Newsletter',
            icon:Mail,
            path: '/newsletter'
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0);
    const path = usePathname();
  return (
    <div className='h-full b-white border-r lfex flex-col overflow-y-auto shadow-md'>
        <div className='p-5 border-b'>
            <Image src='/COLLABOLEARN-LOGO.png'
            alt='logo'
            width={270}
            height={200}
            />
        </div>
        <div className='flex flex-col'>
            {menuList.map((item, index) => (
                <Link href={item.path} key={index}>
                <div key={index*23} className={`group flex gap-3  p-3 text-[20px] items-center mt-2 text-gray-500 hover:bg-gray-100 hover:text-indigo-800 cursor-pointer rounded-md transition-all ease-in-out duration-300
                ${pathName.includes(item.path) && 'bg-indigo-50 text-indigo-800'}`}>
                    <item.icon className='group-hover:animate-bounce' />
                    <h2>{item.name}</h2>
                </div>
            </Link>
            ))}
                
        </div>
    </div>
  )
}

export default SideBarNav