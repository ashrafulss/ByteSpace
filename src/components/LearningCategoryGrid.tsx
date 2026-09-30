import React from "react";
import { useLearningCategories } from "../hooks/useLearningCategories";
import { CategoryCard } from "./catagory/CategoryCard";
import { getCategoryIcon } from "../utils/getCategoryIcon";
import { useNavigate } from "react-router-dom";

const LearningCategoryGrid: React.FC = () => {
  const { categories, loading, error } = useLearningCategories();

  const navigate = useNavigate();

  const handleCatagory = (route: string) => {
    navigate(route);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  return (
    <section className="w-full bg-white px-4 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              category={{
                id: item.id,
                title: item.title,
                // Map string key from JSON -> React Node component
                icon: getCategoryIcon(item.icon),
              }}
              onClick={() => handleCatagory(item.route)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningCategoryGrid;
