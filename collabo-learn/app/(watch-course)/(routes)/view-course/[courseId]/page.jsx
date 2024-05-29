"use client"

import React, { useContext, useEffect, useState } from 'react';
import ChapterNav from './_components/ChapterNav';
import FullVideoPlayer from './_components/FullVideoPlayer';
import { UserButton, useUser } from '@clerk/nextjs';
import { getCourseById } from '@/app/_services';
import { useRouter } from 'next/navigation';

function ViewCourse({ params }) {
    const { user } = useUser();
    const router = useRouter();

    const [course, setCourse] = useState({ chapter: [] });
    const [userCourse, setUserCourse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeChapter, setActiveChapter] = useState();

    useEffect(() => {
        if (user) {
            getCourse();
        }
    }, [user]);

    const getCourse = async () => {
        try {
            const res = await getCourseById(params?.courseId, user?.primaryEmailAddress.emailAddress);
            setCourse(res.courseList);
            setUserCourse(res.userEnrollCourses);
        } catch (error) {
            console.error('Error fetching course:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // If loading or no user, return a loading state or a placeholder
    if (isLoading || !user) {
        return <div>Loading...</div>;
    }

    return course?.name && (
        <div className='flex'>
            <div className='w-72 border shadow-sm h-screen'>
                <ChapterNav
                    course={course}
                    userCourse={userCourse}
                    setActiveChapter={(chapter) => setActiveChapter(chapter)}
                />
            </div>
            <div className='flex-1'>
                <div className='flex justify-between p-5'>
                    <UserButton />
                    <button
                        onClick={() => router.push('/browse')}
                        className='bg-blue-500 text-white px-4 py-2 rounded'
                    >
                        Back to Courses
                    </button>
                </div>
                <FullVideoPlayer activeChapter={activeChapter} />
            </div>
        </div>
    );
}

export default ViewCourse;
