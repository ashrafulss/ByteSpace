import { useEffect, useState } from "react";
import { getCategoryData } from "../api/categoryApi";
import type { CardData } from "../types/category";

interface UseCategoryReturn {
  data: CardData | null;
  loading: boolean;
  error: string | null;
}

export const useCategory = (): UseCategoryReturn => {
  const [data, setData] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategoryData = async () => {
      try {
        setLoading(true);

        const result = await getCategoryData();

        setData(result);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    loadCategoryData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
