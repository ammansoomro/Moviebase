import Home from "./Home";
import Movie from "./Movie";
import AllMovies from "./Movies";
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.path}>
        <Route path="/" element={<Home />} />
        <Route path="/Movie/:id/:slug" element={<Movie />} />
        <Route path="/movies" element={<AllMovies />} />
        <Route path="/movies/search/:search" element={<AllMovies />} />
        </Routes>
    </AnimatePresence>

  );
}

export default Pages;
