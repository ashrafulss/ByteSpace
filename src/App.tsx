// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import { ScrollToHash } from "./components/ScrollToHash";
import CourseDetail from "./components/courseComponent/CourseDetail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PageNotFound from "./components/auth/PageNotFound";
import Profile from "./components/creator/Profile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/course/:id/*" element={<CourseDetail />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
