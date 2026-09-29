import React, { useState } from "react";
import type { Course } from "../types/course";

interface CourseDetailProps {
  course: Course;
  onBack?: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({
  course,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">(
    "about",
  );

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

  return (
    <div className="w-full">
      {/* Top Hero Blue Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-12">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-white/80 transition hover:text-white"
          >
            &larr; Back to all courses
          </button>
        )}

        {/* Title & Share */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="font-poppins text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {course.title || "Build Digital Asset: A Comprehensive Guide"}
            </h1>
            <p className="mt-2 text-sm text-white/80 sm:text-base">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="mt-2 text-xs text-white/70">
              by{" "}
              {/* <span className="font-semibold text-white">
                {course.instructor || "purepearl studio"}
              </span> */}
            </p>
          </div>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full bg-[#CCFF00] px-5 py-2 font-poppins text-xs font-bold text-black transition hover:bg-[#b8e600]"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Share
          </button>
        </div>

        {/* Metadata Badges */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-gray-800 shadow-sm">
            Intermediate
          </span>
          <span className="flex items-center gap-1 rounded-full bg-white px-4 py-1 text-xs font-semibold text-gray-800 shadow-sm ring-2 ring-orange-400">
            <span className="text-yellow-500">&starf;</span> 4.8 (172 reviews)
          </span>
          <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-gray-800 shadow-sm">
            199 Students
          </span>
        </div>

        {/* Main Section Content & Floating Card */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Video Player Box */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gray-200 shadow-xl lg:col-span-8">
            {/* <img
              src={
                course.image ||
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              }
              alt={course.title}
              className="h-full w-full object-cover"
            /> */}
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

          {/* Floating Right Sidebar Card */}
          <div className="relative lg:col-span-4">
            <div className="rounded-3xl bg-white p-6 text-gray-900 shadow-2xl lg:absolute lg:top-0 lg:w-full">
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
                  This course include
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-blue-600">&#128194;</span> Learning
                  Resources
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-blue-600">&#127909;</span> Quality
                  Lesson Videos
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-blue-600">&#127891;</span> Certificate
                  of Completion
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-blue-600">&#128483;</span> Private
                  Consultation
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

      {/* Bottom White Section */}
      <div className="w-full bg-white pb-20 pt-12 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {/* Tabs */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`rounded-full px-5 py-1.5 text-xs font-bold transition ${
                    activeTab === "about"
                      ? "bg-[#CCFF00] text-black"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("lessons")}
                  className={`rounded-full px-5 py-1.5 text-xs font-bold transition ${
                    activeTab === "lessons"
                      ? "bg-[#CCFF00] text-black"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Lessons
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`rounded-full px-5 py-1.5 text-xs font-bold transition ${
                    activeTab === "reviews"
                      ? "bg-[#CCFF00] text-black"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* Description Body */}
              <div className="mt-8 space-y-4 font-satoshi text-xs leading-relaxed text-gray-600 sm:text-sm">
                <h3 className="font-poppins text-base font-bold text-gray-900">
                  Description
                </h3>
                <p>
                  Embark on an enlightening exploration into the world of
                  digital creation with our comprehensive course, &quot;Build
                  Digital Assets: A Comprehensive Guide.&quot; This
                  transformative learning experience invites you to delve deep
                  into the intricacies of crafting impactful digital content.
                  From laying the groundwork with foundational concepts to
                  mastering advanced techniques, this guide is meticulously
                  curated to empower you with the skills essential for
                  navigating the dynamic landscape of digital asset creation.
                </p>
                <p>
                  In the initial modules, you&apos;ll establish a solid
                  foundation by immersing yourself in foundational concepts that
                  form the backbone of digital asset creation. Understand the
                  fundamental elements that constitute compelling digital
                  content and gain proficiency in leveraging these elements to
                  communicate effectively in the digital realm.
                </p>
                <p>
                  As you progress through the course, you&apos;ll ascend to
                  higher levels of expertise, delving into the nuances of design
                  principles that drive impactful creations.
                </p>
              </div>

              {/* Sneak Peak Gallery */}
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
                  <img
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=80"
                    alt="Sneak peak 3"
                    className="h-24 w-full rounded-xl object-cover shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80"
                    alt="Sneak peak 4"
                    className="h-24 w-full rounded-xl object-cover shadow-sm"
                  />
                </div>
              </div>

              {/* Key Points */}
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
                        &#10003;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
