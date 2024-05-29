"use client"

import React, { useState } from 'react';

function CategoryFilter({ selectedCategory }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const filterOptions = [
    { id: 1, name: 'All', value: 'all' },
    { id: 2, name: 'React Js', value: 'reactjs' },
    { id: 3, name: 'Next Js', value: 'nextjs' },
    { id: 4, name: 'Tailwind Css', value: 'tailwindcss' },
    { id: 5, name: 'Firebase', value: 'firebase' },
    { id: 6, name: 'Python', value: 'Python' },
    { id: 7, name: 'Web Development', value: 'webdev' },
    { id: 8, name: 'Javascript', value: 'JavaScript' },
    { id: 9, name: 'HTML', value: 'HTML' },
    { id: 10, name: 'CyberSecurity', value: 'cybersecurity' },
    { id: 11, name: 'Flutter', value: 'flutter' },
    { id: 12, name: 'Graphic Design', value: 'graphicdesign' },
    { id: 13, name: 'Data Science', value: 'datascience' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
            selectedCategory(item.value);
          }}
          className={`border p-2 px-4 text-[12px] rounded-md hover:border-blue-800 font-semibold hover:bg-gray-50 ${
            activeIndex === index ? 'border-blue-800 bg-blue-50 text-blue-800' : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
