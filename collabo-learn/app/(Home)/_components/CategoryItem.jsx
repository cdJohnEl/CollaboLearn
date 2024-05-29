import React from 'react';
import { Book, Youtube } from 'lucide-react';
import Image from 'next/image';

function CategoryItem({ course }) {
    // Check if course or banner is undefined
    if (!course || !course.banner || !course.banner.url) {
        // Handle case where course or banner is undefined
        return <div>Error: Course or banner not available</div>;
    }

    console.log("cors222", course.banner.url); // Ensure the data structure is correct

    return (
        <div className='border rounded-lg p-2 cursor-pointer hover:border-blue-300'>
            <Image
                src={course.banner.url}
                alt={course.name}
                width={1000}
                height={500}
                className='rounded-lg'
            />
            <div className='mt-2'>
                <h2 className='text-[18px] md:text-[16px] font-medium'>{course.name}</h2>
                {course.totalChapters ? (
                    <div className='flex items-center gap-2 mt-2'>
                        <Book className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1' />
                        <h2 className='text-[12px] text-gray-400'>{course.totalChapters} Chapters</h2>
                    </div>
                ) : null}
                {course.youtubeUrl ? (
                    <div className='flex items-center gap-2 mt-2'>
                        <Youtube className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1' />
                        <h2 className='text-[12px] text-gray-400'>Watch on YouTube</h2>
                    </div>
                ) : null}
                <h2 className='mt-2 text-[14px] font-semibold'>{course.free ? 'Free' : 'Paid'}</h2>
            </div>
        </div>
    );
}

export default CategoryItem;
