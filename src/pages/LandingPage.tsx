import React from "react";
import studentImage from "../assets/student-01.png";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0645e8] text-white">
      {/* ================= UNIFIED GLOBAL GRID (NO DOUBLE LINES) ================= */}
      {/* 12 Vertical Columns */}
      <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between">
        {Array.from({ length: 13 }).map((_, index) => (
          <div key={index} className="h-full border-r-2 border-white/30" />
        ))}
      </div>

      {/* Horizontal Grid Rows (Exact 120px height) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 2px, transparent 2px)`,
          backgroundSize: "100% 120px",
        }}
      />

      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative z-10 min-h-[calc(100vh-120px)] overflow-hidden"
      >
        {/* DECORATIVE SHAPES & CONTENT */}
        <div className="relative z-20 mx-auto max-w-[1400px] px-6 pt-12 text-center lg:px-12 lg:pt-16">
          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Get Access to Hundreds
            <br />
            <span>Courses Available</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl items-center rounded-full bg-white p-1.5 shadow-2xl">
            <span className="ml-4 mr-2 text-lg text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            <button
              type="button"
              className="rounded-full bg-[#ccff00] px-7 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
            >
              Search
            </button>
          </div>
        </div>

        {/* STUDENT AREA */}
        <div className="relative z-20 mx-auto mt-10 h-[480px] max-w-[1000px]">
          <div className="absolute bottom-[-160px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#ccff00] sm:h-[680px] sm:w-[680px]" />
          <img
            src={studentImage}
            alt="Student"
            className="absolute bottom-0 left-1/2 z-30 w-[420px] -translate-x-1/2 object-contain"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
