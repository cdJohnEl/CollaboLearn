"use client"


import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Layout, Mail, Search, Shield } from 'lucide-react'

function SideBarNav() {
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
        {
            id: 3,
            name: 'Upgrade',
            icon:Shield,
            path: '/upgrade'
        },
        {
            id: 4,
            name: 'Newsletter',
            icon:Mail,
            path: '/newsletter'
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='h-full b-white border-r lfex flex-col overflow-y-auto shadow-md'>
        <div className='p-5 border-b'>
            <Image src='/logo.svg'
            alt='logo'
            width={170}
            height={100}
            />
        </div>
        <div className='flex flex-col'>
            {menuList.map((item, index) => (
                <div className={`flex gap-2 item-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${activeIndex == index ? 'bg-blue-50 text-blue-800' :null}`}
                onClick={() => setActiveIndex(index)} >
                    <item.icon/>
                    <h2>{item.name}</h2>
                </div>
            ))}
                
        </div>
    </div>
  )
}

export default SideBarNav