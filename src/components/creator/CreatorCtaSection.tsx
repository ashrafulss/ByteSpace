import React from "react";

import limeSpiralLeft from "../../assets/yellow-spiral.png";
import whiteZigzag from "../../assets/spiral.png";
import whiteCone from "../../assets/white-triangle-1.png";
import limeTorus from "../../assets/yellow-circle-1.png";
import limePyramid from "../../assets/yellow-triangle.png";
import whitePill from "../../assets/white-squre.png";
import limeSpringRight from "../../assets/yellow-spiral-02.png";

interface CreatorCtaSectionProps {
  onJoinClick?: () => void;
}

export const CreatorCtaSection: React.FC<CreatorCtaSectionProps> = ({
  onJoinClick,
}) => {
  return (
    <section
      id="creators"
      className="relative w-full overflow-hidden py-20 text-white sm:py-28 lg:py-32"
    >
      {/* --- Background Blueprint Grid Pattern --- */}
      <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between opacity-30">
        {/* Vertical Grid Lines */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="h-full border-r border-white/30" />
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "100% 80px",
        }}
      />

      {/* --- Decorative Floating 3D Assets --- */}

      {/* Top Left: Lime Curved Spiral */}
      <img
        src={limeSpiralLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-[-5%] z-10 w-[160px] sm:w-[220px] lg:left-[-2px] lg:top-[-30%] lg:w-[280px] object-contain select-none"
      />

      {/* Top Left Inner: White Zigzag Spring */}
      <img
        src={whiteZigzag}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[8%] z-10 hidden w-[110px] sm:block lg:left-[13%] lg:top-[5%] lg:w-[150px] object-contain select-none"
      />

      {/* Bottom Left: White Cone */}
      <img
        src={whiteCone}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 bottom-[18%] z-10 w-[110px] sm:w-[150px] lg:left-[-2px] lg:bottom-[20%] lg:w-[150px] object-contain select-none"
      />

      {/* Bottom Left: Lime Torus Ring */}
      <img
        src={limeTorus}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[3%] bottom-[-15%] z-10 w-[200px] sm:w-[280px] lg:left-[4%] lg:bottom-[-1%] lg:w-[360px] object-contain select-none"
      />

      {/* Top Right: Lime Pyramid */}
      <img
        src={limePyramid}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] top-[8%] z-10 hidden w-[110px] sm:block lg:right-[15%] lg:top-[5%] lg:w-[180px] object-contain select-none"
      />

      {/* Far Right: Big White Rounded Cylinder / Pill */}
      <img
        src={whitePill}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-[10%] z-10 w-[200px] sm:w-[280px] lg:right-[-5px] lg:top-[5%] lg:w-[200px] object-contain select-none"
      />

      {/* Bottom Right: Lime Spring / Coil */}
      <img
        src={limeSpringRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[2%] bottom-[-10%] z-10 w-[180px] sm:w-[240px] lg:right-[6%] lg:bottom-[-22%] lg:w-[320px] object-contain select-none"
      />

      {/* --- Center Banner Content --- */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="font-poppins text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[44px] lg:leading-[1.15]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-6 text-[18px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            type="button"
            onClick={onJoinClick}
            className="cursor-pointer rounded-full bg-[#ccff00] px-8  font-poppins text-base  text-black transition-all duration-200 hover:bg-[#b8e600] hover:shadow-lg active:scale-95 sm:px-10 sm:py-2 sm:text-lg"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorCtaSection;
