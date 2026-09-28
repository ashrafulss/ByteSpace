import React, { useState } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <header className="relative z-20 h-[120px] w-full bg-transparent">
      <div
        className="absolute top-1/2 flex -translate-y-1/2 items-end gap-2.5"
        style={{ left: "8.333%" }}
      >
        <img
          src={logo}
          alt="ByteSpace Logo"
          className="h-[31.5px] w-[28.88px] shrink-0 object-contain pb-[2px]"
        />
        <span className="font-clash text-[24px] font-bold leading-none tracking-normal text-white">
          ByteSpace
        </span>
      </div>

      <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
        <a
          href="#home"
          onClick={() => setActiveTab("home")}
          className={`relative py-2 text-[16px] transition-all ${
            activeTab === "home"
              ? "font-semibold text-white"
              : "font-normal text-white/90 "
          }`}
        >
          Home
        </a>

        <a
          href="#courses"
          onClick={() => setActiveTab("courses")}
          className={`relative py-2 text-[16px] transition-all ${
            activeTab === "courses"
              ? "font-semibold text-white"
              : "font-normal text-white/90 "
          }`}
        >
          Courses
        </a>

        <a
          href="#creators"
          onClick={() => setActiveTab("creators")}
          className={`relative py-2 text-[16px] transition-all ${
            activeTab === "creators"
              ? "font-semibold text-white"
              : "font-normal text-white/90 "
          }`}
        >
          Creators
        </a>
      </nav>

      <div
        className="absolute top-1/2 hidden -translate-y-1/2 items-center gap-6 md:flex"
        style={{ right: "8.333%" }}
      >
        <button type="button" className="text-[16px] font-medium text-white ">
          Sign In
        </button>
        <button type="button" className="text-[16px] font-medium text-white ">
          Join Us
        </button>
        <button
          type="button"
          className="ml-2 flex items-center justify-center p-1 transition hover:opacity-80"
          aria-label="Cart"
        >
          <img src={cartIcon} alt="Cart" className="h-6 w-6 object-contain" />
        </button>
      </div>

      <button
        type="button"
        className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-white md:hidden"
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
