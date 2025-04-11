// src/pages/Movies/Movies.jsx
import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom"; // ✅ this is what you need
import { motion } from "framer-motion";
import Pagination from "../../components/Pagination/Pagination";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBar from "../../components/Search/Search";
import { fetchMoviesFromAPI } from "../../services/movieService";
import "./Movies.scss";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [movieCount, setMovieCount] = useState(0);
  const [searchParams] = useSearchParams(); // ✅ correct usage

  const itemsPerPage = 20;

  const loadMovies = useCallback(
    async (page = 1) => {
      try {
        const { movies, movieCount } = await fetchMoviesFromAPI({
          page,
          search: searchParams.get("search") || "",
          itemsPerPage,
        });

        setMovies(movies);
        setMovieCount(movieCount);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setMovies([]);
        setMovieCount(0);
      }
    },
    [searchParams, itemsPerPage]
  );

  useEffect(() => {
    loadMovies(1);
  }, [loadMovies]);

  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    loadMovies(currentPage);
  };

  return (
    <div className="all-movies-wrapper">
      <SearchBar />

      <Pagination
        pageCount={Math.ceil(movieCount / itemsPerPage)}
        onPageChange={handlePageClick}
      />

      <motion.div
        className="movie-grid"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </motion.div>
    </div>
  );
}

export default Movies;
