import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.png";
import CourseCard from "../courseComponent/CourseCard";
import type { Course } from "../../types/course";
import HappyStudentsCard from "../HappyStudentsCard";
import yellowCircle from "../../assets/yellow-circle-2.png";
import whiteSpiral from "../../assets/spiral.png";
import yellowTriangle from "../../assets/yellow-triangle.png";

const sampleCourse1: Course = {
  id: 2,
  title: "Build Digital Asset",
  author: "purepearl studio",
  thumbnail: "/images/course/digital.jpg",
  rating: 4.5,
  lessonsCount: 17,
  duration: "2 hours 16 mins",
  commentsCount: 59,
  level: "Beginner",
  price: 25,
  priceType: "lifetime",
  enrolledBadge: "26+",
  studentAvatars: [
    "/images/students/01.png",
    "/images/students/02.png",
    "/images/students/03.png",
    "/images/students/04.png",
  ],
};

const sampleCourse2: Course = {
  id: 3,
  title: "The Power of Big Data",
  author: "purepearl studio",
  thumbnail: "/images/course/bigdata.jpg",
  rating: 4.5,
  lessonsCount: 17,
  duration: "2 hours 16 mins",
  commentsCount: 59,
  level: "Beginner",
  price: 25,
  priceType: "lifetime",
  enrolledBadge: "26+",
  studentAvatars: [
    "/images/students/01.png",
    "/images/students/02.png",
    "/images/students/03.png",
    "/images/students/04.png",
  ],
};

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0645e8] text-white">
      <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between">
        {Array.from({ length: 13 }).map((_, index) => (
          <div key={index} className="h-full border-r-2 border-white/20" />
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 2px, transparent 2px)`,
          backgroundSize: "100% 120px",
        }}
      />

      <div className="relative z-10 mx-auto min-h-screen w-full  px-[8.33%] pt-[120px] pb-6">
        <div className="absolute top-0 left-0 z-20 flex h-[120px] ml-[8.33%]   w-[8.33%] items-center ">
          <img
            src={logo}
            alt="ByteSpace Logo"
            className="h-[31.5px] w-[28.88px] shrink-0 object-contain"
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="space-y-8 lg:col-span-6">
            <div className=" space-y-2">
              <h1 className="text-[20px] font-bold tracking-tight text-white ">
                Sign in with ease
              </h1>
              <p className="text-lg leading-relaxed text-white/80 font-normal">
                Experience a seamless and efficient sign-in process that <br />{" "}
                grants you instant access to a world of knowledge.
              </p>
            </div>

            {/* Graphic Cards Illustration */}
            {/* <div className="relative mt-10 min-h-[340px] w-full max-w-md">
              <div className="absolute top-0 right-2 z-20 w-72 rounded-2xl bg-[#0F172A] p-3 shadow-2xl border border-gray-800">
                <div className="flex items-center justify-between pb-2 border-b border-gray-800">
                  <span className="text-[10px] text-gray-400 font-mono">
                    LAST 7 DAYS
                  </span>
                  <span className="text-[10px] text-gray-400">•••</span>
                </div>
                <div className="mt-2 h-20 w-full rounded-lg bg-gray-900/80 p-2 flex items-end gap-1">
                  <div className="h-4/5 w-1/6 bg-blue-500/40 rounded-t-xs" />
                  <div className="h-3/5 w-1/6 bg-blue-500/40 rounded-t-xs" />
                  <div className="h-full w-1/6 bg-blue-500 rounded-t-xs" />
                  <div className="h-2/5 w-1/6 bg-blue-500/40 rounded-t-xs" />
                  <div className="h-3/4 w-1/6 bg-blue-500/80 rounded-t-xs" />
                  <div className="h-1/2 w-1/6 bg-blue-500/40 rounded-t-xs" />
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] text-gray-400">
                  <span className="rounded-full bg-gray-800 px-2 py-0.5">
                    17 Lessons
                  </span>
                  <span className="rounded-full bg-gray-800 px-2 py-0.5">
                    2 hours 16 mins
                  </span>
                  <span className="rounded-full bg-gray-800 px-2 py-0.5">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="absolute top-20 left-0 z-10 w-72 rounded-2xl bg-white p-4 shadow-xl text-gray-900">
                <h4 className="text-xs font-bold text-gray-900">
                  the Power of Big Data
                </h4>
                <p className="text-[10px] text-gray-400">by purepearl studio</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-medium text-gray-600">
                    Beginner
                  </span>
                  <div className="flex -space-x-1">
                    <img
                      className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                      alt=""
                    />
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white ring-1 ring-white">
                      26+
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-44 left-6 z-30 w-72 rounded-2xl bg-white p-4 shadow-2xl border border-gray-100 text-gray-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      Build Digital
                    </h4>
                    <p className="text-[10px] text-gray-400">
                      by purepearl studio
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-blue-600">
                      $25
                    </span>
                    <span className="text-[9px] text-gray-400">/lifetime</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-medium text-gray-600">
                    Beginner
                  </span>
                  <div className="flex -space-x-1">
                    <img
                      className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-5 w-5 rounded-full ring-1 ring-white"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                      alt=""
                    />
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white ring-1 ring-white">
                      26+
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-4 z-40 w-52 rounded-2xl bg-[#CCFF00] p-3 shadow-lg">
                <span className="text-[10px] font-bold text-black">
                  Happy Students
                </span>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-black">
                    4.5 ★
                  </span>
                  <div className="flex -space-x-1">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                      2K+
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 left-10 z-30 h-10 w-10 rounded-full border-4 border-[#CCFF00] bg-transparent" />
            </div> */}

            <div className="relative w-full h-[600px]">
              {/* Left / Bottom Card (Build Digital) */}

              <img
                src={yellowCircle}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-8 left-10  z-30 h-[146.72px] w-[146.72px] object-contain select-none"
              />

              <img
                src={whiteSpiral}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-96 bottom-30  z-30 h-[146.72px] w-[146.72px] object-contain select-none"
              />

              <img
                src={yellowTriangle}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute  bottom-5  z-30 h-[146.72px] w-[146.72px] object-contain select-none"
              />
              <CourseCard
                course={sampleCourse1}
                className="absolute top-28 left-0 z-10 w-[373px] h-[384px] shadow-md backdrop-blur-sm bg-white/95 border-gray-200/80"
              />

              {/* Right / Top Card (The Power of Big Data) - Shifted right & up, stacked above */}
              <CourseCard
                course={sampleCourse2}
                className="absolute top-0 left-30 z-20 w-[373px] h-[384px] shadow-xl backdrop-blur-sm bg-white/95 border-gray-200/80"
              />
            </div>

            <div className="absolute bottom-[13%] left-[25%]">
              <HappyStudentsCard
                className="!bg-[#D4FB20] !z-10"
                starClassname="!fill-[#003BE2] !text-[#003BE2] "
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-[32px] bg-white p-8 sm:p-12 shadow-2xl text-gray-900">
              <span className="text-xs  text-[#003BE2]">Sign In</span>
              <h2 className=" text-[44px]  font-semibold tracking-tight text-gray-900">
                Welcome Back
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[14px] text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs text-gray-900 placeholder-gray-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[14px] text-gray-700">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs text-gray-900 placeholder-gray-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer rounded-full bg-[#CCFF00] px-4 py-1 text-[18px]  text-black transition hover:bg-[#b8e600] active:scale-95"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <span className="relative bg-white px-3 text-[11px] font-medium text-gray-400">
                  or
                </span>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-900 transition hover:bg-gray-50 active:scale-95"
                  aria-label="Sign in with Facebook"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3333 16.6667C33.3333 7.46191 25.8714 -3.8147e-06 16.6667 -3.8147e-06C7.46191 -3.8147e-06 0 7.46191 0 16.6667C0 24.9855 6.09476 31.8805 14.0625 33.1309V21.4844H9.83073V16.6667H14.0625V12.9948C14.0625 8.81771 16.5507 6.51041 20.3577 6.51041C22.1812 6.51041 24.0885 6.83593 24.0885 6.83593V10.9375H21.9869C19.9165 10.9375 19.2708 12.2222 19.2708 13.5403V16.6667H23.8932L23.1543 21.4844H19.2708V33.1309C27.2386 31.8805 33.3333 24.9855 33.3333 16.6667Z"
                      fill="black"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-900 transition hover:bg-gray-50 active:scale-95"
                  aria-label="Sign in with Google"
                >
                  <svg
                    width="33"
                    height="34"
                    viewBox="0 0 33 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.625 17.0417C32.625 15.9444 32.5278 14.9028 32.3611 13.8889H16.6667V20.1528H25.6528C25.25 22.2083 24.0694 23.9444 22.3194 25.125V29.2917H27.6806C30.8194 26.3889 32.625 22.1111 32.625 17.0417Z"
                      fill="black"
                    />
                    <path
                      d="M16.6667 6.59722C19.125 6.59722 21.3194 7.44445 23.0556 9.09723L27.8056 4.34722C24.9306 1.65278 21.1667 0 16.6667 0C10.1528 0 4.52778 3.75 1.79167 9.19445L7.31945 13.4861C8.63889 9.52778 12.3194 6.59722 16.6667 6.59722Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.6667 33.3333C10.1528 33.3333 4.52778 29.5833 1.79167 24.1389L7.31945 19.8472C8.63889 23.8056 12.3194 26.7361 16.6667 26.7361C18.9167 26.7361 20.8194 26.125 22.3194 25.125L27.6806 29.2917C24.9306 31.8333 21.1667 33.3333 16.6667 33.3333ZM7.31945 13.4861V9.19445H1.79167L7.31945 13.4861Z"
                      fill="black"
                    />
                    <path
                      d="M1.79167 19.8472H7.31945C6.97222 18.8472 6.79167 17.7778 6.79167 16.6667C6.79167 15.5556 6.98611 14.4861 7.31945 13.4861L1.79167 9.19445C0.652776 11.4444 0 13.9722 0 16.6667C0 19.3611 0.652776 21.8889 1.79167 24.1389V19.8472Z"
                      fill="black"
                    />
                    <path
                      d="M7.31945 19.8472H1.79167V24.1389L7.31945 19.8472Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-8 text-center text-[16px] text-gray-400">
                New user?{" "}
                <Link to="/signup" className="  text-blue-600 hover:underline">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
