// src/components/GrowthHeroSection.tsx
import React from "react";
import CourseCard from "./CourseCard";
import studentImage from "../assets/student-01.png";
import spiral from "../assets/yellow-spiral-02.png";
import type { Course } from "../types/course";
import { useCategory } from "../hooks/useCategory";
import Loading from "./Loading";

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
  const { data: cardData, loading, error } = useCategory();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Failed to load data: {error}</div>;
  }

  if (!cardData) {
    return null;
  }
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
              <div className="absolute -right-[35%] bottom-[14%] z-30 w-64 rounded-3xl bg-white p-6 shadow-2xl transition-transform hover:scale-105">
                <p className="text-sm font-medium text-gray-500">
                  Learning Progress
                </p>

                <h2 className="mt-2 text-5xl font-black tracking-tight text-gray-900">
                  {cardData.learningProgress}%
                </h2>

                {/* Progress Bar Track */}
                <div className=" mt-1 h-3 w-full -bottom-2 rounded-full bg-gray-100 overflow-hidden">
                  {/* Active Fill */}
                  <div
                    className="h-full rounded-full bg-[#CCFF00] transition-all duration-500"
                    style={{ width: `${cardData.learningProgress}%` }}
                  />
                </div>
              </div>

              {/* Lime Scribble Accent */}
              <div className="absolute w-[216px] h-[216px] -right-[40%] bottom-[30%]  z-30">
                <img src={spiral} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthHeroSection;
