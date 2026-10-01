import type { CategoryList } from "../types/categoryList";

export const getCategoryList = async (): Promise<CategoryList> => {
  const response = await fetch("/mocks/categories-list.json");
  if (!response.ok) {
    throw new Error("Failed to fetch category list");
  }
  return response.json();
};
