import React from "react";
import { Book } from "lucide-react";

function CourseDetails({ courseDetails }) {
  return (
    <div className="mt-5 p-5 rounded-lg border">
      <h2 className="text-[20px] font-medium">{courseDetails.name}</h2>
      <div className="flex items-center gap-2 mt-2">
        <Book className="h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1" />
        <h2 className="text-[12px] text-gray-400">
          {courseDetails.totalChapters} Chapters
        </h2>
      </div>
      <p className="line-clamp-4 mt-5 text-gray-500">{courseDetails.description}</p>
    </div>
  );
}

export default CourseDetails;
