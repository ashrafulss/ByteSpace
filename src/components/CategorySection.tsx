import React, { useState } from "react";
import { useCategoryList } from "../hooks/useCategoryList";

const INITIAL_VISIBLE_COUNT = 18; // Number of pills shown initially

const CategorySection: React.FC = () => {
  const { categoryList, loading, error } = useCategoryList();
  const [activeCategory, setActiveCategory] = useState<string>("Featured");
  const [showAll, setShowAll] = useState<boolean>(false);

  if (loading) {
    return (
      <section className="bg-white px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl animate-pulse space-y-4">
          <div className="mx-auto h-10 w-3/4 rounded bg-gray-200" />
          <div className="mx-auto h-12 w-2/3 rounded bg-gray-200" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="h-10 w-24 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) return null;

  // Determine which categories to display
  const displayedCategories = showAll
    ? categoryList
    : categoryList.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section className="bg-white px-4 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Main Heading */}
        <h2 className="font-poppins text-center text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-gray-900">
          Discover Your Passion, <br /> Build Your Skills
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl font-satoshi text-center text-[18px] font-normal leading-[160%] tracking-normal text-gray-400">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Category Pills Group */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 transition-all duration-300">
          {displayedCategories.map((category) => {
            const isActive = activeCategory === category.name;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.name)}
                className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 font-satoshi text-[16px] leading-[120%] tracking-normal transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D1F300] font-semibold text-gray-900 shadow-sm"
                    : "bg-gray-100 font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {category.name}
              </button>
            );
          })}

          {/* + More / - Less Toggle Button */}
          {categoryList.length > INITIAL_VISIBLE_COUNT && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full px-4 py-2.5 font-satoshi text-[16px] font-semibold leading-[120%] tracking-normal text-[#0C47FB] cursor-pointer transition-colors hover:text-blue-700"
            >
              {showAll ? "- Less" : "+ More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
