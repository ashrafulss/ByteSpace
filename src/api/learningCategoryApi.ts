import type { LearningCategory } from "../types/learningCategory";

export const getLearningCategories = async (): Promise<LearningCategory[]> => {
  const response = await fetch("/mocks/learning-categories.json");
  if (!response.ok) {
    throw new Error("Failed to fetch learning categories");
  }
  return response.json();
};
