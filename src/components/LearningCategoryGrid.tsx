import React from "react";
import { useLearningCategories } from "../hooks/useLearningCategories";
import { CategoryCard } from "./CategoryCard";
import { getCategoryIcon } from "../utils/getCategoryIcon";

const LearningCategoryGrid: React.FC = () => {
  const { categories, loading, error } = useLearningCategories();

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  return (
    <section className="w-full bg-white px-4 ">
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
              onClick={(cat) => console.log("Selected:", cat.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningCategoryGrid;
