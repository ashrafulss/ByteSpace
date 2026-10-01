import React from "react";
import girlImage from "../../assets/girl.png";
import HappyStudentsCard from "../HappyStudentsCard";
import spiral from "../../assets/yellow-spiral-03.png";

export const CreateManageSection: React.FC = () => {
  const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];


  return (
    <section className="relative w-full overflow-hidden bg-[#FAFCFF] py-16 md:py-24">
      {/* 1. Bottom-Left Soft Lime/Yellow Glow */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full blur-[100px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(226,253,82,0.85) 0%, rgba(212,251,32,0.4) 50%, rgba(255,255,255,0) 80%)",
        }}
      />

      {/* 2. Top-Left / Center Soft Sky Blue Glow */}
      <div
        className="pointer-events-none absolute -top-10 left-[-5%] h-[550px] w-[550px] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(160, 190, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      {/* 3. Right Side Soft Purple/Blue Glow */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full blur-[130px] opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(180, 200, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      <div
        className="w-full py-8"
        style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* --- Left Column: Cards & Image Overlay --- */}
          <div className="relative flex justify-center lg:col-span-6 lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]">
              {/* Total Revenue Card */}
              <div className="absolute z-10 w-[232px] rounded-2xl bg-[#0038FF] sm:p-4 text-white shadow-2xl sm:left-[-8%]">
                <p className="text-[16px] font-medium ">Total Revenue</p>
                <p className="text-[10px] text-white/60">July 1–28</p>
                <p className="mt-1 font-poppins text-[24px] text-white font-bold">
                  $120.29
                </p>
                <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/20">
                  <div className="h-full w-[70%] rounded-full bg-[#CCFF00]" />
                </div>
              </div>

              {/* Year to Date Card */}
              <div className="absolute left-[-5%] top-[35%] z-10  rounded-2xl bg-[#0038FF] p-3.5 sm:p-4 text-white shadow-2xl sm:left-[-8%]">
                <p className="text-[11px] font-medium text-white/80">
                  Year to Date
                </p>
                <p className="text-[10px] text-white/60">2023</p>
                <p className="mt-1 font-poppins text-lg sm:text-xl font-bold">
                  $1,200.38
                </p>
                <div className="mt-2.5 inline-block rounded-md bg-[#CCFF00] px-2 py-0.5 text-[10px] font-bold text-black">
                  +12$
                </div>
              </div>

              {/* Main Instructor Cutout */}

              <div className="relative right-10   z-20 w-[100%]  pointer-events-none">
                <img
                  src={girlImage}
                  alt="Student with laptop"
                  className="h-auto w-full  object-contain drop-shadow-2xl scale-110"
                />
              </div>

              {/* 3D Yellow Spiral Doodle */}
              <div className="absolute w-[216px] h-[216px] left-[47%] bottom-[45%]  z-30">
                <img src={spiral} alt="" />
              </div>

              {/* Happy Students Badge */}
              <div className="absolute bottom-[12%] right-[50%]">
                <HappyStudentsCard />
              </div>
            </div>
          </div>

          {/* --- Right Column: Text & Features --- */}
          <div className="lg:col-span-6">
            <h2 className="font-poppins text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#525866] sm:text-lg lg:mt-6">
              <strong className="font-semibold text-gray-900">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0038FF] text-white">
                    <svg
                      className="h-3.5 w-3.5 stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-poppins text-base font-semibold text-gray-900 sm:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateManageSection;
