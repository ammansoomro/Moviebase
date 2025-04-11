import Home from "../pages/Home/Home";
import Movie from "../pages/Movie/Movie";
import AllMovies from "../pages/Movies/Movies";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="px-xxl">
        <Routes location={location} key={location.path}>
          <Route path="/" element={<Home />} />
          <Route path="/Movie/:id/:slug" element={<Movie />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/movies/search/:search" element={<AllMovies />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default Pages;
