import React from "react";
import sneak1 from "../../assets/sneak-1.jpg";
import sneak2 from "../../assets/sneak-2.jpg";
import sneak3 from "../../assets/sneak-3.jpg";
import sneak4 from "../../assets/spneak-4.jpg";

export const CourseAboutTab: React.FC = () => {
  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  return (
    <div className="mt-8 space-y-8 font-sans">
      {/* Description Section */}
      <div className="space-y-4 text-[13px] leading-[1.65] text-gray-500 font-normal">
        <h3 className="text-[20px] font-semibold text-gray-900 tracking-tight">
          Description
        </h3>
        <p className="text-base leading-loose text-[#4B4C53]">
          Embark on an enlightening exploration into the world of digital
          creation with our comprehensive course, "Build Digital Assets: A
          Comprehensive Guide." This transformative learning experience invites
          you to delve deep into the intricacies of crafting impactful digital
          content. From laying the groundwork with foundational concepts to
          mastering advanced techniques, this guide is meticulously curated to
          empower you with the skills essential for navigating the dynamic
          landscape of digital asset creation.
        </p>
        <p className="text-base leading-loose text-[#4B4C53]">
          In the initial modules, you'll establish a solid foundation by
          immersing yourself in the foundational concepts that form the backbone
          of digital asset creation. Understand the fundamental elements that
          constitute compelling digital content and gain proficiency in
          leveraging these elements to communicate effectively in the digital
          realm.
        </p>
        <p className="text-base leading-loose text-[#4B4C53]">
          As you progress through the course, you'll ascend to higher levels of
          expertise, delving into the nuances of design principles that drive
          impactful creations. Uncover the secrets behind effective visual
          communication, exploring color theory, typography, and layout
          strategies that elevate your digital assets to new heights. Engage in
          hands-on exercises that reinforce your understanding, allowing you to
          apply these principles in practical scenarios.
        </p>
      </div>

      {/* Sneak Peak Gallery */}
      <div>
        <h4 className="text-[20px] font-semibold text-gray-900">Sneak Peak</h4>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <img
            src={sneak1}
            alt="Sneak peak 1"
            className="h-[125px] w-[167px] rounded-2xl object-cover shadow-sm"
          />
          <img
            src={sneak2}
            alt="Sneak peak 2"
            className="h-[125px] w-[167px]  rounded-2xl object-cover shadow-sm"
          />
          <img
            src={sneak3}
            alt="Sneak peak 3"
            className="h-[125px] w-[167px]  rounded-2xl object-cover shadow-sm"
          />
          <img
            src={sneak4}
            alt="Sneak peak 4"
            className="h-[125px] w-[167px]  rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>

      {/* Key Points List */}
      <div>
        <h4 className="text-[20px] font-semibold text-gray-900">Key Points</h4>
        <ul className="mt-4 space-y-3 text-base leading-loose text-[#4B4C53]">
          {keyPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-2.5 text-[13px] font-medium text-gray-600"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#003BE2"
                />
              </svg>

              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseAboutTab;
