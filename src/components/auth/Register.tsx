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

export const Register: React.FC = () => {
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
                Sign up and come in
              </h1>
              <p className="text-lg leading-relaxed text-white/80 font-normal">
                The registration process is straightforward, uncomplicated,{" "}
                <br /> and efficient, allowing users to sign up quickly, easily,
                and at <br /> no cost
              </p>
            </div>

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
              <span className="text-xs  text-[#003BE2]">Create an Account</span>
              <h2 className=" text-[44px]  font-semibold tracking-tight text-gray-900">
                Welcome to ByteSpace
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
                    Continue
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

              <div className="mt-8 text-center text-[16px] text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="  text-blue-600 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
