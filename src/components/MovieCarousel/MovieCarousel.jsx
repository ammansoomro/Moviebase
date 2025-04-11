import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../Loader/Loader"; 
import { fetchMovies } from "../../services/movieService"; 
import "./MovieCarousel.scss";

const MovieCarousel = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true); 
      const fetchedMovies = await fetchMovies(title);
      setMovies(fetchedMovies);
      setIsLoading(false); 
    };

    loadMovies();
  }, [title]);

  return (
    <div className="wrapper">
      <div className="section-heading">
        <h1>{title}</h1>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <Splide
          options={{
            perPage: 4,
            perMove: 4,
            pagination: false,
            arrows: true,
            focus: "center",
            gap: "5rem",
          }}
        >
          {movies.map((movie) => (
            <SplideSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default MovieCarousel;
