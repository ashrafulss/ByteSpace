import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="relative z-20 h-[120px] w-full bg-transparent">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ccff00] text-xl font-extrabold text-[#0645e8]">
            b
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            ByteSpace
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#home"
            className="relative py-2 text-sm font-semibold text-white"
          >
            Home
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ccff00]" />
          </a>
          <a
            href="#courses"
            className="text-sm font-medium text-white/90 transition hover:text-[#ccff00]"
          >
            Courses
          </a>
          <a
            href="#creators"
            className="text-sm font-medium text-white/90 transition hover:text-[#ccff00]"
          >
            Creators
          </a>
        </nav>

        {/* Right Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            className="text-sm font-medium text-white hover:text-[#ccff00]"
          >
            Sign In
          </button>
          <button
            type="button"
            className="text-sm font-medium text-white hover:text-[#ccff00]"
          >
            Join Us
          </button>
          <button
            type="button"
            className="ml-2 text-xl text-white hover:text-[#ccff00]"
            aria-label="Cart"
          >
            🛍️
          </button>
        </div>

        {/* Mobile Menu */}
        <button type="button" className="text-2xl text-white md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
