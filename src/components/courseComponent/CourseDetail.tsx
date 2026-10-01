import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useCourses } from "../../hooks/useCourses";
import CourseAboutTab from "./CourseAboutTab";
import CourseLessonsTab from "./CourseLessonsTab";
import CourseReviewsTab from "./CourseReviewsTab";
import videoImage from "./../../assets/video-image.png";
import profile from "./../../assets/profile.jpg";

export const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { courses, loading } = useCourses();

  const handleShare = () => {
    navigate("/share");
  };

  const handleEnrollment = () => {
    navigate("/enrollment");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  // Safely resolve current tab: default to "about" if the segment is the ID or unrecognized
  const lastSegment = location.pathname.split("/").filter(Boolean).pop();
  const currentTab =
    !lastSegment ||
    lastSegment === id ||
    !["about", "lessons", "reviews"].includes(lastSegment)
      ? "about"
      : lastSegment;

  const course = courses.find((c) => String(c.id) === id);



  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-white">
        Loading course details...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-white">
        <h2 className="text-2xl font-bold">Course Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 rounded-full bg-[#CCFF00] px-6 py-2 text-xs font-bold text-black"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* Header Banner */}
      <div className="relative bg-[#0645e8] text-white">
        <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between">
          {Array.from({ length: 13 }).map((_, index) => (
            <div key={index} className="h-full border-r-2 border-white/30" />
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 2px, transparent 2px)`,
            backgroundSize: "100% 120px",
          }}
        />

        <div
          className="w-full py-8"
          style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="font-poppins text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-4xl">
                {course.title + ": A Comprehensive Guide"}
              </h1>
              <p className="mt-2  text-whitefont-semibold text-[20px">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              <p className="text-lg mt-5">
                by <span className="text-[#D4FB20]">purepearl studio</span>
              </p>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className=" inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-2  font-poppins text-[16px] font-medium text-black transition hover:bg-[#b8e600]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full bg-white px-8 py-2 text-xs font-medium text-gray-700">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z"
                  fill="#003BE2"
                />
              </svg>
              <span className="text-base">Intermediate</span>
            </div>

            <span className="flex items-center gap-1 rounded-full bg-white px-8 py-2 text-base text-gray-700 shadow-sm">
              <span className="text-[#003BE2] text-base">★</span> 4.8 (172
              reviews)
            </span>

            <div className="flex items-center gap-1.5 rounded-full bg-white px-8 py-2 text-xs font-medium text-gray-700">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.67 9.13C17.04 10.06 18 11.32 18 13V16H22V13C22 10.82 18.43 9.53 15.67 9.13Z"
                  fill="#003BE2"
                />
                <path
                  d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C13.53 0 13.09 0.0999998 12.67 0.24C13.5 1.27 14 2.58 14 4C14 5.42 13.5 6.73 12.67 7.76C13.09 7.9 13.53 8 14 8Z"
                  fill="#003BE2"
                />
                <path
                  d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z"
                  fill="#003BE2"
                />
                <path
                  d="M8 9C5.33 9 0 10.34 0 13L0 16H16V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z"
                  fill="#003BE2"
                />
              </svg>

              <span className="text-base">199 Students</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gray-900/40 shadow-2xl lg:col-span-8">
              <img src={videoImage} alt="ByteSpace Logo" className="" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full py-8"
        style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column */}
          <div className="pt-8 lg:col-span-8">
            {/* Route Tab Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate(`/course/${id}/about`)}
                className={`cursor-pointer rounded-full px-5 py-1.5 text-base font-medium transition ${
                  currentTab === "about"
                    ? "bg-[#CCFF00] text-black"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => navigate(`/course/${id}/lessons`)}
                className={`cursor-pointer rounded-full px-5 py-1.5 text-base font-medium transition ${
                  currentTab === "lessons"
                    ? "bg-[#CCFF00] text-black"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Lessons
              </button>
              <button
                type="button"
                onClick={() => navigate(`/course/${id}/reviews`)}
                className={`cursor-pointer rounded-full px-5 py-1.5 text-base font-medium transition ${
                  currentTab === "reviews"
                    ? "bg-[#CCFF00] text-black"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Reviews
              </button>
            </div>

            {currentTab === "about" && <CourseAboutTab />}
            {currentTab === "lessons" && <CourseLessonsTab />}
            {currentTab === "reviews" && <CourseReviewsTab />}
          </div>

          {/* Right Floating Sidebar */}
          <div className="relative lg:col-span-4">
            <div className="rounded-3xl bg-white p-6 text-gray-900 shadow-2xl  lg:absolute lg:-top-[695px] ml-10 lg:w-full">
              <h2 className="font-poppins text-[20px] font-semibold">
                112 Lessons (24 hours)
              </h2>

              <div className="mt-3 space-y-3 font-['Satoshi'] tracking-normal text-[#1A1A1A]">
                {/* Row 1 */}
                <div className="flex items-start justify-between text-[16px] font-medium leading-[120%]">
                  <div className="flex items-start gap-3 pr-2">
                    <span className="shrink-0">01</span>
                    <span>Introduction to Digital Assets</span>
                  </div>
                  <span className="shrink-0 text-[#003BE2]">12 mins</span>
                </div>

                {/* Row 2 */}
                <div className="flex items-start justify-between text-[16px] font-medium leading-[120%]">
                  <div className="flex items-start gap-3 pr-2">
                    <span className="shrink-0">02</span>
                    <span>Design Principles for Impacts</span>
                  </div>
                  <span className="shrink-0 text-[#003BE2]">21 mins</span>
                </div>

                {/* Row 3 */}
                <div className="flex items-start justify-between text-[16px] font-medium leading-[120%]">
                  <div className="flex items-start gap-3 pr-2">
                    <span className="shrink-0">03</span>
                    <span>Advanced Techniques in Digital Creation</span>
                  </div>
                  <span className="shrink-0 text-[#003BE2]">16 mins</span>
                </div>

                {/* 99 More Videos */}
                <p className="pt-2 text-[14px] text-gray-500">99 more videos</p>

                {/* Footer Text */}
                <p className="pt-4 text-[14px] font-normal leading-[140%] text-gray-600">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>
              </div>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold  text-[#003BE2]">
                  ${course.price ?? 25}
                </span>
                <span className="text-base text-[#4B4C53]">/lifetime</span>
              </div>

              <button
                className="mt-3 w-full cursor-pointer rounded-full bg-[#CCFF00] py-2 font-poppins text-lg text-[#242528] transition hover:bg-[#b8e600] active:scale-95"
                onClick={handleEnrollment}
              >
                Enroll Now
              </button>

              <div className="mt-5 space-y-3 border-gray-100 pt-5 font-medium text-gray-600">
                <div className="text-[20px] font-semibold text-[#242528]">
                  This course includes
                </div>
                <div className="flex items-center gap-2.5 text-base">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H10L8 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM16 8H4V6H16V8ZM12 12H4V10H12V12Z"
                      fill="#003BE2"
                    />
                  </svg>
                  <span> Learning Resources</span>
                </div>
                <div className="flex items-center gap-2.5 text-base">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 8V16H5V8H15ZM16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.45 16.55 6 16 6Z"
                      fill="#003BE2"
                    />
                  </svg>

                  <span>Quality Lesson Videos</span>
                </div>
                <div className="flex items-center gap-2.5 text-base">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 12H14V13.5H18V12Z" fill="#003BE2" />
                    <path d="M18 15H14V16.5H18V15Z" fill="#003BE2" />
                    <path
                      d="M20 7H15V4C15 2.9 14.1 2 13 2H11C9.9 2 9 2.9 9 4V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7ZM11 4H13V9H11V4ZM20 20H4V9H9C9 10.1 9.9 11 11 11H13C14.1 11 15 10.1 15 9H20V20Z"
                      fill="#003BE2"
                    />
                    <path
                      d="M9 15C9.82843 15 10.5 14.3284 10.5 13.5C10.5 12.6716 9.82843 12 9 12C8.17157 12 7.5 12.6716 7.5 13.5C7.5 14.3284 8.17157 15 9 15Z"
                      fill="#003BE2"
                    />
                    <path
                      d="M11.08 16.18C10.44 15.9 9.74 15.75 9 15.75C8.26 15.75 7.56 15.9 6.92 16.18C6.36 16.42 6 16.96 6 17.57V18H12V17.57C12 16.96 11.64 16.42 11.08 16.18Z"
                      fill="#003BE2"
                    />
                  </svg>

                  <span> Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-2.5 text-base">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 14H9C9 9.03 13.03 5 18 5V7C14.13 7 11 10.13 11 14ZM18 11V9C15.24 9 13 11.24 13 14H15C15 12.34 16.34 11 18 11ZM7 4C7 2.89 6.11 2 5 2C3.89 2 3 2.89 3 4C3 5.11 3.89 6 5 6C6.11 6 7 5.11 7 4ZM11.45 4.5H9.45C9.21 5.92 7.99 7 6.5 7H3.5C2.67 7 2 7.67 2 8.5V11H8V8.74C9.86 8.15 11.25 6.51 11.45 4.5ZM19 17C20.11 17 21 16.11 21 15C21 13.89 20.11 13 19 13C17.89 13 17 13.89 17 15C17 16.11 17.89 17 19 17ZM20.5 18H17.5C16.01 18 14.79 16.92 14.55 15.5H12.55C12.75 17.51 14.14 19.15 16 19.74V22H22V19.5C22 18.67 21.33 18 20.5 18Z"
                      fill="#003BE2"
                    />
                  </svg>

                  <span>Private Consultation</span>
                </div>
              </div>

              <div className="mt-5 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={profile}
                    alt="PurePearl Studio"
                    className="h-[52px] w-[52px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-[#242528]">
                      PurePearl Studio
                    </h4>
                    <p className="text-base  text-[#4B4C53]">
                      Professional Creator
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[16px] text-[#4B4C53]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <button
                  className="mt-3 px-4 rounded-full border-2 border-gray-200 py-1.5 text-base  text-[#4B4C53] transition hover:bg-gray-50"
                  onClick={handleProfile}
                >
                  See Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
