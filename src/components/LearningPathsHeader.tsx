import React from "react";

const LearningPathsHeader: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 text-center sm:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h2 className="font-poppins text-center text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#0B101D]">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="mx-auto mt-4 max-w-2xl font-satoshi text-center text-[18px] font-normal leading-[160%] tracking-normal text-[#838B98]">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>
    </section>
  );
};

export default LearningPathsHeader;
