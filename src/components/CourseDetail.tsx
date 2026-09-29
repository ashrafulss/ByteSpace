import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useCourses } from "../hooks/useCourses";

export const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { courses, loading } = useCourses();

  // Safely resolve current tab: default to "about" if the segment is the ID or unrecognized
  const lastSegment = location.pathname.split("/").filter(Boolean).pop();
  const currentTab =
    !lastSegment ||
    lastSegment === id ||
    !["about", "lessons", "reviews"].includes(lastSegment)
      ? "about"
      : lastSegment;

  const course = courses.find((c) => String(c.id) === id);

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimization for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

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

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-28 pt-8 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="font-poppins text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {course.title || "Build Digital Asset: A Comprehensive Guide"}
              </h1>
              <p className="mt-2 text-sm text-white/80 sm:text-base">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
            </div>

            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full bg-[#CCFF00] px-5 py-2.5 font-poppins text-xs font-bold text-black transition hover:bg-[#b8e600]"
            >
              Share
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/20 px-4 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Intermediate
            </span>
            <span className="flex items-center gap-1 rounded-full bg-white px-4 py-1 text-xs font-semibold text-gray-800 shadow-sm">
              <span className="text-yellow-500">★</span> 4.8 (172 reviews)
            </span>
            <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-gray-800 shadow-sm">
              199 Students
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gray-900/40 shadow-2xl lg:col-span-8">
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  aria-label="Play video"
                  className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-2xl transition hover:scale-105 active:scale-95"
                >
                  <svg
                    className="ml-1 h-7 w-7 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column */}
          <div className="pt-8 lg:col-span-8">
            {/* Route Tab Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate(`/course/${id}/about`)}
                className={`cursor-pointer rounded-full px-5 py-1.5 text-xs font-bold transition ${
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
                className={`cursor-pointer rounded-full px-5 py-1.5 text-xs font-bold transition ${
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
                className={`cursor-pointer rounded-full px-5 py-1.5 text-xs font-bold transition ${
                  currentTab === "reviews"
                    ? "bg-[#CCFF00] text-black"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Reviews
              </button>
            </div>

            {/* Render Tab Specific Content */}
            {currentTab === "about" && (
              <>
                <div className="mt-8 space-y-4 font-satoshi text-xs leading-relaxed text-gray-600 sm:text-sm">
                  <h3 className="font-poppins text-base font-bold text-gray-900">
                    Description
                  </h3>
                  <p>
                    Embark on an enlightening exploration into the world of
                    digital creation with our comprehensive course...
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="font-poppins text-xs font-bold text-gray-900">
                    Sneak Peak
                  </h4>
                  <div className="mt-3 grid grid-cols-4 gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=300&q=80"
                      alt="Sneak peak 1"
                      className="h-24 w-full rounded-xl object-cover shadow-sm"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=300&q=80"
                      alt="Sneak peak 2"
                      className="h-24 w-full rounded-xl object-cover shadow-sm"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-poppins text-xs font-bold text-gray-900">
                    Key Points
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-gray-700"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {currentTab === "lessons" && (
              <div className="mt-8 space-y-4">
                <h3 className="font-poppins text-base font-bold text-gray-900">
                  Course Lessons
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  List of all course modules and downloadable materials.
                </p>
              </div>
            )}

            {currentTab === "reviews" && (
              <div className="mt-8 space-y-4">
                <h3 className="font-poppins text-base font-bold text-gray-900">
                  Student Reviews
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Ratings and reviews from enrolled students.
                </p>
              </div>
            )}
          </div>

          {/* Right Floating Sidebar */}
          <div className="relative lg:col-span-4">
            <div className="rounded-3xl bg-white p-6 text-gray-900 shadow-2xl lg:absolute lg:-top-[380px] lg:w-full">
              <h2 className="font-poppins text-base font-bold">
                112 Lessons (24 hours)
              </h2>

              <div className="mt-3 divide-y divide-gray-100">
                <div className="flex items-start justify-between py-2.5">
                  <div>
                    <span className="mr-2 font-mono text-xs text-gray-400">
                      01
                    </span>
                    <span className="text-xs font-semibold">
                      Introduction to Digital Assets
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-blue-600">
                    12 mins
                  </span>
                </div>

                <div className="flex items-start justify-between py-2.5">
                  <div>
                    <span className="mr-2 font-mono text-xs text-gray-400">
                      02
                    </span>
                    <span className="text-xs font-semibold">
                      Design Principles for Impacts
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-blue-600">
                    21 mins
                  </span>
                </div>

                <div className="flex items-start justify-between py-2.5">
                  <div>
                    <span className="mr-2 font-mono text-xs text-gray-400">
                      03
                    </span>
                    <span className="text-xs font-semibold">
                      Advanced Techniques in Digital Creation
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-blue-600">
                    16 mins
                  </span>
                </div>
              </div>

              <p className="mt-2 text-[11px] text-gray-400">99 more videos</p>

              <p className="mt-4 text-[11px] text-gray-500">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#0038FF]">
                  ${course.price ?? 25}
                </span>
                <span className="text-xs text-gray-400">/lifetime</span>
              </div>

              <button className="mt-3 w-full cursor-pointer rounded-full bg-[#CCFF00] py-3 font-poppins text-xs font-bold text-black transition hover:bg-[#b8e600] active:scale-95">
                Enroll Now
              </button>

              <div className="mt-5 space-y-2 border-t border-gray-100 pt-5 text-xs font-medium text-gray-600">
                <div className="text-xs font-bold text-gray-900">
                  This course includes
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  📁 Learning Resources
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  📹 Quality Lesson Videos
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  🎓 Certificate of Completion
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  🗣️ Private Consultation
                </div>
              </div>

              <div className="mt-5 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="PurePearl Studio"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      PurePearl Studio
                    </h4>
                    <p className="text-[10px] text-gray-500">
                      Professional Creator
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-gray-500">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <button className="mt-3 w-full rounded-full border border-gray-200 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50">
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
