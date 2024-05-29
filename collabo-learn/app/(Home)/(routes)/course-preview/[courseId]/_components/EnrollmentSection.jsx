import { EnrollCourse, PublishCourse } from "@/app/_services/index";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { useRouter } from "next/navigation";

function EnrollmentSection({ courseDetails, userCourse }) {
  const { user } = useUser();
  const router = useRouter();

  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(
        courseDetails.id,
        user.primaryEmailAddress.emailAddress
      ).then(async (res) => {
        console.log("EnrollCourseRes => ", res);
        if (res) {
          await PublishCourse(res?.createUserEnrollCourse?.id).then(
            (result) => {
              console.log(result);

              if(result)
                {
                    router.push('/view-course/'+courseDetails.id)
                    
                }
            }
          );
        }
      });
    } else {
      router.push("/sign-in");
    }
  };

//   console.log("userCourse:", userCourse);
//   console.log("courseDetails:", courseDetails);

  return (
    <div>
      {userCourse?.courseId ? 
        <div className="mt-5 border rounded-lg text-center p-2">
          <h2 className="text-gray-500">
            Continue Building Project, Access Source Code and Track your
            Progress
          </h2>
          <button className="p-2 rounded-lg text-white bg-blue-500 text-[14px] mt-2 hover:bg-blue-700 w-full" onClick={() => router.push('/view-course/'+courseDetails.id)}>
            Continue
          </button>
        </div>
       : null}

      {courseDetails.free && !userCourse?.courseId ? 
        <div className="mt-5 border rounded-lg text-center p-2">
          <h2 className="text-gray-500">
            Learn and Build Project, Access Source Code and Track your Progress
          </h2>
          <button
            className="p-2 rounded-lg text-white bg-blue-500 text-[14px] mt-2 hover:bg-blue-700 w-full"
            onClick={() => enrollCourse()}
          >
            Enroll Now
          </button>
        </div>
       : !userCourse?.courseId ? 
        <div className="mt-5 border rounded-lg text-center p-2">
          <h2 className="text-gray-500">
            Buy this course, Source code and Track your progress
          </h2>
          <button className="p-2 rounded-lg text-white bg-blue-500 text-[14px] mt-2 hover:bg-blue-700 w-full">
            Buy Course for $3
          </button>
        </div>
       : null}

      <div className="mt-5 border rounded-lg text-center p-2">
        <h2 className="text-gray-500">
          Buy Monthly Membership and gain access to all resources, Source code
          and Track your progress
        </h2>
        <button className="p-2 rounded-lg text-white bg-blue-500 text-[14px] mt-2 hover:bg-blue-700 w-full">
          Buy Membership for $7
        </button>
      </div>
    </div>
  );
}

export default EnrollmentSection;



