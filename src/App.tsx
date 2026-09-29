import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CourseDetail from "./components/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
