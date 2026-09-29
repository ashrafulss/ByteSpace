import { useEffect, useState } from "react";
import type { LearningCategory } from "../types/learningCategory";
import { getLearningCategories } from "../api/learningCategoryApi";

interface UseLearningCategoriesReturn {
  categories: LearningCategory[];
  loading: boolean;
  error: string | null;
}

export const useLearningCategories = (): UseLearningCategoriesReturn => {
  const [categories, setCategories] = useState<LearningCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getLearningCategories();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
