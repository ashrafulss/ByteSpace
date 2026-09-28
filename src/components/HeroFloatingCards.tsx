import React from "react";

export const HeroFloatingCards: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* ================= 1. UI/UX DESIGN CARD (Top Left) ================= */}
      <div className="absolute left-[2%] top-[12%] z-30 rounded-2xl bg-white px-6 py-4 shadow-2xl transition-transform hover:scale-105">
        <h3 className="text-lg font-bold text-gray-900">UI/UX Design</h3>
        <p className="mt-1 text-sm font-medium text-gray-400">
          200 Courses &bull; 1000+ Students
        </p>
      </div>

      {/* ================= 2. LEARNING PROGRESS CARD (Top Right) ================= */}
      <div className="absolute right-[10%] -bottom-[50%] z-30 w-72 rounded-2xl bg-white px-6 py-5 shadow-2xl transition-transform hover:scale-105">
        <p className="text-sm font-semibold text-gray-600">Learning Progress</p>
        <p className="mt-1 text-4xl font-extrabold text-gray-900">55%</p>

        {/* Progress Bar */}
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-[55%] rounded-full bg-[#ccff00]" />
        </div>
      </div>

      {/* ================= 3. HAPPY STUDENTS CARD (Bottom Left) ================= */}
      <div className="absolute bottom-[5%] left-[0%] z-30 rounded-2xl bg-white p-5 shadow-2xl transition-transform hover:scale-105">
        <div className="flex items-center gap-1.5">
          <span className="text-base font-bold text-gray-900">
            Happy Students
          </span>
        </div>

        <div className="mt-0.5 flex items-center gap-1 text-xs">
          <span className="font-bold text-gray-900">4.5</span>
          <span className="text-yellow-400">★</span>
          <span className="text-gray-400">(240)</span>
        </div>

        {/* Avatar Stack */}
        <div className="mt-3 flex items-center -space-x-2.5">
          <img
            src="/assets/avatar1.jpg"
            alt="Student"
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src="/assets/avatar2.jpg"
            alt="Student"
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src="/assets/avatar3.jpg"
            alt="Student"
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src="/assets/avatar4.jpg"
            alt="Student"
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src="/assets/avatar5.jpg"
            alt="Student"
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />
          <img
            src="/assets/avatar6.jpg"
            alt="Student"
            className="h-8 w-8 rounded-full border-2 border-white object-cover"
          />
          {/* Badge */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#ccff00] text-[10px] font-bold text-black">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
};
