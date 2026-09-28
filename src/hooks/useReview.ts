import { useEffect, useState } from "react";

import type { Review } from "../types/review";
import { getReviewData } from "../api/reviewApi";

interface UseReviewReturn {
  data: Review | null;
  loading: boolean;
  error: string | null;
}

export const useReview = (): UseReviewReturn => {
  const [data, setData] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReviewData = async () => {
      try {
        setLoading(true);

        const result = await getReviewData();

        setData(result);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    loadReviewData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
