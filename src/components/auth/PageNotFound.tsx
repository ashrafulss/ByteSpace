import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header Banner Container */}
      <div className="relative min-h-screen bg-[#0645e8] text-white flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Background Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between">
          {Array.from({ length: 13 }).map((_, index) => (
            <div key={index} className="h-full border-r-2 border-white/20" />
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
          className="w-full py-8  flex flex-col items-center"
          style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
        >
          {/* Big Gradient 404 Text - Scaled for Mobile, Tablet & Desktop */}
          <h1 className="text-[160px] sm:text-[280px] md:text-[360px] lg:text-[480px] font-semibold tracking-tighter leading-none bg-gradient-to-b from-[#D4FB20] to-[#709800] bg-clip-text text-transparent select-none">
            404
          </h1>

          {/* Main Title - Scaled smoothly from mobile to lg screens */}
          <h2 className="mt-[-24px] sm:mt-[-50px] md:mt-[-80px] lg:mt-[-120px] text-2xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold tracking-tight text-white leading-tight">
            The page you are looking <br className="hidden sm:inline" /> for
            doesn’t exist
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base font-light text-white/80 tracking-wide max-w-md sm:max-w-xl">
            Try to use a correct URL or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="mt-6 sm:mt-8 mb-6 inline-flex items-center justify-center rounded-full bg-[#D4FB20] px-6 sm:px-8 py-2.5 sm:py-3 font-poppins text-xs sm:text-sm font-semibold text-black transition-all hover:bg-[#b8e600] hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
