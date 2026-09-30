import React, { useState } from "react";
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
import CourseGrid from "../components/CourseGrid";
import LearningPathsHeader from "../components/LearningPathsHeader";
import LearningCategoryGrid from "../components/LearningCategoryGrid";
import GrowthHeroSection from "../components/GrowthHeroSection";
import CreateManageSection from "../components/CreateManageSection";
import CreatorCtaSection from "../components/CreatorCtaSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { data: cardData, loading, error } = useCategory();

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("catch the search input value:-----", searchQuery);
    navigate("/search");
  };

  const handleJoinAsCreator = () => {
    navigate("/creator");
  };

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
    <main className="relative min-h-screen overflow-hidden bg-[#0645e8] text-white">
      {/* Blueprint Grid Lines Background */}
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

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 -bottom-7 min-h-[calc(100vh-120px)] overflow-hidden"
      >
        <img
          src={yellowspiral}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-40px] top-[15%] z-0 w-[180px] object-contain select-none sm:w-[240px] lg:left-0 lg:w-[320px]"
        />

        <img
          src={whitespiral}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[31%] left-[13%] z-0 w-[200px] object-contain select-none"
        />

        <div className="relative z-20 mx-auto max-w-[1400px] px-2 pt-12 text-center">
          <h1 className="mx-auto max-w-5xl text-[72px] font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Get Access to Hundreds
            <br />
            <span>Courses Available</span>
          </h1>

          <p className="mx-auto mt-6 text-[18px] leading-relaxed text-white/80">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="mx-auto mt-16 flex w-full max-w-2xl items-center gap-3 px-4">
            <div className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-5 shadow-lg">
              <img
                className="h-[17.49px] w-[17.49px]"
                src={searchicon}
                alt="Search"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-[18px] text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              type="button"
              className="flex h-[52px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#ccff00] px-8 text-[18px] text-black transition hover:bg-[#b8e600] active:scale-95"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <img
          src={yellowPill}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-80px] top-[10%] z-0 h-[370px] w-[370px] object-contain select-none"
        />

        <img
          src={whitePyramid}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[18%] top-[38%] z-10 h-[188.93px] w-[188.93px] object-contain select-none"
        />

        <img
          src={whiteSpring}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[5%] right-[10%] z-10 h-[331.53px] w-[331.53px] object-contain select-none"
        />

        <img
          src={whiteTorus}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[1%] left-[10%] z-21 h-[343.68px] w-[343.68px] object-contain select-none"
        />

        <div className="absolute bottom-[35%] left-[31%] z-30 rounded-3xl bg-white px-6 py-5 shadow-2xl transition-transform hover:scale-105">
          <h3 className="text-xl font-bold text-gray-900">{cardData.title}</h3>
          <p className="mt-1 text-sm font-medium text-gray-400">
            {cardData.coursesCount} Courses &bull; {cardData.studentsCount}+
            Students
          </p>
        </div>

        <div className="absolute bottom-[30%] right-[30%] z-30 w-64 rounded-3xl bg-white p-6 shadow-2xl transition-transform hover:scale-105">
          <p className="text-sm font-medium text-gray-500">Learning Progress</p>

          <h2 className="mt-2 text-5xl font-black tracking-tight text-gray-900">
            {cardData.learningProgress}%
          </h2>

          <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#CCFF00] transition-all duration-500"
              style={{ width: `${cardData.learningProgress}%` }}
            />
          </div>
        </div>

        <HappyStudentsCard />
        <div className="relative z-20 mx-auto mt-14 h-[480px] max-w-[1000px]">
          <div className="absolute left-1/2 h-[1149px] w-[1149px] -translate-x-1/2 rounded-full border-[330px] border-[#ccff00] bg-transparent" />
          <img
            src={studentImage}
            alt="Student"
            className="absolute bottom-0 left-1/2 z-30 h-[541px] w-[578px] -translate-x-1/2 object-contain"
          />
        </div>
      </section>

      {/* Sections */}
      <LogoTicker />
      <CategorySection />

      {/* CourseGrid handles navigation internally via react-router-dom */}
      <CourseGrid />

      <LearningPathsHeader />
      <LearningCategoryGrid />
      <GrowthHeroSection />
      <CreateManageSection />
      <CreatorCtaSection onJoinClick={handleJoinAsCreator} />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
