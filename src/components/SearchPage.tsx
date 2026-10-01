import React, { useEffect, useRef, useState } from "react";

import searchicon from "../assets/search.png";

import { useNavigate } from "react-router-dom";
import type { CourseGridProps } from "./courseComponent/CourseGrid";
import { useCourses } from "../hooks/useCourses";
import type { Course } from "../types/course";
import CourseCard from "./courseComponent/CourseCard";
import Pagination from "./Pagination";
import { useCategoryList } from "../hooks/useCategoryList";

const INITIAL_VISIBLE_COUNT = 18;

const TARGET_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const SearchPage: React.FC<CourseGridProps> = ({
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  onCourseClick,
}) => {
  const { courses, loading, error } = useCourses();
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Courses");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { categoryList } = useCategoryList();

  const options = ["Courses", "E-Books", "Software", "Bundles"];
  const [activeCategory, setActiveCategory] = useState<string>("Featured");
  const [showAll, setShowAll] = useState<boolean>(false);

const displayedCategories = categoryList.filter((category) =>
    TARGET_CATEGORIES.includes(category.name)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleFeature = (route: string, name: string) => {
    setActiveCategory(name);
    console.log(route);
    navigate(route);
  };

  const handleCardClick = (course: Course) => {
    if (onCourseClick) {
      onCourseClick(course);
    } else {
      navigate(`/course/${course.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFollow = () => {
    navigate("/follow");
  };

  const handleSearch = () => {
    console.log("catch the search input value:-----", searchQuery);
    navigate("/search-page");
  };

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
          <div className="relative z-20 mx-auto max-w-[1400px] px-2  text-center">
            <h1 className="mx-auto max-w-5xl text-[72px] font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Find Your Next Course
            </h1>

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

              <div
                className="relative inline-block text-left"
                ref={dropdownRef}
              >
                {/* Dropdown Trigger Button */}
                <button
                  type="button"
                  className="flex h-[52px] shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#ccff00] px-8 text-[18px] font-medium text-black transition hover:bg-[#b8e600] active:scale-95"
                  onClick={() => setIsOpen((prev) => !prev)}
                  aria-expanded={isOpen}
                >
                  <span>{selectedOption}</span>
                  {/* Chevron Icon matching your image */}
                  <svg
                    className={`h-4 w-4 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu Overlay */}
                {isOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                    <div className="py-2">
                      {options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`flex w-full items-center px-5 py-3 text-left text-[16px] transition hover:bg-gray-100 ${
                            selectedOption === option
                              ? "font-semibold text-black"
                              : "font-normal text-gray-700"
                          }`}
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
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
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.9616 2H12.9616L7.9516 8.3L2.9616 2ZM0.211604 1.61C2.2316 4.2 5.9616 9 5.9616 9V15C5.9616 15.55 6.4116 16 6.9616 16H8.9616C9.5116 16 9.9616 15.55 9.9616 15V9C9.9616 9 13.6816 4.2 15.7016 1.61C16.2116 0.95 15.7416 0 14.9116 0L1.0016 0C0.171604 0 -0.298396 0.95 0.211604 1.61Z"
                    fill="#242528"
                  />
                </svg>
              </span>{" "}
              Filter
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0L15 0V16H12V0ZM0 10H3V16H0L0 10ZM6 5H9V16H6V5Z"
                    fill="#242528"
                  />
                </svg>
              </span>{" "}
              Level
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-base font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 2L6 11H17L11.5 2ZM11.5 5.84L13.43 9H9.56L11.5 5.84ZM17 13C14.51 13 12.5 15.01 12.5 17.5C12.5 19.99 14.51 22 17 22C19.49 22 21.5 19.99 21.5 17.5C21.5 15.01 19.49 13 17 13ZM17 20C15.62 20 14.5 18.88 14.5 17.5C14.5 16.12 15.62 15 17 15C18.38 15 19.5 16.12 19.5 17.5C19.5 18.88 18.38 20 17 20ZM2.5 21.5H10.5V13.5H2.5V21.5ZM4.5 15.5H8.5V19.5H4.5V15.5Z"
                    fill="#242528"
                  />
                </svg>
              </span>{" "}
              Category
            </button>
          </div>

          <div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 text-lg font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12H6V10H0L0 12ZM0 0L0 2H18V0L0 0ZM0 7H12V5H0L0 7Z"
                    fill="#242528"
                  />
                </svg>
              </span>{" "}
              Most relevant
            </button>
          </div>
        </div>

        <div className="my-10 flex flex-wrap justify-center gap-3 transition-all duration-300">
          {displayedCategories.map((category) => {
            const isActive = activeCategory === category.name;
            return (
              <button
                key={category.id}
                onClick={() => handleFeature(category.route, category.name)}
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
        </div>

        <div className={`grid gap-6 mb-12 ${columns}`}>
          {courses.map((course) => (
            <>
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => handleCardClick(course)}
              />
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => handleCardClick(course)}
              />
            </>
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
