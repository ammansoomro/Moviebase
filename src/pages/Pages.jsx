import Home from "./Home";
import Movie from "./Movie";
import AllMovies from "./AllMovies";
import Searched from "./Searched";
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
        <Route path="/AllMovies" element={<AllMovies />} />
        <Route path="/Searched/:search" element={<Searched />} />
      </Routes>
    </AnimatePresence>

  );
}

export default Pages;
