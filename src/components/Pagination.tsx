import React, { useState } from "react";

interface PaginationProps {
  totalPages?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages = 5,
  initialPage = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className="flex items-center gap-6">
      {/* Previous Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Previous Page"
      >
        <svg
          className="h-5 w-5 stroke-[2.5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-6">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          const isActive = currentPage === page;

          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              className={`text-lg font-bold transition-colors ${
                isActive ? "text-gray-400" : "text-gray-900 hover:text-black"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Next Page"
      >
        <svg
          className="h-5 w-5 stroke-[2.5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
