import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import SearchBar from "../../components/Search/Search";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Movies.scss";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [movieCount, setMovieCount] = useState(0);
  const param = useParams();

  const isSearchMode = !!param.search;
  const itemsPerPage = 20;

  const fetchMovies = async (page = 1) => {
    try {
      const baseUrl = "https://yts.mx/api/v2/list_movies.json";
      const params = new URLSearchParams({
        limit: itemsPerPage,
        page,
        ...(isSearchMode ? { query_term: param.search } : { sort_by: "year" }),
      });

      const fullUrl = `${baseUrl}?${params.toString()}`;
      const wrappedUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(fullUrl)}`;
      const response = await fetch(wrappedUrl);
      const result = await response.json();
      const data = JSON.parse(result.contents);

      setMovies(data.data.movies || []);
      setMovieCount(data.data.movie_count || 0);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);
      setMovieCount(0);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, [param.search]);

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    await fetchMovies(currentPage);
  };

  return (
    <div className="all-movies-wrapper">
      <SearchBar />
      <div className="paginate-container">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          onPageChange={handlePageClick}
          pageCount={(movieCount || 43430) / itemsPerPage}
          containerClassName={"pagination"}
          pageClassName={"pagination"}
          previousClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          nextClassName={"pagination"}
          breakClassName={"pagination"}
          breakLinkClassName={"pagination"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
        />
      </div>

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
