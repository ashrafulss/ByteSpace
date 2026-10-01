import type { Course } from "../types/course";

export const getCourses = async (): Promise<Course[]> => {
  const response = await fetch("/mocks/courses.json");
  if (!response.ok) {
    throw new Error("Failed to fetch courses data");
  }
  return response.json();
};
