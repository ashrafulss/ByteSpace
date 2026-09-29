import React from "react";

export const CourseLessonsTab: React.FC = () => {
  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction to Digital Assets",
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      id: 2,
      title: "Module 2: Design Principles for Impact",
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      id: 4,
      title: "Module 4: User-Centric Design Strategies",
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      id: 5,
      title: "Module 5: Interactive Media and Engagement",
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      id: 6,
      title: "Module 6: Project Showcase and Critique",
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      id: 7,
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  return (
    <div className="mt-8 space-y-8 font-sans">
      {/* Overview */}
      <div className="space-y-2">
        <h3 className="text-base font-bold text-gray-900 tracking-tight">
          Explore the Modules
        </h3>
        <p className="text-[13px] leading-relaxed text-gray-500">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences[cite: 3].
        </p>
      </div>

      {/* Lesson List */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-4">Lesson List</h4>
        <div className="space-y-5">
          {modules.map((mod) => (
            <div key={mod.id} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#CCFF00]">
                <svg
                  className="h-5 w-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
              </div>
              <div>
                <h5 className="text-xs font-bold text-gray-900">{mod.title}</h5>
                <p className="mt-1 text-[12px] leading-relaxed text-gray-500">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Content Description */}
      <div className="space-y-2">
        <h4 className="text-sm font-bold text-gray-900">Lesson Content</h4>
        <p className="text-[13px] leading-relaxed text-gray-500">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes[cite:
          3].
        </p>
      </div>

      {/* Progress Tracking */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-bold text-gray-900">
            Lesson Progress Tracking
          </h4>
          <p className="mt-1 text-[13px] leading-relaxed text-gray-500">
            Witness your growth as you complete lessons, with an intuitive
            progress tracking feature guiding you through your learning
            journey[cite: 3].
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-xs">
          <span className="text-[11px] font-semibold text-gray-500">
            Learning Progress
          </span>
          <div className="mt-1 text-2xl font-black text-gray-900">55%</div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#CCFF00]"
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLessonsTab;
