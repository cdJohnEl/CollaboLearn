import React from 'react';
import Image from 'next/image';

const WelcomeBanner = () => {
  return (
    <div className='flex gap-3 p-4 items-center bg-white rounded-xl'>
      <Image
        src="/COLLABOLEARN-LOGO-SINGLE.PNG"
        alt="CollaboLearn Logo"
        width={80}
        height={120}
      />
      <div className='ml-5'>
        <h2 className='font-bold text-[0.8em] md:text-[20px]'>
          Welcome to <span className='text-blue-500'>CollaboLearn</span>
        </h2>
        <h2 className='text-gray-500 text-[8px] md:text-[18px]'>
          Explore, Learn and Build Real World Projects.
        </h2>
        <h2 className='text-gray-500 text-[8px] md:text-[12px] italic'>
          ...Together we Learn, Together we grow
        </h2>
      </div>
      
    </div>
  );
}

export default WelcomeBanner;
