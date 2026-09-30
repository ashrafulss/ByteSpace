import React from "react";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../../hooks/useCourses";
import { CourseCard } from "./CourseCard";
import type { Course } from "../../types/course";

interface CourseGridProps {
  columns?: string; // Allows overriding responsive grid columns
  onCourseClick?: (course: Course) => void;
}

const CourseGrid: React.FC<CourseGridProps> = ({
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  onCourseClick,
}) => {
  const navigate = useNavigate();
  const { courses, loading, error } = useCourses();

  const handleCardClick = (course: Course) => {
    if (onCourseClick) {
      onCourseClick(course);
    } else {
      navigate(`/course/${course.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className={`grid gap-6 ${columns}`}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[410px] animate-pulse rounded-[28px] border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="h-48 rounded-2xl bg-gray-200" />
              <div className="mt-4 h-6 w-3/4 rounded bg-gray-200" />
              <div className="mt-2 h-4 w-1/3 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return null;

  return (
    <section id="courses" className="w-full bg-white px-4">
      <div
        className="w-full py-8"
        style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
      >
        <div className={`grid gap-6 ${columns}`}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCardClick(course)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
