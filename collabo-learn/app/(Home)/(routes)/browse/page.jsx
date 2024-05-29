"use client"

import React, { useEffect, useState } from 'react';
import CategoryFilter from './_components/Category';
import { getCourseList } from '@/app/_services';
import CourseList from './_components/CourseList';

function Browse() {
  const [courses, setCourses] = useState([]);
  const [coursesOrg, setCoursesOrg] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const res = await getCourseList();
      console.log(res);
      if (res && res.courseLists) {
        console.log("mycor", res.courseLists);
        setCourses(res.courseLists);
        setCoursesOrg(res.courseLists);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const filterCourse = (category) => {
    if (category === 'all') {
      setCourses(coursesOrg);
    } else {
      const filteredList = coursesOrg.filter(course => course.tag.includes(category));
      setCourses(filteredList);
    }
  };

  return (
    <div>
      <CategoryFilter selectedCategory={(category) => filterCourse(category)} />
      {courses.length > 0 ? <CourseList courses={courses} /> : <p>No courses available.</p>}
    </div>
  );
}

export default Browse;
