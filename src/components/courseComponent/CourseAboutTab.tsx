import React from "react";

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
        <h3 className="text-base font-bold text-gray-900 tracking-tight">
          Description
        </h3>
        <p>
          Embark on an enlightening exploration into the world of digital
          creation with our comprehensive course, "Build Digital Assets: A
          Comprehensive Guide." This transformative learning experience invites
          you to delve deep into the intricacies of crafting impactful digital
          content. From laying the groundwork with foundational concepts to
          mastering advanced techniques, this guide is meticulously curated to
          empower you with the skills essential for navigating the dynamic
          landscape of digital asset creation[cite: 2].
        </p>
        <p>
          In the initial modules, you'll establish a solid foundation by
          immersing yourself in the foundational concepts that form the backbone
          of digital asset creation. Understand the fundamental elements that
          constitute compelling digital content and gain proficiency in
          leveraging these elements to communicate effectively in the digital
          realm[cite: 2].
        </p>
        <p>
          As you progress through the course, you'll ascend to higher levels of
          expertise, delving into the nuances of design principles that drive
          impactful creations. Uncover the secrets behind effective visual
          communication, exploring color theory, typography, and layout
          strategies that elevate your digital assets to new heights. Engage in
          hands-on exercises that reinforce your understanding, allowing you to
          apply these principles in practical scenarios[cite: 2].
        </p>
      </div>

      {/* Sneak Peak Gallery */}
      <div>
        <h4 className="text-sm font-bold text-gray-900">Sneak Peak</h4>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
            alt="Sneak peak 1"
            className="h-28 w-full rounded-2xl object-cover shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=400&q=80"
            alt="Sneak peak 2"
            className="h-28 w-full rounded-2xl object-cover shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80"
            alt="Sneak peak 3"
            className="h-28 w-full rounded-2xl object-cover shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
            alt="Sneak peak 4"
            className="h-28 w-full rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>

      {/* Key Points List */}
      <div>
        <h4 className="text-sm font-bold text-gray-900">Key Points</h4>
        <ul className="mt-4 space-y-3">
          {keyPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-2.5 text-[13px] font-medium text-gray-600"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1859FF] text-white">
                <svg
                  className="h-3 w-3 stroke-[3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseAboutTab;
