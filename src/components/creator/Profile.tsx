import React from "react";

export const Profile: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header Banner Container */}
      <div className="relative overflow-hidden bg-[#0645e8] py-14 text-white">
        {/* Background Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between">
          {Array.from({ length: 13 }).map((_, index) => (
            <div key={index} className="h-full border-r-2 border-white/20" />
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1) 2px, transparent 2px)`,
            backgroundSize: "100% 120px",
          }}
        />

        {/* Banner Content Container — Aligned to match Header's 8.333% offset */}
        <div
          className="relative z-10 w-full"
          style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="PurePearl Studio"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-[#D4FB20] px-3 py-0.5 text-xs font-semibold text-black">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-sm font-light text-white/80">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 max-w-3xl space-y-2 text-left text-xs font-light text-white/90 sm:text-sm">
            <p>
              Welcome to the creative world of [Creator's Name]. Here, you'll
              discover the passion, expertise, and inspiration that drive my
              creative journey. Let's explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>
          </div>

          {/* Stats & Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black shadow-sm sm:text-sm">
                3 Products
              </span>
              <span className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black shadow-sm sm:text-sm">
                12 Followers
              </span>
            </div>

            <button
              type="button"
              className="rounded-full bg-[#D4FB20] px-7 py-2.5 text-xs font-semibold text-black transition hover:bg-[#b8e600] active:scale-95 sm:text-sm"
            >
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Main Filter & Content Area — Aligned to match Header's 8.333% offset */}
      <div
        className="w-full py-8"
        style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>⚙</span> Filter
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>📊</span> Level
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>🏷</span> Category
            </button>
          </div>

          <div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>≡</span> Most relevant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
