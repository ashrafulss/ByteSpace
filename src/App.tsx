// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import { ScrollToHash } from "./components/ScrollToHash";
import CourseDetail from "./components/CourseDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {/* Catch /course/:id and all sub-routes (/about, /lessons, /reviews) */}
          <Route path="/course/:id/*" element={<CourseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
