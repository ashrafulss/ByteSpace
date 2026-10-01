import React from "react";
// Import exported SVG/PNG logos from Figma, or use imported SVG assets
import logo1 from "../assets/logoipsum-1.png";
import logo2 from "../assets/logoipsum-2.png";
import logo3 from "../assets/logoipsum-3.png";
import logo4 from "../assets/logoipsum-4.png";
import logo5 from "../assets/logoipsum-5.png";

export const LogoTicker: React.FC = () => {
  const logos = [
    { id: 1, src: logo1, alt: "Logoipsum 1" },
    { id: 2, src: logo2, alt: "Logoipsum 2" },
    { id: 3, src: logo3, alt: "Logoipsum 3" },
    { id: 4, src: logo4, alt: "Logoipsum 4" },
    { id: 5, src: logo5, alt: "Logoipsum 5" },
  ];

  return (
    <section className="relative z-20 w-full bg-[#f5f5f5] py-10 lg:py-14">
      {/* Aligned to 12-column grid padding */}
      <div
        className="w-full py-8"
        style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-10 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center grayscale opacity-70 gap-2 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain sm:h-9 md:h-10"
              />
              <span className="font-clash text-[24px] font-bold leading-none tracking-normal text-black/70 transition-all duration-300 hover:text-black">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
