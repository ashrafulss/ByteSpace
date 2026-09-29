import React from "react";
import logo from "../assets/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white pb-12 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* 50 / 50 Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side (50% Width): Logo & Newsletter */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <img
                  src={logo}
                  alt="ByteSpace Logo"
                  className="h-[31.5px] w-[28.88px] shrink-0 object-contain"
                />
                <span className="font-clash text-[24px] font-bold leading-none tracking-normal text-gray-900">
                  ByteSpace
                </span>
              </div>

              <p className="mt-4  font-satoshi text-sm text-[#525866] ">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>

              {/* Newsletter Input & Button */}
              <div className="mt-6 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[50px] w-full flex-1 rounded-full border border-gray-200 bg-white px-5 text-sm text-gray-800 outline-none transition focus:border-[#0038FF]"
                />
                <button
                  type="button"
                  className="cursor-pointer flex h-[52px] shrink-0 items-center justify-center rounded-full bg-[#ccff00] px-8 text-[18px]  text-black transition hover:bg-[#b8e600] active:scale-95"
                >
                  Search
                </button>
              </div>

              <p className="mt-3 max-w-md font-satoshi text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Side (50% Width): Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Column 1 */}
            <div className="space-y-3">
              <ul className="space-y-3 font-satoshi text-sm font-medium text-[#525866]">
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Featured Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Featured Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    IT
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <ul className="space-y-3 font-satoshi text-sm font-medium text-[#525866]">
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Sport
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 space-y-3 sm:col-span-1">
              <ul className="space-y-3 font-satoshi text-sm font-medium text-[#525866]">
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Become a Creator
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-900">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="font-satoshi text-xs text-gray-500">
            &copy; 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6 font-satoshi text-xs text-gray-500">
            <a href="#" className="transition hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-gray-900">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
