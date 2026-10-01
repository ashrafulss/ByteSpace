import { useEffect, useState } from "react";
import type { CategoryList } from "../types/categoryList";
import { getCategoryList } from "../api/categoryListApi";

interface UseCategoryListReturn {
  categoryList: CategoryList;
  loading: boolean;
  error: string | null;
}

export const useCategoryList = (): UseCategoryListReturn => {
  const [categoryList, setCategoryList] = useState<CategoryList>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        setLoading(true);
        const data = await getCategoryList();
        setCategoryList(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryList();
  }, []);

  return { categoryList, loading, error };
};
