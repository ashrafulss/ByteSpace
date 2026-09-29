// src/components/GrowthHeroSection.tsx
import React from "react";
import CourseCard from "./CourseCard";
import studentImage from "../assets/student-01.png";
import type { Course } from "../types/course";

const sampleCourse: Course = {
  id: "hero-figma-course",
  title: "Learn Figma from Zero",
  thumbnail: "/images/course/figma.jpg",
  lessonsCount: 17,
  duration: "2 hours 16 min",
  commentsCount: 24,
  author: "purepixel studio",
  rating: 4.9,
  level: "Beginner",
  studentAvatars: [
    "/images/students/01.png",
    "/images/students/02.png",
    "/images/students/03.png",
    "/images/students/04.png",
  ],
  enrolledBadge: "+12",
  price: 25,
  priceType: "lifetime",
};

export const GrowthHeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFCFF] py-20">
      {/* --- Exact Match Gradient Mesh Background --- */}

      {/* 1. Primary Top-Left Lime/Yellow Glow */}
      <div
        className="pointer-events-none absolute   -top-20 h-[650px] w-[650px] rounded-full blur-[110px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(226,253,82,0.85) 0%, rgba(212,251,32,0.4) 50%, rgba(255,255,255,0) 80%)",
        }}
      />

      {/* 2. Bottom-Left Soft Blue Ambient Glow */}
      <div
        className="pointer-events-none absolute -bottom-10 h-[450px] w-[450px] rounded-full blur-[100px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(78,114,248,0.3) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* 3. Top-Right Soft Blue Tint */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full blur-[120px] opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(210,222,255,0.6) 0%, rgba(255,255,255,0) 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl  ">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Title, Subtitle & Metrics */}
          <div className="lg:col-span-6 pt-44">
            <h1 className="font-poppins text-[44px] font-extrabold leading-[1.15] text-[#111827] ">
              Your Path to Professional <br />
              Growth Starts Here!
            </h1>

            <p className="mt-6 font-satoshi  font-normal leading-relaxed text-[#525866] text-lg">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics Row */}
            <div className="mt-10 flex items-center gap-10 border-t border-gray-200/60 pt-8 sm:gap-14">
              <div>
                <p className="font-poppins text-3xl font-bold text-[#0C47FB] sm:text-4xl">
                  12K
                </p>
                <p className="mt-1 font-satoshi text-lg text-gray-500">
                  Students
                </p>
              </div>

              <div>
                <p className="font-poppins text-3xl font-bold text-[#0C47FB] sm:text-4xl">
                  70+
                </p>
                <p className="mt-1 font-satoshi text-lg text-gray-500">
                  Courses
                </p>
              </div>

              <div>
                <p className="font-poppins text-3xl font-bold text-[#0C47FB] sm:text-4xl">
                  16
                </p>
                <p className="mt-1 font-satoshi text-lg text-gray-500">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Cards & Student Visual Composition */}
          <div className=" flex justify-start lg:col-span-6 ">
            <div className="relative w-full max-w-[480px]">
              {/* Background Mock Course Card */}
              <CourseCard
                course={sampleCourse}
                className="w-[90%] shadow-md backdrop-blur-sm bg-white/95 border-gray-200/80"
              />

              {/* Student Floating Cutout Overlay */}
              <div className="absolute top-10 -right-30 z-10 w-[110%]  pointer-events-none">
                <img
                  src={studentImage}
                  alt="Student with laptop"
                  className="h-auto w-full  object-contain drop-shadow-2xl scale-110"
                />
              </div>

              {/* Floating Progress Pill */}
              {/* <div className="absolute right-0 top-[38%] z-20 w-48 rounded-2xl border border-gray-100 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <p className="font-satoshi text-xs font-medium text-gray-500">
                  Learning Progress
                </p>
                <p className="mt-1 font-poppins text-3xl font-bold text-gray-900">
                  55%
                </p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
                </div>
              </div> */}

              {/* Lime Scribble Accent */}
              {/* <div className="absolute -right-4 top-[15%] z-20">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20,20 Q60,10 50,40 T30,70 Q70,80 80,40"
                    stroke="#D4FB20"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthHeroSection;
