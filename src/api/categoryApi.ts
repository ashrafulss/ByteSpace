import type { CardData } from "../types/category";

export const getCategoryData = async (): Promise<CardData> => {
  const response = await fetch("/mocks/categories.json");

  if (!response.ok) {
    throw new Error("Failed to fetch category data");
  }

  return response.json();
};
