import type { Review } from "../types/review";

export const getReviewData = async (): Promise<Review> => {
  const response = await fetch("/mocks/reviews.json");

  if (!response.ok) {
    throw new Error("Failed to fetch category data");
  }

  return response.json();
};
