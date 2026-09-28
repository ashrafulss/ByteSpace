import React, { useState } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 h-[120px] w-full bg-transparent">
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
              : "font-normal text-white/90"
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
              : "font-normal text-white/90"
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
              : "font-normal text-white/90"
          }`}
        >
          Creators
        </a>
      </nav>

      <div
        className="absolute top-1/2 hidden -translate-y-1/2 items-center gap-6 md:flex"
        style={{ right: "8.333%" }}
      >
        <button
          type="button"
          className="cursor-pointer text-[16px] font-medium text-white"
        >
          Sign In
        </button>
        <button
          type="button"
          className="cursor-pointer text-[16px] font-medium text-white"
        >
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
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-white md:hidden"
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {isMenuOpen && (
        <div className="absolute top-[120px] left-0 z-50 flex w-full flex-col gap-6 bg-[#0645e8] px-8 py-6 border-b border-white/20 shadow-2xl md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => {
                setActiveTab("home");
                setIsMenuOpen(false);
              }}
              className={`text-lg ${
                activeTab === "home" ? "font-semibold " : "text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#courses"
              onClick={() => {
                setActiveTab("courses");
                setIsMenuOpen(false);
              }}
              className={`text-lg ${
                activeTab === "courses" ? "font-semibold " : "text-white"
              }`}
            >
              Courses
            </a>
            <a
              href="#creators"
              onClick={() => {
                setActiveTab("creators");
                setIsMenuOpen(false);
              }}
              className={`text-lg ${
                activeTab === "creators" ? "font-semibold " : "text-white"
              }`}
            >
              Creators
            </a>
          </nav>

          <hr className="border-white/20" />

          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button
                type="button"
                className="text-base font-medium text-white"
              >
                Sign In
              </button>
              <button
                type="button"
                className="text-base font-medium text-[#ccff00]"
              >
                Join Us
              </button>
            </div>
            <button
              type="button"
              className="flex items-center justify-center p-1"
              aria-label="Cart"
            >
              <img
                src={cartIcon}
                alt="Cart"
                className="h-6 w-6 object-contain"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
