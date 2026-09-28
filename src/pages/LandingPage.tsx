import React, { useEffect, useState } from "react";
import studentImage from "../assets/student-01.png";
import searchicon from "../assets/search.png";
import yellowspiral from "../assets/yellow-spiral.png";
import whitespiral from "../assets/white-spiral.png";
import Header from "../components/Header";
import LogoTicker from "../components/LogoTicker";
import whiteTorus from "../assets/white-circle.png";
import yellowPill from "../assets/yellow-rectangle.png";
import whitePyramid from "../assets/white-triangle.png";
import whiteSpring from "../assets/spiral.png";
import { useCategory } from "../hooks/useCategory";
import Loading from "../components/Loading";
import HappyStudentsCard from "../components/HappyStudentsCard";
import CategorySection from "../components/CategorySection";

const Home: React.FC = () => {
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
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#0645e8] text-white">
        <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between">
          {Array.from({ length: 13 }).map((_, index) => (
            <div key={index} className="h-full border-r-2 border-white/30" />
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 2px, transparent 2px)`,
            backgroundSize: "100% 120px",
          }}
        />

        <Header />

        <section
          id="home"
          className="relative z-10 min-h-[calc(100vh-120px)] overflow-hidden -bottom-7"
        >
          <img
            src={yellowspiral}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[-40px] top-[15%] z-0 w-[180px] sm:w-[240px] lg:left-0 lg:w-[320px] object-contain select-none"
          />

          {/* Small White 3D Spiral */}
          <img
            src={whitespiral}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[13%] bottom-[31%]  z-0 w-[200px] object-contain select-none"
          />

          <div className="relative z-20 mx-auto max-w-[1400px] px-2 pt-12 text-center ">
            <h1 className="mx-auto max-w-5xl text-[72px] font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Get Access to Hundreds
              <br />
              <span>Courses Available</span>
            </h1>

            <p className="mx-auto mt-6  text-[18px] leading-relaxed text-white/80 ">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>

            <div className="mx-auto mt-16 flex w-full max-w-2xl items-center gap-3 px-4">
              {/* 1. White Input Pill */}
              <div className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-5 shadow-lg">
                {/* SVG Magnifying Glass Icon */}
                <img
                  className="w-[17.49px] h-[17.49px]"
                  src={searchicon}
                  alt="Search"
                />

                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  className="w-full bg-transparent text-[18px] text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>

              {/* 2. Lime Green Search Button Pill */}
              <button
                type="button"
                className="cursor-pointer flex h-[52px] shrink-0 items-center justify-center rounded-full bg-[#ccff00] px-8 text-[18px]  text-black transition hover:bg-[#b8e600] active:scale-95"
              >
                Search
              </button>
            </div>
          </div>

          <img
            src={yellowPill}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-80px] top-[10%] z-0 w-[370px] h-[370px] object-contain select-none"
          />

          {/* 2. White Pyramid (Middle Right) */}
          <img
            src={whitePyramid}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[18%] top-[38%] z-10 w-[188.93px] h-[188.93px] object-contain select-none"
          />

          {/* 3. White Spring / Zigzag (Bottom Right) */}
          <img
            src={whiteSpring}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[10%] bottom-[5%] z-10 w-[331.53px] h-[331.53px] object-contain select-none"
          />

          <img
            src={whiteTorus}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] bottom-[1%] z-21 w-[343.68px]  h-[343.68px] object-contain select-none "
          />

          <div className="absolute left-[31%] bottom-[35%] z-30 rounded-3xl bg-white px-6 py-5 shadow-2xl transition-transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900">
              {cardData.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-400">
              {cardData.coursesCount} Courses &bull; {cardData.studentsCount}+
              Students
            </p>
          </div>

          {/* Right Card: Learning Progress */}
          <div className="absolute right-[30%] bottom-[30%] z-30 w-64 rounded-3xl bg-white p-6 shadow-2xl transition-transform hover:scale-105">
            <p className="text-sm font-medium text-gray-500">
              Learning Progress
            </p>

            <h2 className="mt-2 text-5xl font-black tracking-tight text-gray-900">
              {cardData.learningProgress}%
            </h2>

            {/* Progress Bar Track */}
            <div className="mt-5 h-3 w-full rounded-full bg-gray-100 overflow-hidden">
              {/* Active Fill */}
              <div
                className="h-full rounded-full bg-[#CCFF00] transition-all duration-500"
                style={{ width: `${cardData.learningProgress}%` }}
              />
            </div>
          </div>

          <HappyStudentsCard />
          <div className="relative z-20 mx-auto mt-14 h-[480px] max-w-[1000px] ">
            <div className="absolute left-1/2 h-[1149px] w-[1149px] -translate-x-1/2  bg-[#ccff00] rounded-full border-[330px] border-[#ccff00] bg-transparent" />
            <img
              src={studentImage}
              alt="Student"
              className="absolute bottom-0 left-1/2 z-30 w-[578px] h-[541px] -translate-x-1/2 object-contain"
            />
          </div>
        </section>
        <LogoTicker />
        <CategorySection />
      </main>
    </>
  );
};

export default Home;
