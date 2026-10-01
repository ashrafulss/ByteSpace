import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative overflow-hidden bg-[#0645e8] text-white">
        <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full justify-between">
          {Array.from({ length: 13 }).map((_, index) => (
            <div key={index} className="h-full border-r-2 border-white/30" />
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 2px, transparent 2px)`,
            backgroundSize: "100% 120px",
          }}
        />

        <div className="relative z-10">
          <Header />
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
