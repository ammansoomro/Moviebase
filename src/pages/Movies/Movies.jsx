import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Pagination from "../../components/Pagination/Pagination";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchBar from "../../components/Search/Search";
import { fetchMoviesFromAPI } from "../../services/movieService";
import "./Movies.scss";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [movieCount, setMovieCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const { search } = useParams();
  
  // Check screen width on load and on resize
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 10 : 20); 
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const loadMovies = useCallback(
    async (page = 1) => {
      try {
        const { movies, movieCount } = await fetchMoviesFromAPI({
          page,
          search: search,
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
    [search, itemsPerPage]
  );

  useEffect(() => {
    loadMovies(1);
  }, [loadMovies]);

  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    loadMovies(currentPage);
  };

  return (
    <div className="flex flex-col gap-l px-xxl py-l">
      <SearchBar />

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

      <Pagination
        pageCount={Math.ceil(movieCount / itemsPerPage)}
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default Movies;
