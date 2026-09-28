import React from "react";

const Loading: React.FC = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0645e8] text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 flex justify-between opacity-30">
        {Array.from({ length: 13 }).map((_, index) => (
          <div key={index} className="h-full border-r-2 border-white/30" />
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.6) 2px, transparent 2px)",
          backgroundSize: "100% 120px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[60px] border-[#ccff00]/80" />

      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[70px] border-white/20" />

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Spinner */}
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border-[7px] border-white/20" />

          <div className="absolute inset-0 animate-spin rounded-full border-[7px] border-transparent border-t-[#ccff00]" />

          <div className="absolute inset-[18px] rounded-full bg-white/10 backdrop-blur-sm" />
        </div>

        {/* Text */}
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">
          Loading Courses
        </h2>

        <p className="mt-2 text-sm text-white/60">
          Preparing your learning experience...
        </p>

        {/* Dots */}
        <div className="mt-5 flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#ccff00]" />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#ccff00]"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#ccff00]"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Loading;
