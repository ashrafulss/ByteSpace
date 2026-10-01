import React from "react";
import { useReview } from "../hooks/useReview";

interface HappyCardProps {
  className?: string;
  starClassname?: string;
}

const HappyStudentsCard: React.FC<HappyCardProps> = ({
  className = "",
  starClassname,
}) => {
  const { data, loading, error } = useReview();

  if (loading) {
    return (
      <div className="absolute left-[18%] bottom-[10%] z-30 h-[121px] w-[258px] animate-pulse rounded-3xl bg-white p-5 shadow-2xl" />
    );
  }

  if (error || !data) return null;

  return (
    <div
      className={`${className} absolute left-[29%] bottom-[10%] z-30 flex h-[121px] w-[258px] flex-col justify-between rounded-3xl bg-white p-5 shadow-2xl transition-transform hover:scale-105`}
    >
      {/* Title & Rating Header */}
      <div>
        <h4 className="text-lg font-bold text-gray-900">{data.title}</h4>
        <div className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-gray-400">
          <span className="font-semibold text-gray-800">{data.rating}</span>
          <span>({data.reviewsCount})</span>
          {/* Yellow Star Icon */}
          <svg
            className={`h-4 w-4 fill-[#CCFF00] text-[#CCFF00] ${starClassname}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      {/* Avatar Stack + Lime Badge */}
      <div className="flex items-center -space-x-2.5">
        {data.studentImages.map((imgUrl, idx) => (
          <img
            key={idx}
            src={imgUrl}
            alt={`Student ${idx + 1}`}
            className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm"
          />
        ))}
        {/* Lime Total Count Badge */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] text-xs font-bold text-gray-900 shadow-sm">
          {data.totalStudentsBadge}
        </div>
      </div>
    </div>
  );
};

export default HappyStudentsCard;
