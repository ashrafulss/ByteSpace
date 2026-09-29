import React, { useState } from "react";

export const CourseReviewsTab: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All rating");

  const ratingsSummary = [
    { stars: 5, count: 720, width: "85%" },
    { stars: 4, count: 120, width: "45%" },
    { stars: 3, count: 21, width: "15%" },
    { stars: 2, count: 12, width: "8%" },
    { stars: 1, count: 16, width: "10%" },
  ];

  const reviews = [
    {
      id: 1,
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: 2,
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: 3,
      name: "Cody Fisher",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
  ];

  const filters = ["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"];

  return (
    <div className="mt-8 space-y-8 font-sans">
      {/* Intro */}
      <div className="space-y-2">
        <h3 className="text-base font-bold text-gray-900 tracking-tight">
          What Learners Are Saying
        </h3>
        <p className="text-[13px] leading-relaxed text-gray-500">
          Discover what our learners have to say about their experience with
          "Build Digital Assets: A Comprehensive Guide." Read reviews and
          ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation[cite: 4].
        </p>
      </div>

      {/* Ratings Overview Card */}
      <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-[#CCFF00]">
            <span className="text-xs font-medium text-gray-800">Ratings</span>
            <span className="text-3xl font-black text-black">4.7</span>
          </div>

          <div className="flex-1 w-full space-y-2">
            {ratingsSummary.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-[#CCFF00]"
                    style={{ width: item.width }}
                  />
                </div>
                <div className="flex items-center text-yellow-400 text-xs">
                  {"★".repeat(5)}
                </div>
                <span className="w-8 text-right text-[11px] font-medium text-gray-400">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews Section */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-gray-900">Individual Reviews:</h4>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                selectedFilter === filter
                  ? "bg-[#CCFF00] text-black"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-4 pt-2">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl border border-gray-200 p-5 bg-white space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-gray-900">
                      {rev.name}
                    </h5>
                    <p className="text-[11px] text-gray-400">{rev.role}</p>
                  </div>
                </div>
                <span className="text-[11px] text-gray-400">{rev.time}</span>
              </div>

              <div className="text-xs text-yellow-400">★★★★★</div>

              <p className="text-[12px] leading-relaxed text-gray-500 font-normal">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseReviewsTab;
