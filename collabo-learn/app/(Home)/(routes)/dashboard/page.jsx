"use client"

import React, { useEffect, useState } from 'react'
import { GetUserCourseList } from '@/app/_services'
import { useUser } from '@clerk/nextjs'
import CategoryItem from '../../_components/CategoryItem'

function Dashboard() {
    const {user} = useUser()
    const [userCourseList, setUserCourseList] = useState([])

    useEffect(() => {
        user?getUserCourse():null
    }, [user])

    const getUserCourse = async () => {
        await GetUserCourseList(user?.primaryEmailAddress.emailAddress).then(res => {
            // console.log("cl res",res?.userEnrollCourses[1])
            if(res)
                setUserCourseList(res?.userEnrollCourses)
        })
    }
  return (
    <div>
        {userCourseList? <>
        <h2 className='text-[20px] font-medium'>My Courses</h2>
         <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
            {userCourseList&&userCourseList.map((course, index) => (
                <div key={index}>
                    <CategoryItem course={course?.courseList}/>
                </div>
            ))}
        </div>
        </>:
        <div className='flex justify-center items-center text-[20px] mt-20 text-gray-500'>
            <h2>You dont have any course Enrolled.</h2>
        </div>}
    </div>
  )
}

export default Dashboard