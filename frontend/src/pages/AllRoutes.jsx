import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Course from "./Course";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
