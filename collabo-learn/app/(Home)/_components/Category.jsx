"use client"

import React, { useState } from 'react'


function CategoryFilter() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const filterOptions = [
        {
            id:1,
            name:'All',
            value:'all'
        },
        {
            id:2,
            name:'React Js',
            value:'react'
        },
        {
            id:3,
            name:'Next Js',
            value:'nextjs'
        },
        {
            id:4,
            name:'Tailwind Css',
            value:'tailwindcss'
        },
        {
            id:5,
            name:'Firebase',
            value:'firebase'
        },
    ]
  return (
    <div className='flex gap-5'>
        {filterOptions.map((item, index) => (
            <button key={index} 
            onClick={() => setActiveIndex(index)}
            className={`border p-2 px-4 text-[12px] rounded-md hover:border-blue-800 font-semibold hover:bg-gray-50 ${activeIndex==index?'border-blue-800 bg-blue-50 text-blue-800':null}`}>
                <h2>{item.name}</h2>
            </button>
        ))}
    </div>
  )
}

export default CategoryFilter