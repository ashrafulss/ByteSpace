import React, { useState } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setActiveTab(targetId);
    setIsMenuOpen(false); // Close mobile drawer if open

    if (location.pathname === "/") {
      // Already on home page: scroll smoothly
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      // On another page (e.g., /course/2): navigate to home with section hash
      if (targetId === "home") {
        navigate("/");
      } else {
        navigate(`/#${targetId}`);
      }
    }
  };

  return (
    <header className="relative z-50 h-[120px] w-full bg-transparent">
      {/* Logo Container */}
      <Link
        to="/"
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
      </Link>

      {/* Desktop Navigation */}
      <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className={`relative py-2 text-[16px] transition-all cursor-pointer ${
            activeTab === "home"
              ? "font-semibold text-white"
              : "font-normal text-white/90"
          }`}
        >
          Home
        </a>

        <a
          href="#courses"
          onClick={(e) => handleNavClick(e, "courses")}
          className={`relative py-2 text-[16px] transition-all cursor-pointer ${
            activeTab === "courses"
              ? "font-semibold text-white"
              : "font-normal text-white/90"
          }`}
        >
          Courses
        </a>

        <a
          href="#creators"
          onClick={(e) => handleNavClick(e, "creators")}
          className={`relative py-2 text-[16px] transition-all cursor-pointer ${
            activeTab === "creators"
              ? "font-semibold text-white"
              : "font-normal text-white/90"
          }`}
        >
          Creators
        </a>
      </nav>

      {/* Actions */}
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

      {/* Mobile Toggle Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-white md:hidden"
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[120px] left-0 z-50 flex w-full flex-col gap-6 bg-[#0645e8] px-8 py-6 border-b border-white/20 shadow-2xl md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className={`text-lg text-white ${
                activeTab === "home" ? "font-semibold underline" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#courses"
              onClick={(e) => handleNavClick(e, "courses")}
              className={`text-lg text-white ${
                activeTab === "courses" ? "font-semibold underline" : ""
              }`}
            >
              Courses
            </a>
            <a
              href="#creators"
              onClick={(e) => handleNavClick(e, "creators")}
              className={`text-lg text-white ${
                activeTab === "creators" ? "font-semibold underline" : ""
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
