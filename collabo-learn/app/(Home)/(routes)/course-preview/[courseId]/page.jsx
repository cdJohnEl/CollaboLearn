"use client"

import { getCourseById } from '@/app/_services'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import VideoPlayer from './_components/VideoPlayer'
import CourseDetails from './_components/CourseDetails'
// import OptionsSection from './_components/OptionsSection'
import EnrollmentSection from './_components/EnrollmentSection'
import { useState } from 'react'

function CoursePreview({params}) {
  const [courseDetails, setCourseDetails] = useState([])

  const [userCourse, setUserCourse] = useState([]);

  const {user} = useUser;
  useEffect (() => {
    params.courseId?getCourse(params.courseId):null;
  }, [user])

  const getCourse=() => {
    getCourseById(params.courseId, user?.primaryEmailAddress?.emailAddress).then(res => {
      console.log(res)
      console.log("Usr Cours",userCourse)
      setCourseDetails(res.courseList)
      setUserCourse(res?.userEnrollCourses)
    })
  }

  

  return courseDetails?.name &&(
    <div >
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='col-span-2'>
          {courseDetails?.chapter[0]?<VideoPlayer 
          videoUrl={courseDetails?.chapter[0].video.url}/>:null}
          <CourseDetails courseDetails={courseDetails}/>
        </div>
        <div className='mt-5 md:mt-0'>
          {/* <OptionsSection/> */}
          <EnrollmentSection courseDetails={courseDetails} userCourse={userCourse}
          />
        </div>

      </div>
    </div>
  )
}

export default CoursePreview