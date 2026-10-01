import React from "react";

export interface CategoryData {
  id: number | string;
  title: string;
  icon: React.ReactNode | string;
}

interface CategoryCardProps {
  category: CategoryData;
  onClick?: (category: CategoryData) => void;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={() => onClick?.(category)}
      className={`group flex h-[167px] w-[167px] flex-col items-center justify-center gap-2 rounded-[24px] border border-[#CED0D3] bg-white p-4 transition-all duration-300 hover:shadow-md cursor-pointer ${className}`}
    >
      {/* Lime Icon Container */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D1F300] transition-transform duration-200 group-hover:scale-105">
        {typeof category.icon === "string" ? (
          <img
            src={category.icon}
            alt={category.title}
            className="h-6 w-6 object-contain"
          />
        ) : (
          category.icon
        )}
      </div>

      {/* Title - Label M (Satoshi 16px Medium) */}
      <h3 className="font-satoshi text-center text-[20px] font-medium leading-[120%] tracking-normal text-gray-900">
        {category.title}
      </h3>
    </div>
  );
};

export default CategoryCard;
