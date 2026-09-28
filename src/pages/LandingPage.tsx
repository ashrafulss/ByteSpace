import React from "react";
import studentImage from "../assets/student-01.png";
import searchicon from "../assets/search.png";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
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
        className="relative z-10 min-h-[calc(100vh-120px)] overflow-hidden"
      >
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
                className="w-full bg-transparent text-[15px] text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>

            {/* 2. Lime Green Search Button Pill */}
            <button
              type="button"
              className="flex h-[52px] shrink-0 items-center justify-center rounded-full bg-[#ccff00] px-8 text-[15px] font-semibold text-black transition hover:bg-[#b8e600] active:scale-95"
            >
              Search
            </button>
          </div>
        </div>

        {/* <div className="relative z-20 mx-auto mt-10 h-[480px] max-w-[1000px]">
          <div className="absolute bottom-[-160px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#ccff00] sm:h-[680px] sm:w-[680px]" />
          <img
            src={studentImage}
            alt="Student"
            className="absolute bottom-0 left-1/2 z-30 w-[420px] -translate-x-1/2 object-contain"
          />
        </div> */}
      </section>
    </main>
  );
};

export default Home;
