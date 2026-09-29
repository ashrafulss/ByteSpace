import React from "react";
import { useCourses } from "../hooks/useCourses";

const CourseGrid: React.FC = () => {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[410px] animate-pulse rounded-[28px] border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="h-48 rounded-2xl bg-gray-200" />
              <div className="mt-4 h-6 w-3/4 rounded bg-gray-200" />
              <div className="mt-2 h-4 w-1/3 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return null;

  return (
    <section className="w-full bg-white px-4 ">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-[28px] border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Image & Overlay Chips Header */}
              <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Glassmorphic Pills Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-white/70 px-3 py-1.5 backdrop-blur-md">
                  <span className="font-satoshi text-xs font-medium text-gray-700">
                    {course.lessonsCount} Lessons
                  </span>
                  <span className="font-satoshi text-xs font-medium text-gray-700">
                    {course.duration}
                  </span>
                  <span className="font-satoshi text-xs font-medium text-gray-700">
                    {course.commentsCount} Comments
                  </span>
                </div>
              </div>

              {/* Title & Author */}
              <div className="mt-4 px-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-poppins text-[20px] font-bold text-gray-900 line-clamp-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="font-satoshi text-lg f text-gray-700">
                      {course.rating}
                    </span>
                    <svg
                      className="h-5 w-5  fill-gray-300 text-gray-300"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="font-satoshi text-xs font-normal text-[#0C47FB]">
                  by {course.author}
                </p>
              </div>

              {/* Level & Enrolled Avatars */}
              <div className="mt-4 flex items-center justify-between px-1">
                {/* Level Chip */}
                <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z"
                      fill="#4B4C53"
                    />
                  </svg>

                  <span>{course.level}</span>
                </div>

                {/* Avatar Stack + Lime Counter Badge */}
                <div className="flex items-center -space-x-2">
                  {course.studentAvatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="Student"
                      className="h-7 w-7 rounded-full border-2 border-white object-cover shadow-xs"
                    />
                  ))}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] font-satoshi text-[10px] font-bold text-gray-900 shadow-xs">
                    {course.enrolledBadge}
                  </div>
                </div>
              </div>

              {/* Price Row */}
              <div className="mt-4 border-t border-gray-100 pt-3 px-1">
                <p className="font-poppins text-[20px] font-semibold text-[#0C47FB]">
                  ${course.price}
                  <span className="font-satoshi text-xs font-normal text-gray-400">
                    /{course.priceType}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
