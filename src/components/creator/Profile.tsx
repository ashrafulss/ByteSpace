import React from "react";
import profile from "./../../assets/profile.png";
import type { CourseGridProps } from "../courseComponent/CourseGrid";
import CourseCard from "../courseComponent/CourseCard";
import { useCourses } from "../../hooks/useCourses";
import { useNavigate } from "react-router-dom";
import type { Course } from "../../types/course";

export const Profile: React.FC<CourseGridProps> = ({
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  onCourseClick,
}) => {
  const { courses, loading, error } = useCourses();

  const navigate = useNavigate();

  const handleCardClick = (course: Course) => {
    if (onCourseClick) {
      onCourseClick(course);
    } else {
      navigate(`/course/${course.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFollow = () => {
    navigate("/follow");
  };
  return (
    <div className="w-full bg-white">
      {/* Header Banner Container */}
      <div className="relative overflow-hidden bg-[#0645e8] py-14 text-white">
        {/* Background Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between">
          {Array.from({ length: 13 }).map((_, index) => (
            <div key={index} className="h-full border-r-2 border-white/20" />
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1) 2px, transparent 2px)`,
            backgroundSize: "100% 120px",
          }}
        />

        {/* Banner Content Container — Aligned to match Header's 8.333% offset */}
        <div
          className="relative z-10 w-full"
          style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-4xl border-2 border-white/20">
              <img
                src={profile}
                alt="PurePearl Studio"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-semibold tracking-tight text-[#F5F5F6] sm:text-3xl">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-[#D4FB20] px-4 py-0.5 text-base font-medium text-[#242528]">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-lg font-light text-white/80">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 max-w-4xl space-y-2 text-left text-lg font-light text-white/90 sm:text-sm">
            <p>
              Welcome to the creative world of [Creator's Name]. Here, you'll
              discover the passion, expertise, and inspiration that drive my
              creative journey. Let's explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>
          </div>

          {/* Stats & Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white px-5 py-2 text-lg font-medium text-black shadow-sm sm:text-sm">
                3 Products
              </span>
              <span className="rounded-full bg-white px-5 py-2 ext-lg font-medium text-black shadow-sm sm:text-sm">
                12 Followers
              </span>
            </div>

            <button
              type="button"
              className="rounded-full bg-[#D4FB20] px-7 py-2.5 text-lg font-medium text-black transition hover:bg-[#b8e600] active:scale-95 sm:text-sm"
              onClick={handleFollow}
            >
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Main Filter & Content Area — Aligned to match Header's 8.333% offset */}
      <div
        className="w-full py-8"
        style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.9616 2H12.9616L7.9516 8.3L2.9616 2ZM0.211604 1.61C2.2316 4.2 5.9616 9 5.9616 9V15C5.9616 15.55 6.4116 16 6.9616 16H8.9616C9.5116 16 9.9616 15.55 9.9616 15V9C9.9616 9 13.6816 4.2 15.7016 1.61C16.2116 0.95 15.7416 0 14.9116 0L1.0016 0C0.171604 0 -0.298396 0.95 0.211604 1.61Z"
                    fill="#242528"
                  />
                </svg>
              </span>{" "}
              Filter
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0L15 0V16H12V0ZM0 10H3V16H0L0 10ZM6 5H9V16H6V5Z"
                    fill="#242528"
                  />
                </svg>
              </span>{" "}
              Level
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 2L6 11H17L11.5 2ZM11.5 5.84L13.43 9H9.56L11.5 5.84ZM17 13C14.51 13 12.5 15.01 12.5 17.5C12.5 19.99 14.51 22 17 22C19.49 22 21.5 19.99 21.5 17.5C21.5 15.01 19.49 13 17 13ZM17 20C15.62 20 14.5 18.88 14.5 17.5C14.5 16.12 15.62 15 17 15C18.38 15 19.5 16.12 19.5 17.5C19.5 18.88 18.38 20 17 20ZM2.5 21.5H10.5V13.5H2.5V21.5ZM4.5 15.5H8.5V19.5H4.5V15.5Z"
                    fill="#242528"
                  />
                </svg>
              </span>{" "}
              Category
            </button>
          </div>

          <div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-lg font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12H6V10H0L0 12ZM0 0L0 2H18V0L0 0ZM0 7H12V5H0L0 7Z"
                    fill="#242528"
                  />
                </svg>
              </span>{" "}
              Most relevant
            </button>
          </div>
        </div>

        <div className={`grid gap-6 ${columns}`}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCardClick(course)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
